import { Controller, Delete, Get, isAuthenticated, Post, Put, Route } from "@lyra-js/core"

import { Vehicles } from "@entity/Vehicles"

@Route({ path: "/vehicles" })
export class VehiclesController extends Controller {
  @Get({ path: "/" })
  async list() {
    try {
      const vehicles = await this.vehiclesRepository.findAll()
      return this.res.status(200).json({ message: "Vehicles list fetched successfully", vehicles })
    } catch (error) {
      return this.next(error)
    }
  }

  @Get({ path: "/:vehicles", resolve: { vehicles: Vehicles } })
  async read(vehicles: Vehicles) {
    try {
      if (!vehicles) return this.res.status(404).json({ message: "Vehicles not found" })
      return this.res.status(200).json({ message: "Vehicles fetched successfully", vehicles })
    } catch (error) {
      return this.next(error)
    }
  }

  @Post({ path: "/", middlewares: [isAuthenticated] })
  async create() {
    try {
      const data = this.req.body
      const vehicles = await this.vehiclesRepository.save(data)
      return this.res.status(201).json({ message: "Vehicles created successfully", vehicles })
    } catch (error) {
      return this.next(error)
    }
  }

  @Put({ path: "/:vehicles/toggle", resolve: { vehicles: Vehicles }, middlewares: [isAuthenticated] })
  async toggle(vehicles: Vehicles) {
    try {
      if (!vehicles) return this.res.status(404).json({ message: "Vehicles not found" })
      vehicles.is_active = !vehicles.is_active
      await this.vehiclesRepository.save(vehicles)
      return this.res.status(200).json({ message: "Vehicles toggled successfully", vehicles })
    } catch (error) {
      return this.next(error)
    }
  }

  @Put({ path: "/:vehicles", resolve: { vehicles: Vehicles }, middlewares: [isAuthenticated] })
  async update(vehicles: Vehicles) {
    try {
      const data = this.req.body
      Object.assign(vehicles, data)
      const updatedVehicles = await this.vehiclesRepository.save(vehicles)
      return this.res.status(200).json({ message: "Vehicles updated successfully", updatedVehicles })
    } catch (error) {
      return this.next(error)
    }
  }

  @Delete({ path: "/:vehicles", resolve: { vehicles: Vehicles }, middlewares: [isAuthenticated] })
  async delete(vehicles: Vehicles) {
    try {
      if (!vehicles?.id) {
        return this.res.status(400).json({ message: "Invalid Vehicles id" })
      }
      await this.vehiclesRepository.delete(vehicles.id)
      return this.res.status(200).json({ message: "Vehicles deleted successfully" })
    } catch (error) {
      return this.next(error)
    }
  }
}
