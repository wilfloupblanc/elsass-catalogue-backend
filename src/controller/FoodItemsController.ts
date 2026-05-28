import { Controller, Delete, Get, Post, Put, Route } from "@lyra-js/core"
import { FoodItems } from "@entity/FoodItems"
@Route({ path: "/foodItems" })
export class FoodItemsController extends Controller {
  @Get({ path: "/" })
  async list() {
    try {
      const fooditems = await this.foodItemsRepository.findAll()
      return this.res.status(200).json({ message: "FoodItems list fetched successfully", fooditems })
    } catch (error) {
      return this.next(error)
    }
  }
  @Get({ path: "/:fooditems", resolve: { fooditems: FoodItems } })
  async read(fooditems: FoodItems) {
    try {
      if (!fooditems) return this.res.status(404).json({ message: "FoodItems not found" })
      return this.res.status(200).json({ message: "FoodItems fetched successfully", fooditems })
    } catch (error) {
      return this.next(error)
    }
  }
  @Post({ path: "/" })
  async create() {
    try {
      const data = this.req.body
      const fooditems = await this.foodItemsRepository.save(data)
      return this.res.status(201).json({ message: "FoodItems created successfully", fooditems })
    } catch (error) {
      return this.next(error)
    }
  }
  @Put({ path: "/:fooditems", resolve: { fooditems: FoodItems } })
  async update(fooditems: FoodItems) {
    try {
      const data = this.req.body
      Object.assign(fooditems, data)
      const updatedFoodItems = await this.foodItemsRepository.save(fooditems)
      return this.res.status(200).json({ message: "FoodItems updated successfully", updatedFoodItems })
    } catch (error) {
      return this.next(error)
    }
  }
  @Delete({ path: "/:fooditems", resolve: { fooditems: FoodItems } })
  async delete(fooditems: FoodItems) {
    try {
      if (!fooditems?.id) {
        return this.res.status(400).json({ message: "Invalid FoodItems id" })
      }
      await this.foodItemsRepository.delete(fooditems.id)
      return this.res.status(200).json({ message: "FoodItems deleted successfully" })
    } catch (error) {
      return this.next(error)
    }
  }
}