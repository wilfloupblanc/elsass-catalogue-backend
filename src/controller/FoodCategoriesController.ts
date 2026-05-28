import { Controller, Delete, Get, Post, Put, Route } from "@lyra-js/core"
import { FoodCategories } from "@entity/FoodCategories"
@Route({ path: "/foodCategories" })
export class FoodCategoriesController extends Controller {
  @Get({ path: "/" })
  async list() {
    try {
      const foodcategories = await this.foodCategoriesRepository.findAll()
      return this.res.status(200).json({ message: "FoodCategories list fetched successfully", foodcategories })
    } catch (error) {
      return this.next(error)
    }
  }
  @Get({ path: "/:foodcategories", resolve: { foodcategories: FoodCategories } })
  async read(foodcategories: FoodCategories) {
    try {
      if (!foodcategories) return this.res.status(404).json({ message: "FoodCategories not found" })
      return this.res.status(200).json({ message: "FoodCategories fetched successfully", foodcategories })
    } catch (error) {
      return this.next(error)
    }
  }
  @Post({ path: "/" })
  async create() {
    try {
      const data = this.req.body
      const foodcategories = await this.foodCategoriesRepository.save(data)
      return this.res.status(201).json({ message: "FoodCategories created successfully", foodcategories })
    } catch (error) {
      return this.next(error)
    }
  }
  @Put({ path: "/:foodcategories", resolve: { foodcategories: FoodCategories } })
  async update(foodcategories: FoodCategories) {
    try {
      const data = this.req.body
      Object.assign(foodcategories, data)
      const updatedFoodCategories = await this.foodCategoriesRepository.save(foodcategories)
      return this.res.status(200).json({ message: "FoodCategories updated successfully", updatedFoodCategories })
    } catch (error) {
      return this.next(error)
    }
  }
  @Delete({ path: "/:foodcategories", resolve: { foodcategories: FoodCategories } })
  async delete(foodcategories: FoodCategories) {
    try {
      if (!foodcategories?.id) {
        return this.res.status(400).json({ message: "Invalid FoodCategories id" })
      }
      await this.foodCategoriesRepository.delete(foodcategories.id)
      return this.res.status(200).json({ message: "FoodCategories deleted successfully" })
    } catch (error) {
      return this.next(error)
    }
  }
}