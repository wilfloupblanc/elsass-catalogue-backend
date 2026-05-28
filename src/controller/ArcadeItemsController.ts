import { Controller, Delete, Get, Post, Put, Route } from "@lyra-js/core"
import { ArcadeItems } from "@entity/ArcadeItems"
@Route({ path: "/arcadeItems" })
export class ArcadeItemsController extends Controller {
  @Get({ path: "/" })
  async list() {
    try {
      const arcadeitems = await this.arcadeItemsRepository.findAll()
      return this.res.status(200).json({ message: "ArcadeItems list fetched successfully", arcadeitems })
    } catch (error) {
      return this.next(error)
    }
  }
  @Get({ path: "/:arcadeitems", resolve: { arcadeitems: ArcadeItems } })
  async read(arcadeitems: ArcadeItems) {
    try {
      if (!arcadeitems) return this.res.status(404).json({ message: "ArcadeItems not found" })
      return this.res.status(200).json({ message: "ArcadeItems fetched successfully", arcadeitems })
    } catch (error) {
      return this.next(error)
    }
  }
  @Post({ path: "/" })
  async create() {
    try {
      const data = this.req.body
      const arcadeitems = await this.arcadeItemsRepository.save(data)
      return this.res.status(201).json({ message: "ArcadeItems created successfully", arcadeitems })
    } catch (error) {
      return this.next(error)
    }
  }
  @Put({ path: "/:arcadeitems", resolve: { arcadeitems: ArcadeItems } })
  async update(arcadeitems: ArcadeItems) {
    try {
      const data = this.req.body
      Object.assign(arcadeitems, data)
      const updatedArcadeItems = await this.arcadeItemsRepository.save(arcadeitems)
      return this.res.status(200).json({ message: "ArcadeItems updated successfully", updatedArcadeItems })
    } catch (error) {
      return this.next(error)
    }
  }
  @Delete({ path: "/:arcadeitems", resolve: { arcadeitems: ArcadeItems } })
  async delete(arcadeitems: ArcadeItems) {
    try {
      if (!arcadeitems?.id) {
        return this.res.status(400).json({ message: "Invalid ArcadeItems id" })
      }
      await this.arcadeItemsRepository.delete(arcadeitems.id)
      return this.res.status(200).json({ message: "ArcadeItems deleted successfully" })
    } catch (error) {
      return this.next(error)
    }
  }
}