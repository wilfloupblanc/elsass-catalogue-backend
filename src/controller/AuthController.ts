import {
  AccessControl,
  Config,
  isAuthenticated,
  Mail,
  NotFoundException,
  SecurityConfig,
  ValidationException
} from "@lyra-js/core"
import {
  Controller,
  Delete,
  Get,
  Post,
  rateLimiter,
  Route,
  UnauthorizedException
} from "@lyra-js/core"

import { User } from "@entity/User"

const securityConfig = new SecurityConfig().getConfig()

@Route({ path: "/auth" })
export class AuthController extends Controller {
  @Post({ path: "/sign-in", middlewares: [rateLimiter] })
  async signIn() {
    try {
      const { email, password } = this.req.body

      if (!email || !password) {
        this.badRequest("Missing required fields")
      }

      const user = await this.userRepository.findOneBy({ email })

      if (!user || !(user && (await this.bcrypt.compare(password, user.password)))) {
        this.unauthorized("Invalid credentials")
      }

      const token = this.jwt.sign({ id: user.id }, securityConfig.jwt.secret_key as string, {
        algorithm: securityConfig.jwt.algorithm as string,
        expiresIn: securityConfig.jwt.token_expiration
      })

      const refreshToken = this.jwt.sign({ id: user.id }, securityConfig.jwt.secret_key_refresh as string, {
        algorithm: securityConfig.jwt.algorithm as string,
        expiresIn: securityConfig.jwt.refresh_token_expiration
      })

      await this.userRepository.save(user)

      this.res.cookie("Token", token, {
        sameSite: "Lax",
        httpOnly: true,
        secure: process.env.ENV === "production",
        maxAge: securityConfig.jwt.token_expiration * 1000,
        partitioned: false
      })

      const base_path = new Config().get("router.base_path")

      this.res.cookie("RefreshToken", refreshToken, {
        path: `${base_path}/auth`,
        sameSite: "Lax",
        httpOnly: true,
        secure: process.env.ENV === "production",
        maxAge: securityConfig.jwt.refresh_token_expiration * 1000,
        partitioned: false
      })

      const { password: _, ...userWithoutPassword } = user

      this.res
        .status(200)
        .json({ message: "User authenticated in successfully", user: userWithoutPassword, token, refreshToken })
    } catch (error) {
      this.next(error)
    }
  }

  @Get({ path: "/user", middlewares: [isAuthenticated] })
  async getAuthenticatedUser() {
    try {
      const user = this.req.user as User

      if (!user) throw new UnauthorizedException()

      this.res.status(200).json({
        id: user.id,
        email: user.email,
        role: user.role
      })
    } catch (error) {
      this.next(error)
    }
  }

  @Get({ path: "/sign-out" })
  async signOut() {
    try {
      const base_path = new Config().get("router.base_path")
      this.res.clearCookie("Token")
      this.res.clearCookie("RefreshToken", { path: `${base_path}/auth` })
      return this.res.status(200).json({ message: "Unauthenticated successfully" })
    } catch (error) {
      this.next(error)
    }
  }

  @Get({ path: "/refresh-token" })
  async refreshToken() {
    try {
      const securityConfig = new SecurityConfig().getConfig()
      let refreshToken = this.req.cookies.RefreshToken
      if (!refreshToken) {
        const authHeader = this.req.headers.authorization
        if (authHeader && authHeader.startsWith("Bearer ")) {
          refreshToken = authHeader.substring(7)
        }
      }

      AccessControl.checkRefreshTokenValid(refreshToken)

      const decoded = await AccessControl.decodeToken(refreshToken)

      if (!decoded || !decoded.id) throw new UnauthorizedException("Invalid refresh token")

      const user = await this.userRepository.find(decoded.id)

      if (!user) throw new UnauthorizedException("Invalid refresh token")

      const token = await AccessControl.getNewToken(user)

      this.res.cookie("Token", token, {
        sameSite: "Lax",
        httpOnly: true,
        secure: process.env.ENV === "production",
        maxAge: securityConfig.jwt.token_expiration * 1000,
        partitioned: false
      })

      const { password: _, ...userWithoutPassword } = user

      this.res
        .status(200)
        .json({ message: "User authenticated in successfully", user: userWithoutPassword, token, refreshToken })
    } catch (_refreshError) {
      return this.res.redirect(securityConfig.auth_routes.sign_out)
    }
  }

  @Delete({ path: "/delete-account", middlewares: [isAuthenticated] })
  async removeUser() {
    const user = this.req.user

    if (!user) throw new UnauthorizedException()

    await this.userRepository.delete(user.id)

    this.res.clearCookie("Token")
    const base_path = new Config().get("router.base_path")
    this.res.clearCookie("RefreshToken", { path: `${base_path}/auth` })

    this.res.status(200).json({ message: "User deleted successfully" })
  }
}
