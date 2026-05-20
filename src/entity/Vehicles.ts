import { Column, Entity, Table } from "@lyra-js/core"
@Table()
export class Vehicles extends Entity<Vehicles> {
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
  @Column({ type: "int", nullable: true })
  max_speed: number | null = null
  @Column({ type: "int", nullable: true })
  horsepower: number | null = null
  @Column({ type: "int", nullable: true })
  torque: number | null = null
  @Column({ type: "float", nullable: true })
  power_to_weight: number | null = null
  @Column({ type: "varchar", size: 100, nullable: true })
  country: string | null = null
  @Column({ type: "varchar", size: 2, nullable: true })
  country_code: string | null = null
  @Column({ type: "int", nullable: true })
  year: number | null = null
  @Column({ type: "tinyint", nullable: true })
  difficulty: number | null = null
  @Column({ type: "bool" })
  is_active: boolean = true
  @Column({ type: "timestamp" })
  created_at: string | Date = new Date()
  constructor(vehicles?: Partial<Vehicles> | Vehicles) {
    super(vehicles)
  }
}