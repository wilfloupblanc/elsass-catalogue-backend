import { Controller, Delete, Get, Post, Put, Route } from "@lyra-js/core"

import { VehicleCategories } from "@entity/VehicleCategories"

@Route({ path: "/vehicleCategories" })
export class VehicleCategoriesController extends Controller {
  @Get({ path: "/" })
  async list() {
    try {
      const vehiclecategories = await this.vehicleCategoriesRepository.findAll()
      return this.res.status(200).json({ message: "VehicleCategories list fetched successfully", vehiclecategories })
    } catch (error) {
      return this.next(error)
    }
  }

  @Get({ path: "/:vehiclecategories", resolve: { vehiclecategories: VehicleCategories } })
  async read(vehiclecategories: VehicleCategories) {
    try {
      if (!vehiclecategories) return this.res.status(404).json({ message: "VehicleCategories not found" })
      return this.res.status(200).json({ message: "VehicleCategories fetched successfully", vehiclecategories })
    } catch (error) {
      return this.next(error)
    }
  }

  @Post({ path: "/" })
  async create() {
    try {
      const data = this.req.body
      const vehiclecategories = await this.vehicleCategoriesRepository.save(data)
      return this.res.status(201).json({ message: "VehicleCategories created successfully", vehiclecategories })
    } catch (error) {
      return this.next(error)
    }
  }

  @Put({ path: "/:vehiclecategories", resolve: { vehiclecategories: VehicleCategories } })
  async update(vehiclecategories: VehicleCategories) {
    try {
      const data = this.req.body
      Object.assign(vehiclecategories, data)
      const updatedVehicleCategories = await this.vehicleCategoriesRepository.save(vehiclecategories)
      return this.res.status(200).json({ message: "VehicleCategories updated successfully", updatedVehicleCategories })
    } catch (error) {
      return this.next(error)
    }
  }

  @Delete({ path: "/:vehiclecategories", resolve: { vehiclecategories: VehicleCategories } })
  async delete(vehiclecategories: VehicleCategories) {
    try {
      if (!vehiclecategories?.id) {
        return this.res.status(400).json({ message: "Invalid VehicleCategories id" })
      }
      await this.vehicleCategoriesRepository.delete(vehiclecategories.id)
      return this.res.status(200).json({ message: "VehicleCategories deleted successfully" })
    } catch (error) {
      return this.next(error)
    }
  }
}
