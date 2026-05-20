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
import { AccessControl, Controller, Delete, Get, isAuthenticated, Patch, Post, Route, UnauthorizedException, ValidationException, Validator } from "@lyra-js/core";
import { User } from "../entity/User.js";
let UserController = class UserController extends Controller {
    async list() {
        try {
            const users = (await this.userRepository.findAll()).map((user) => {
                const { password: _password } = user, userWithoutPassword = __rest(user, ["password"]);
                return userWithoutPassword;
            });
            return this.res.status(200).json({ message: "Users fetched successfully", users });
        }
        catch (error) {
            return this.next(error);
        }
    }
    async read(user) {
        try {
            const { password: _password } = user, userWithoutPassword = __rest(user, ["password"]);
            return this.res.status(200).json({ message: "User fetched successfully", user: userWithoutPassword });
        }
        catch (error) {
            return this.next(error);
        }
    }
    async create() {
        try {
            const { data } = this.req.body;
            if (!data.email || !data.password) {
                new ValidationException("All fields are required.");
            }
            if (!Validator.isEmailValid(data.email)) {
                new ValidationException("Invalid email format.");
            }
            if (!Validator.isPasswordValid(data.password)) {
                new ValidationException("Password is too weak. It must be 10 characters long, including at least 1 lowercase, 1 uppercase, 1 number and 1 special character.");
            }
            const isEmailUsed = await this.userRepository.findOneBy({ email: data.email });
            if (isEmailUsed) {
                throw new Error("Email already in use");
            }
            const user = new User();
            const hashedPassword = await this.bcrypt.hash(data.password, 10);
            user.email = data.email;
            user.password = hashedPassword;
            user.role = "ROLE_USER";
            await this.userRepository.save(user);
            return this.res.status(201).json({ message: "User created successfully" });
        }
        catch (error) {
            return this.next(error);
        }
    }
    async update(user) {
        try {
            const { data } = this.req.body;
            if (!user)
                return this.res.status(404).json({ message: "User not found" });
            if (!AccessControl.isOwner(this.req.user, user.id) && !AccessControl.hasRoleHigherThan(this.req.user, user.role))
                throw new UnauthorizedException();
            const { password: _password, email: _email, role } = data, updateData = __rest(data, ["password", "email", "role"]);
            const finalData = AccessControl.hasRoleHigherThan(this.req.user, user.role) ? updateData : Object.assign(Object.assign({}, updateData), { role });
            await this.userRepository.save(finalData);
            return this.res.status(200).json({ message: "User updated successfully" });
        }
        catch (error) {
            return this.next(error);
        }
    }
    async delete() {
        try {
            const { id } = this.req.params;
            const user = await this.userRepository.find(id);
            if (!user)
                return this.res.status(404).json({ message: "User not found" });
            if (!AccessControl.isOwner(this.req.user, user.id) && !AccessControl.hasRoleHigherThan(this.req.user, user.role))
                throw new UnauthorizedException();
            if (!(user === null || user === void 0 ? void 0 : user.id))
                this.res.status(400).json({ message: "Invalid user id" });
            if ((user === null || user === void 0 ? void 0 : user.id) && id)
                await this.userRepository.delete(id);
            return this.res.status(200).json({ message: "User deleted successfully" });
        }
        catch (error) {
            return this.next(error);
        }
    }
};
__decorate([
    Get({ path: "/" }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserController.prototype, "list", null);
__decorate([
    Get({ path: "/:user", resolve: { user: User } }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [User]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "read", null);
__decorate([
    Post({ path: "/" }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserController.prototype, "create", null);
__decorate([
    Patch({ path: "/:user", resolve: { user: User } }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [User]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "update", null);
__decorate([
    Delete({ path: "/:id" }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserController.prototype, "delete", null);
UserController = __decorate([
    Route({ path: "/user", middlewares: [isAuthenticated] })
], UserController);
export { UserController };
