var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Column, Entity, Table } from "@lyra-js/core";
import { UserRepository } from "../repository/UserRepository.js";
let ResetPassword = class ResetPassword extends Entity {
    constructor(resetpassword) {
        super(resetpassword);
        this.requested_at = new Date();
        this.expires_at = new Date();
    }
    async getUser() {
        const userRepository = new UserRepository();
        return await userRepository.find(this.user);
    }
};
__decorate([
    Column({ type: "bigint", pk: true }),
    __metadata("design:type", Number)
], ResetPassword.prototype, "id", void 0);
__decorate([
    Column({ type: "bigint", fk: true, references: "user.id", onDelete: "CASCADE", unique: true }),
    __metadata("design:type", Number)
], ResetPassword.prototype, "user", void 0);
__decorate([
    Column({ type: "varchar", size: 255, unique: true }),
    __metadata("design:type", String)
], ResetPassword.prototype, "token", void 0);
__decorate([
    Column({ type: "timestamp" }),
    __metadata("design:type", Object)
], ResetPassword.prototype, "requested_at", void 0);
__decorate([
    Column({ type: "timestamp" }),
    __metadata("design:type", Object)
], ResetPassword.prototype, "expires_at", void 0);
ResetPassword = __decorate([
    Table(),
    __metadata("design:paramtypes", [Object])
], ResetPassword);
export { ResetPassword };
