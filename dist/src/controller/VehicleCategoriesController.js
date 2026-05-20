var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Controller, Delete, Get, Post, Put, Route } from "@lyra-js/core";
import { VehicleCategories } from "../entity/VehicleCategories.js";
let VehicleCategoriesController = class VehicleCategoriesController extends Controller {
    async list() {
        try {
            const vehiclecategories = await this.vehicleCategoriesRepository.findAll();
            return this.res.status(200).json({ message: "VehicleCategories list fetched successfully", vehiclecategories });
        }
        catch (error) {
            return this.next(error);
        }
    }
    async read(vehiclecategories) {
        try {
            if (!vehiclecategories)
                return this.res.status(404).json({ message: "VehicleCategories not found" });
            return this.res.status(200).json({ message: "VehicleCategories fetched successfully", vehiclecategories });
        }
        catch (error) {
            return this.next(error);
        }
    }
    async create() {
        try {
            const data = this.req.body;
            const vehiclecategories = await this.vehicleCategoriesRepository.save(data);
            return this.res.status(201).json({ message: "VehicleCategories created successfully", vehiclecategories });
        }
        catch (error) {
            return this.next(error);
        }
    }
    async update(vehiclecategories) {
        try {
            const data = this.req.body;
            Object.assign(vehiclecategories, data);
            const updatedVehicleCategories = await this.vehicleCategoriesRepository.save(vehiclecategories);
            return this.res.status(200).json({ message: "VehicleCategories updated successfully", updatedVehicleCategories });
        }
        catch (error) {
            return this.next(error);
        }
    }
    async delete(vehiclecategories) {
        try {
            if (!(vehiclecategories === null || vehiclecategories === void 0 ? void 0 : vehiclecategories.id)) {
                return this.res.status(400).json({ message: "Invalid VehicleCategories id" });
            }
            await this.vehicleCategoriesRepository.delete(vehiclecategories.id);
            return this.res.status(200).json({ message: "VehicleCategories deleted successfully" });
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
], VehicleCategoriesController.prototype, "list", null);
__decorate([
    Get({ path: "/:vehiclecategories", resolve: { vehiclecategories: VehicleCategories } }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [VehicleCategories]),
    __metadata("design:returntype", Promise)
], VehicleCategoriesController.prototype, "read", null);
__decorate([
    Post({ path: "/" }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], VehicleCategoriesController.prototype, "create", null);
__decorate([
    Put({ path: "/:vehiclecategories", resolve: { vehiclecategories: VehicleCategories } }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [VehicleCategories]),
    __metadata("design:returntype", Promise)
], VehicleCategoriesController.prototype, "update", null);
__decorate([
    Delete({ path: "/:vehiclecategories", resolve: { vehiclecategories: VehicleCategories } }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [VehicleCategories]),
    __metadata("design:returntype", Promise)
], VehicleCategoriesController.prototype, "delete", null);
VehicleCategoriesController = __decorate([
    Route({ path: "/vehicleCategories" })
], VehicleCategoriesController);
export { VehicleCategoriesController };
