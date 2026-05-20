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
import { Circuits } from "../entity/Circuits.js";
let CircuitsController = class CircuitsController extends Controller {
    async list() {
        try {
            const circuits = await this.circuitsRepository.findAll();
            return this.res.status(200).json({ message: "Circuits list fetched successfully", circuits });
        }
        catch (error) {
            return this.next(error);
        }
    }
    async read(circuits) {
        try {
            if (!circuits)
                return this.res.status(404).json({ message: "Circuits not found" });
            return this.res.status(200).json({ message: "Circuits fetched successfully", circuits });
        }
        catch (error) {
            return this.next(error);
        }
    }
    async create() {
        try {
            const data = this.req.body;
            const circuits = await this.circuitsRepository.save(data);
            return this.res.status(201).json({ message: "Circuits created successfully", circuits });
        }
        catch (error) {
            return this.next(error);
        }
    }
    async toggle(circuits) {
        try {
            if (!circuits)
                return this.res.status(404).json({ message: "Circuits not found" });
            circuits.is_active = !circuits.is_active;
            await this.circuitsRepository.save(circuits);
            return this.res.status(200).json({ message: "Circuits toggled successfully", circuits });
        }
        catch (error) {
            return this.next(error);
        }
    }
    async update(circuits) {
        try {
            const data = this.req.body;
            Object.assign(circuits, data);
            const updatedCircuits = await this.circuitsRepository.save(circuits);
            return this.res.status(200).json({ message: "Circuits updated successfully", updatedCircuits });
        }
        catch (error) {
            return this.next(error);
        }
    }
    async delete(circuits) {
        try {
            if (!(circuits === null || circuits === void 0 ? void 0 : circuits.id)) {
                return this.res.status(400).json({ message: "Invalid Circuits id" });
            }
            await this.circuitsRepository.delete(circuits.id);
            return this.res.status(200).json({ message: "Circuits deleted successfully" });
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
], CircuitsController.prototype, "list", null);
__decorate([
    Get({ path: "/:circuits", resolve: { circuits: Circuits } }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Circuits]),
    __metadata("design:returntype", Promise)
], CircuitsController.prototype, "read", null);
__decorate([
    Post({ path: "/", middlewares: [isAuthenticated] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CircuitsController.prototype, "create", null);
__decorate([
    Put({ path: "/:circuits/toggle", resolve: { circuits: Circuits }, middlewares: [isAuthenticated] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Circuits]),
    __metadata("design:returntype", Promise)
], CircuitsController.prototype, "toggle", null);
__decorate([
    Put({ path: "/:circuits", resolve: { circuits: Circuits }, middlewares: [isAuthenticated] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Circuits]),
    __metadata("design:returntype", Promise)
], CircuitsController.prototype, "update", null);
__decorate([
    Delete({ path: "/:circuits", resolve: { circuits: Circuits }, middlewares: [isAuthenticated] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Circuits]),
    __metadata("design:returntype", Promise)
], CircuitsController.prototype, "delete", null);
CircuitsController = __decorate([
    Route({ path: "/circuits" })
], CircuitsController);
export { CircuitsController };
