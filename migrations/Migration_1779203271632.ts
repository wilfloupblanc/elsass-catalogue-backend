import { MigrationInterface } from "@lyra-js/core"

/**
 * Generated migration: Migration_1779203271632
 * Generated at: 2026-05-19T15:07:51.632Z
 */
export class Migration_1779203271632 implements MigrationInterface {
  readonly version = "1779203271632"
  readonly isDestructive = false
  readonly canRunInParallel = true

  async up(connection: any): Promise<void> {
    await connection.query(`ALTER TABLE \`vehicles\` ADD COLUMN \`country_code\` VARCHAR(2)`)
  }

  async down(connection: any): Promise<void> {
    await connection.query(`ALTER TABLE \`vehicles\` DROP COLUMN \`country_code\``)
  }

  async dryRun(connection: any): Promise<string[]> {
    return [
      "ALTER TABLE \`vehicles\` ADD COLUMN \`country_code\` VARCHAR(2)"
    ]
  }
}
