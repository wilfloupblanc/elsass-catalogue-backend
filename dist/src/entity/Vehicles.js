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
let Vehicles = class Vehicles extends Entity {
    constructor(vehicles) {
        super(vehicles);
        this.description = null;
        this.photo_url = null;
        this.max_speed = null;
        this.horsepower = null;
        this.torque = null;
        this.power_to_weight = null;
        this.country = null;
        this.country_code = null;
        this.year = null;
        this.difficulty = null;
        this.is_active = true;
        this.created_at = new Date();
    }
};
__decorate([
    Column({ type: "bigint", pk: true }),
    __metadata("design:type", Number)
], Vehicles.prototype, "id", void 0);
__decorate([
    Column({ type: "bigint" }),
    __metadata("design:type", Number)
], Vehicles.prototype, "category_id", void 0);
__decorate([
    Column({ type: "varchar", size: 150 }),
    __metadata("design:type", String)
], Vehicles.prototype, "name", void 0);
__decorate([
    Column({ type: "text", nullable: true }),
    __metadata("design:type", Object)
], Vehicles.prototype, "description", void 0);
__decorate([
    Column({ type: "varchar", size: 255, nullable: true }),
    __metadata("design:type", Object)
], Vehicles.prototype, "photo_url", void 0);
__decorate([
    Column({ type: "int", nullable: true }),
    __metadata("design:type", Object)
], Vehicles.prototype, "max_speed", void 0);
__decorate([
    Column({ type: "int", nullable: true }),
    __metadata("design:type", Object)
], Vehicles.prototype, "horsepower", void 0);
__decorate([
    Column({ type: "int", nullable: true }),
    __metadata("design:type", Object)
], Vehicles.prototype, "torque", void 0);
__decorate([
    Column({ type: "float", nullable: true }),
    __metadata("design:type", Object)
], Vehicles.prototype, "power_to_weight", void 0);
__decorate([
    Column({ type: "varchar", size: 100, nullable: true }),
    __metadata("design:type", Object)
], Vehicles.prototype, "country", void 0);
__decorate([
    Column({ type: "varchar", size: 2, nullable: true }),
    __metadata("design:type", Object)
], Vehicles.prototype, "country_code", void 0);
__decorate([
    Column({ type: "int", nullable: true }),
    __metadata("design:type", Object)
], Vehicles.prototype, "year", void 0);
__decorate([
    Column({ type: "tinyint", nullable: true }),
    __metadata("design:type", Object)
], Vehicles.prototype, "difficulty", void 0);
__decorate([
    Column({ type: "bool" }),
    __metadata("design:type", Boolean)
], Vehicles.prototype, "is_active", void 0);
__decorate([
    Column({ type: "timestamp" }),
    __metadata("design:type", Object)
], Vehicles.prototype, "created_at", void 0);
Vehicles = __decorate([
    Table(),
    __metadata("design:paramtypes", [Object])
], Vehicles);
export { Vehicles };
