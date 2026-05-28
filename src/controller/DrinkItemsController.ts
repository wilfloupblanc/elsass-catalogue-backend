import { Controller, Delete, Get, Post, Put, Route } from "@lyra-js/core"
import { DrinkItems } from "@entity/DrinkItems"
@Route({ path: "/drinkItems" })
export class DrinkItemsController extends Controller {
  @Get({ path: "/" })
  async list() {
    try {
      const drinkitems = await this.drinkItemsRepository.findAll()
      return this.res.status(200).json({ message: "DrinkItems list fetched successfully", drinkitems })
    } catch (error) {
      return this.next(error)
    }
  }
  @Get({ path: "/:drinkitems", resolve: { drinkitems: DrinkItems } })
  async read(drinkitems: DrinkItems) {
    try {
      if (!drinkitems) return this.res.status(404).json({ message: "DrinkItems not found" })
      return this.res.status(200).json({ message: "DrinkItems fetched successfully", drinkitems })
    } catch (error) {
      return this.next(error)
    }
  }
  @Post({ path: "/" })
  async create() {
    try {
      const data = this.req.body
      const drinkitems = await this.drinkItemsRepository.save(data)
      return this.res.status(201).json({ message: "DrinkItems created successfully", drinkitems })
    } catch (error) {
      return this.next(error)
    }
  }
  @Put({ path: "/:drinkitems", resolve: { drinkitems: DrinkItems } })
  async update(drinkitems: DrinkItems) {
    try {
      const data = this.req.body
      Object.assign(drinkitems, data)
      const updatedDrinkItems = await this.drinkItemsRepository.save(drinkitems)
      return this.res.status(200).json({ message: "DrinkItems updated successfully", updatedDrinkItems })
    } catch (error) {
      return this.next(error)
    }
  }
  @Delete({ path: "/:drinkitems", resolve: { drinkitems: DrinkItems } })
  async delete(drinkitems: DrinkItems) {
    try {
      if (!drinkitems?.id) {
        return this.res.status(400).json({ message: "Invalid DrinkItems id" })
      }
      await this.drinkItemsRepository.delete(drinkitems.id)
      return this.res.status(200).json({ message: "DrinkItems deleted successfully" })
    } catch (error) {
      return this.next(error)
    }
  }
}