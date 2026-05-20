import { Fixture } from "@lyra-js/core"

import { User } from "@entity/User"

export class UserFixtures extends Fixture {
  private users = [
    {
      email: "tristangrandjean3@gmail.com",
      password: "Titouandu88*",
      role: "ROLE_ADMIN"
    }
  ]

  load = async () => {
    await this.loadUsers()
  }

  private loadUsers = async () => {
    for (const u of this.users) {
      const hashedPassword = await this.bcrypt.hash(u.password, 10)
      const user = new User()
      user.email = u.email
      user.password = hashedPassword
      user.role = u.role
      user.created_at = new Date()
      await this.userRepository.save(user)
    }
  }
}
