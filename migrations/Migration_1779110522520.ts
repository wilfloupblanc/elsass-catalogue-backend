import { MigrationInterface } from "@lyra-js/core"

/**
 * Generated migration: Migration_1779110522520
 * Generated at: 2026-05-18T13:22:02.520Z
 */
export class Migration_1779110522520 implements MigrationInterface {
  readonly version = "1779110522520"
  readonly isDestructive = true
  readonly canRunInParallel = true

  async up(connection: any): Promise<void> {
    await connection.query(`ALTER TABLE \`circuits\` ADD COLUMN \`length_m\` INT`)
    await connection.query(`ALTER TABLE \`circuits\` ADD COLUMN \`country\` VARCHAR(100)`)
    await connection.query(`ALTER TABLE \`circuits\` DROP COLUMN \`description\``)
    await connection.query(`ALTER TABLE \`resetpassword\` DROP INDEX \`token\``)
    await connection.query(`ALTER TABLE \`resetpassword\` DROP INDEX \`user\``)
    await connection.query(`ALTER TABLE \`user\` DROP INDEX \`email\``)
    await connection.query(`ALTER TABLE \`vehiclecategories\` DROP INDEX \`name\``)
  }

  async down(connection: any): Promise<void> {
    await connection.query(`ALTER TABLE \`circuits\` DROP COLUMN \`length_m\``)
    await connection.query(`ALTER TABLE \`circuits\` DROP COLUMN \`country\``)
  }

  async dryRun(connection: any): Promise<string[]> {
    return [
      "ALTER TABLE \`circuits\` ADD COLUMN \`length_m\` INT",
      "ALTER TABLE \`circuits\` ADD COLUMN \`country\` VARCHAR(100)"
    ]
  }
}
