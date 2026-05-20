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
let Circuits = class Circuits extends Entity {
    constructor(circuits) {
        super(circuits);
        this.photo_url = null;
        this.length_m = null;
        this.country = null;
        this.difficulty = null;
        this.is_active = true;
        this.created_at = new Date();
    }
};
__decorate([
    Column({ type: "bigint", pk: true }),
    __metadata("design:type", Number)
], Circuits.prototype, "id", void 0);
__decorate([
    Column({ type: "varchar", size: 150 }),
    __metadata("design:type", String)
], Circuits.prototype, "name", void 0);
__decorate([
    Column({ type: "varchar", size: 255, nullable: true }),
    __metadata("design:type", Object)
], Circuits.prototype, "photo_url", void 0);
__decorate([
    Column({ type: "int", nullable: true }),
    __metadata("design:type", Object)
], Circuits.prototype, "length_m", void 0);
__decorate([
    Column({ type: "varchar", size: 100, nullable: true }),
    __metadata("design:type", Object)
], Circuits.prototype, "country", void 0);
__decorate([
    Column({ type: "tinyint", nullable: true }),
    __metadata("design:type", Object)
], Circuits.prototype, "difficulty", void 0);
__decorate([
    Column({ type: "bool" }),
    __metadata("design:type", Boolean)
], Circuits.prototype, "is_active", void 0);
__decorate([
    Column({ type: "timestamp" }),
    __metadata("design:type", Object)
], Circuits.prototype, "created_at", void 0);
Circuits = __decorate([
    Table(),
    __metadata("design:paramtypes", [Object])
], Circuits);
export { Circuits };
