var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Controller, Delete, Get, isAuthenticated, Post, Put, Route } from "@lyra-js/core";
import { Vehicles } from "../entity/Vehicles.js";
let VehiclesController = class VehiclesController extends Controller {
    async list() {
        try {
            const vehicles = await this.vehiclesRepository.findAll();
            return this.res.status(200).json({ message: "Vehicles list fetched successfully", vehicles });
        }
        catch (error) {
            return this.next(error);
        }
    }
    async read(vehicles) {
        try {
            if (!vehicles)
                return this.res.status(404).json({ message: "Vehicles not found" });
            return this.res.status(200).json({ message: "Vehicles fetched successfully", vehicles });
        }
        catch (error) {
            return this.next(error);
        }
    }
    async create() {
        try {
            const data = this.req.body;
            const vehicles = await this.vehiclesRepository.save(data);
            return this.res.status(201).json({ message: "Vehicles created successfully", vehicles });
        }
        catch (error) {
            return this.next(error);
        }
    }
    async toggle(vehicles) {
        try {
            if (!vehicles)
                return this.res.status(404).json({ message: "Vehicles not found" });
            vehicles.is_active = !vehicles.is_active;
            await this.vehiclesRepository.save(vehicles);
            return this.res.status(200).json({ message: "Vehicles toggled successfully", vehicles });
        }
        catch (error) {
            return this.next(error);
        }
    }
    async update(vehicles) {
        try {
            const data = this.req.body;
            Object.assign(vehicles, data);
            const updatedVehicles = await this.vehiclesRepository.save(vehicles);
            return this.res.status(200).json({ message: "Vehicles updated successfully", updatedVehicles });
        }
        catch (error) {
            return this.next(error);
        }
    }
    async delete(vehicles) {
        try {
            if (!(vehicles === null || vehicles === void 0 ? void 0 : vehicles.id)) {
                return this.res.status(400).json({ message: "Invalid Vehicles id" });
            }
            await this.vehiclesRepository.delete(vehicles.id);
            return this.res.status(200).json({ message: "Vehicles deleted successfully" });
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
], VehiclesController.prototype, "list", null);
__decorate([
    Get({ path: "/:vehicles", resolve: { vehicles: Vehicles } }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Vehicles]),
    __metadata("design:returntype", Promise)
], VehiclesController.prototype, "read", null);
__decorate([
    Post({ path: "/", middlewares: [isAuthenticated] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], VehiclesController.prototype, "create", null);
__decorate([
    Put({ path: "/:vehicles/toggle", resolve: { vehicles: Vehicles }, middlewares: [isAuthenticated] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Vehicles]),
    __metadata("design:returntype", Promise)
], VehiclesController.prototype, "toggle", null);
__decorate([
    Put({ path: "/:vehicles", resolve: { vehicles: Vehicles }, middlewares: [isAuthenticated] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Vehicles]),
    __metadata("design:returntype", Promise)
], VehiclesController.prototype, "update", null);
__decorate([
    Delete({ path: "/:vehicles", resolve: { vehicles: Vehicles }, middlewares: [isAuthenticated] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Vehicles]),
    __metadata("design:returntype", Promise)
], VehiclesController.prototype, "delete", null);
VehiclesController = __decorate([
    Route({ path: "/vehicles" })
], VehiclesController);
export { VehiclesController };
