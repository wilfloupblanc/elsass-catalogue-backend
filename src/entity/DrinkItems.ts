import { Column, Entity, Table } from "@lyra-js/core"
@Table()
export class DrinkItems extends Entity<DrinkItems> {
  @Column({ type: "bigint", pk: true })
  id: number
  @Column({ type: "bigint" })
  category_id: number
  @Column({ type: "varchar", size: 150 })
  name: string
  @Column({ type: "text", nullable: true })
  description: string | null = null
  @Column({ type: "varchar", size: 255, nullable: true })
  photo_url: string | null = null
  @Column({ type: "varchar", size: 100, nullable: true })
  taste: string | null = null
  @Column({ type: "varchar", size: 100, nullable: true })
  country: string | null = null
  @Column({ type: "varchar", size: 2, nullable: true })
  country_code: string | null = null
  @Column({ type: "float", nullable: true })
  price_normal: number | null = null
  @Column({ type: "float", nullable: true })
  price_member: number | null = null
  @Column({ type: "bool" })
  is_active: boolean = true
  @Column({ type: "timestamp" })
  created_at: string | Date = new Date()
  constructor(drinkitems?: Partial<DrinkItems> | DrinkItems) {
    super(drinkitems)
  }
}