import { Column, Entity, Table } from "@lyra-js/core"
@Table()
export class Circuits extends Entity<Circuits> {
  @Column({ type: "bigint", pk: true })
  id: number
  @Column({ type: "varchar", size: 150 })
  name: string
  @Column({ type: "varchar", size: 255, nullable: true })
  photo_url: string | null = null
  @Column({ type: "int", nullable: true })
  length_m: number | null = null
  @Column({ type: "varchar", size: 100, nullable: true })
  country: string | null = null
  @Column({ type: "varchar", size: 2, nullable: true })
  country_code: string | null = null
  @Column({ type: "tinyint", nullable: true })
  difficulty: number | null = null
  @Column({ type: "bool" })
  is_active: boolean = true
  @Column({ type: "timestamp" })
  created_at: string | Date = new Date()
  constructor(circuits?: Partial<Circuits> | Circuits) {
    super(circuits)
  }
}