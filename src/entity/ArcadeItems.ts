import { Column, Entity, Table } from "@lyra-js/core"

@Table()
export class ArcadeItems extends Entity<ArcadeItems> {
  @Column({ type: "bigint", pk: true })
  id: number
  @Column({ type: "varchar", size: 150 })
  name: string
  @Column({ type: "varchar", size: 255, nullable: true })
  photo_url: string | null = null
  @Column({ type: "float", nullable: true })
  price: number | null = null
  @Column({ type: "bool" })
  is_active: boolean = true
  @Column({ type: "timestamp" })
  created_at: string | Date = new Date()
  constructor(arcadeitems?: Partial<ArcadeItems> | ArcadeItems) {
    super(arcadeitems)
  }
}