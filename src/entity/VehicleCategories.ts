import { Column, Entity, Table } from "@lyra-js/core"

@Table()
export class VehicleCategories extends Entity<VehicleCategories> {
  @Column({ type: "bigint", pk: true })
  id: number
  @Column({ type: "varchar", size: 100, unique: true })
  name: string
  @Column({ type: "timestamp" })
  created_at: string | Date = new Date()
  constructor(vehicleCategories?: Partial<VehicleCategories> | VehicleCategories) {
    super(vehicleCategories)
  }
}