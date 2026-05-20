var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { AccessControl, Config, isAuthenticated, SecurityConfig } from "@lyra-js/core";
import { Controller, Delete, Get, Post, rateLimiter, Route, UnauthorizedException } from "@lyra-js/core";
const securityConfig = new SecurityConfig().getConfig();
let AuthController = class AuthController extends Controller {
    async signIn() {
        try {
            const { email, password } = this.req.body;
            if (!email || !password) {
                this.badRequest("Missing required fields");
            }
            const user = await this.userRepository.findOneBy({ email });
            if (!user || !(user && (await this.bcrypt.compare(password, user.password)))) {
                this.unauthorized("Invalid credentials");
            }
            const token = this.jwt.sign({ id: user.id }, securityConfig.jwt.secret_key, {
                algorithm: securityConfig.jwt.algorithm,
                expiresIn: securityConfig.jwt.token_expiration
            });
            const refreshToken = this.jwt.sign({ id: user.id }, securityConfig.jwt.secret_key_refresh, {
                algorithm: securityConfig.jwt.algorithm,
                expiresIn: securityConfig.jwt.refresh_token_expiration
            });
            await this.userRepository.save(user);
            this.res.cookie("Token", token, {
                sameSite: "Lax",
                httpOnly: true,
                secure: process.env.ENV === "production",
                maxAge: securityConfig.jwt.token_expiration * 1000,
                partitioned: false
            });
            const base_path = new Config().get("router.base_path");
            this.res.cookie("RefreshToken", refreshToken, {
                path: `${base_path}/auth`,
                sameSite: "Lax",
                httpOnly: true,
                secure: process.env.ENV === "production",
                maxAge: securityConfig.jwt.refresh_token_expiration * 1000,
                partitioned: false
            });
            const { password: _ } = user, userWithoutPassword = __rest(user, ["password"]);
            this.res
                .status(200)
                .json({ message: "User authenticated in successfully", user: userWithoutPassword, token, refreshToken });
        }
        catch (error) {
            this.next(error);
        }
    }
    async getAuthenticatedUser() {
        try {
            const user = this.req.user;
            if (!user)
                throw new UnauthorizedException();
            this.res.status(200).json({
                id: user.id,
                email: user.email,
                role: user.role
            });
        }
        catch (error) {
            this.next(error);
        }
    }
    async signOut() {
        try {
            const base_path = new Config().get("router.base_path");
            this.res.clearCookie("Token");
            this.res.clearCookie("RefreshToken", { path: `${base_path}/auth` });
            return this.res.status(200).json({ message: "Unauthenticated successfully" });
        }
        catch (error) {
            this.next(error);
        }
    }
    async refreshToken() {
        try {
            const securityConfig = new SecurityConfig().getConfig();
            let refreshToken = this.req.cookies.RefreshToken;
            if (!refreshToken) {
                const authHeader = this.req.headers.authorization;
                if (authHeader && authHeader.startsWith("Bearer ")) {
                    refreshToken = authHeader.substring(7);
                }
            }
            AccessControl.checkRefreshTokenValid(refreshToken);
            const decoded = await AccessControl.decodeToken(refreshToken);
            if (!decoded || !decoded.id)
                throw new UnauthorizedException("Invalid refresh token");
            const user = await this.userRepository.find(decoded.id);
            if (!user)
                throw new UnauthorizedException("Invalid refresh token");
            const token = await AccessControl.getNewToken(user);
            this.res.cookie("Token", token, {
                sameSite: "Lax",
                httpOnly: true,
                secure: process.env.ENV === "production",
                maxAge: securityConfig.jwt.token_expiration * 1000,
                partitioned: false
            });
            const { password: _ } = user, userWithoutPassword = __rest(user, ["password"]);
            this.res
                .status(200)
                .json({ message: "User authenticated in successfully", user: userWithoutPassword, token, refreshToken });
        }
        catch (_refreshError) {
            return this.res.redirect(securityConfig.auth_routes.sign_out);
        }
    }
    async removeUser() {
        const user = this.req.user;
        if (!user)
            throw new UnauthorizedException();
        await this.userRepository.delete(user.id);
        this.res.clearCookie("Token");
        const base_path = new Config().get("router.base_path");
        this.res.clearCookie("RefreshToken", { path: `${base_path}/auth` });
        this.res.status(200).json({ message: "User deleted successfully" });
    }
};
__decorate([
    Post({ path: "/sign-in", middlewares: [rateLimiter] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "signIn", null);
__decorate([
    Get({ path: "/user", middlewares: [isAuthenticated] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "getAuthenticatedUser", null);
__decorate([
    Get({ path: "/sign-out" }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "signOut", null);
__decorate([
    Get({ path: "/refresh-token" }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "refreshToken", null);
__decorate([
    Delete({ path: "/delete-account", middlewares: [isAuthenticated] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "removeUser", null);
AuthController = __decorate([
    Route({ path: "/auth" })
], AuthController);
export { AuthController };
