import { MigrationInterface } from "@lyra-js/core"

/**
 * Generated migration: Migration_1779202982394
 * Generated at: 2026-05-19T15:03:02.394Z
 */
export class Migration_1779202982394 implements MigrationInterface {
  readonly version = "1779202982394"
  readonly isDestructive = false
  readonly canRunInParallel = true

  async up(connection: any): Promise<void> {
    // No changes
  }

  async down(connection: any): Promise<void> {
    // No changes
  }

  async dryRun(connection: any): Promise<string[]> {
    return [
    ]
  }
}
