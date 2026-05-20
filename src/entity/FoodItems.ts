import { Column, Entity, Table } from "@lyra-js/core"

@Table()
export class FoodItems extends Entity<FoodItems> {
  @Column({ type: "bigint", pk: true })
  id: number
  @Column({ type: "varchar", size: 150 })
  name: string
  @Column({ type: "text", nullable: true })
  description: string | null = null
  @Column({ type: "varchar", size: 255, nullable: true })
  photo_url: string | null = null
  @Column({ type: "varchar", size: 50 })
  category: string
  @Column({ type: "float" })
  price: number
  @Column({ type: "bool" })
  is_active: boolean = true
  @Column({ type: "timestamp" })
  created_at: string | Date = new Date()

  constructor(fooditems?: Partial<FoodItems> | FoodItems) {
    super(fooditems)
  }
}
