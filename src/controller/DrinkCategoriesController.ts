import { Controller, Delete, Get, Post, Put, Route } from "@lyra-js/core"
import { DrinkCategories } from "@entity/DrinkCategories"
@Route({ path: "/drinkCategories" })
export class DrinkCategoriesController extends Controller {
  @Get({ path: "/" })
  async list() {
    try {
      const drinkcategories = await this.drinkCategoriesRepository.findAll()
      return this.res.status(200).json({ message: "DrinkCategories list fetched successfully", drinkcategories })
    } catch (error) {
      return this.next(error)
    }
  }
  @Get({ path: "/:drinkcategories", resolve: { drinkcategories: DrinkCategories } })
  async read(drinkcategories: DrinkCategories) {
    try {
      if (!drinkcategories) return this.res.status(404).json({ message: "DrinkCategories not found" })
      return this.res.status(200).json({ message: "DrinkCategories fetched successfully", drinkcategories })
    } catch (error) {
      return this.next(error)
    }
  }
  @Post({ path: "/" })
  async create() {
    try {
      const data = this.req.body
      const drinkcategories = await this.drinkCategoriesRepository.save(data)
      return this.res.status(201).json({ message: "DrinkCategories created successfully", drinkcategories })
    } catch (error) {
      return this.next(error)
    }
  }
  @Put({ path: "/:drinkcategories", resolve: { drinkcategories: DrinkCategories } })
  async update(drinkcategories: DrinkCategories) {
    try {
      const data = this.req.body
      Object.assign(drinkcategories, data)
      const updatedDrinkCategories = await this.drinkCategoriesRepository.save(drinkcategories)
      return this.res.status(200).json({ message: "DrinkCategories updated successfully", updatedDrinkCategories })
    } catch (error) {
      return this.next(error)
    }
  }
  @Delete({ path: "/:drinkcategories", resolve: { drinkcategories: DrinkCategories } })
  async delete(drinkcategories: DrinkCategories) {
    try {
      if (!drinkcategories?.id) {
        return this.res.status(400).json({ message: "Invalid DrinkCategories id" })
      }
      await this.drinkCategoriesRepository.delete(drinkcategories.id)
      return this.res.status(200).json({ message: "DrinkCategories deleted successfully" })
    } catch (error) {
      return this.next(error)
    }
  }
}