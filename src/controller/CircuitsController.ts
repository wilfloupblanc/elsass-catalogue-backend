import { Controller, Delete, Get, isAuthenticated, Post, Put, Route } from "@lyra-js/core"

import { Circuits } from "@entity/Circuits"

@Route({ path: "/circuits" })
export class CircuitsController extends Controller {
  @Get({ path: "/" })
  async list() {
    try {
      const circuits = await this.circuitsRepository.findAll()
      return this.res.status(200).json({ message: "Circuits list fetched successfully", circuits })
    } catch (error) {
      return this.next(error)
    }
  }

  @Get({ path: "/:circuits", resolve: { circuits: Circuits } })
  async read(circuits: Circuits) {
    try {
      if (!circuits) return this.res.status(404).json({ message: "Circuits not found" })
      return this.res.status(200).json({ message: "Circuits fetched successfully", circuits })
    } catch (error) {
      return this.next(error)
    }
  }

  @Post({ path: "/", middlewares: [isAuthenticated] })
  async create() {
    try {
      const data = this.req.body
      const circuits = await this.circuitsRepository.save(data)
      return this.res.status(201).json({ message: "Circuits created successfully", circuits })
    } catch (error) {
      return this.next(error)
    }
  }

  @Put({ path: "/:circuits/toggle", resolve: { circuits: Circuits }, middlewares: [isAuthenticated] })
  async toggle(circuits: Circuits) {
    try {
      if (!circuits) return this.res.status(404).json({ message: "Circuits not found" })
      circuits.is_active = !circuits.is_active
      await this.circuitsRepository.save(circuits)
      return this.res.status(200).json({ message: "Circuits toggled successfully", circuits })
    } catch (error) {
      return this.next(error)
    }
  }

  @Put({ path: "/:circuits", resolve: { circuits: Circuits }, middlewares: [isAuthenticated] })
  async update(circuits: Circuits) {
    try {
      const data = this.req.body
      Object.assign(circuits, data)
      const updatedCircuits = await this.circuitsRepository.save(circuits)
      return this.res.status(200).json({ message: "Circuits updated successfully", updatedCircuits })
    } catch (error) {
      return this.next(error)
    }
  }

  @Delete({ path: "/:circuits", resolve: { circuits: Circuits }, middlewares: [isAuthenticated] })
  async delete(circuits: Circuits) {
    try {
      if (!circuits?.id) {
        return this.res.status(400).json({ message: "Invalid Circuits id" })
      }
      await this.circuitsRepository.delete(circuits.id)
      return this.res.status(200).json({ message: "Circuits deleted successfully" })
    } catch (error) {
      return this.next(error)
    }
  }
}
