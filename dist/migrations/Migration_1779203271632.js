/**
 * Generated migration: Migration_1779203271632
 * Generated at: 2026-05-19T15:07:51.632Z
 */
export class Migration_1779203271632 {
    constructor() {
        this.version = "1779203271632";
        this.isDestructive = false;
        this.canRunInParallel = true;
    }
    async up(connection) {
        await connection.query(`ALTER TABLE \`vehicles\` ADD COLUMN \`country_code\` VARCHAR(2)`);
    }
    async down(connection) {
        await connection.query(`ALTER TABLE \`vehicles\` DROP COLUMN \`country_code\``);
    }
    async dryRun(connection) {
        return [
            "ALTER TABLE \`vehicles\` ADD COLUMN \`country_code\` VARCHAR(2)"
        ];
    }
}
