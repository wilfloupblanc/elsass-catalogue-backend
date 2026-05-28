import { Column, Entity, Table } from "@lyra-js/core"

@Table()
export class FoodCategories extends Entity<FoodCategories> {
  @Column({ type: "bigint", pk: true })
  id: number
  @Column({ type: "varchar", size: 100 })
  name: string
  @Column({ type: "timestamp" })
  created_at: string | Date = new Date()
  constructor(foodcategories?: Partial<FoodCategories> | FoodCategories) {
    super(foodcategories)
  }
}