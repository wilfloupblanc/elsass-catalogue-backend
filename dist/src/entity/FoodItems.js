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
let FoodItems = class FoodItems extends Entity {
    constructor(fooditems) {
        super(fooditems);
        this.description = null;
        this.photo_url = null;
        this.is_active = true;
        this.created_at = new Date();
    }
};
__decorate([
    Column({ type: "bigint", pk: true }),
    __metadata("design:type", Number)
], FoodItems.prototype, "id", void 0);
__decorate([
    Column({ type: "varchar", size: 150 }),
    __metadata("design:type", String)
], FoodItems.prototype, "name", void 0);
__decorate([
    Column({ type: "text", nullable: true }),
    __metadata("design:type", Object)
], FoodItems.prototype, "description", void 0);
__decorate([
    Column({ type: "varchar", size: 255, nullable: true }),
    __metadata("design:type", Object)
], FoodItems.prototype, "photo_url", void 0);
__decorate([
    Column({ type: "varchar", size: 50 }),
    __metadata("design:type", String)
], FoodItems.prototype, "category", void 0);
__decorate([
    Column({ type: "float" }),
    __metadata("design:type", Number)
], FoodItems.prototype, "price", void 0);
__decorate([
    Column({ type: "bool" }),
    __metadata("design:type", Boolean)
], FoodItems.prototype, "is_active", void 0);
__decorate([
    Column({ type: "timestamp" }),
    __metadata("design:type", Object)
], FoodItems.prototype, "created_at", void 0);
FoodItems = __decorate([
    Table(),
    __metadata("design:paramtypes", [Object])
], FoodItems);
export { FoodItems };
