/**
 * Generated migration: Migration_1779110374170
 * Generated at: 2026-05-18T13:19:34.170Z
 */
export class Migration_1779110374170 {
    constructor() {
        this.version = "1779110374170";
        this.isDestructive = false;
        this.canRunInParallel = true;
    }
    async up(connection) {
        await connection.query(`CREATE TABLE IF NOT EXISTS \`circuits\` (\`id\` BIGINT AUTO_INCREMENT, \`name\` VARCHAR(150), \`description\` TEXT, \`difficulty\` TINYINT, \`photo_url\` VARCHAR(255), \`is_active\` BOOL, \`created_at\` TIMESTAMP, PRIMARY KEY (\`id\`))`);
        await connection.query(`CREATE TABLE IF NOT EXISTS \`fooditems\` (\`id\` BIGINT AUTO_INCREMENT, \`name\` VARCHAR(150), \`description\` TEXT, \`photo_url\` VARCHAR(255), \`category\` VARCHAR(50), \`price\` FLOAT, \`is_active\` BOOL, \`created_at\` TIMESTAMP, PRIMARY KEY (\`id\`))`);
        await connection.query(`CREATE TABLE IF NOT EXISTS \`resetpassword\` (\`id\` BIGINT AUTO_INCREMENT, \`user\` BIGINT UNIQUE, \`token\` VARCHAR(255) UNIQUE, \`requested_at\` TIMESTAMP, \`expires_at\` TIMESTAMP, PRIMARY KEY (\`id\`))`);
        await connection.query(`CREATE TABLE IF NOT EXISTS \`user\` (\`id\` BIGINT AUTO_INCREMENT, \`email\` VARCHAR(255) UNIQUE, \`password\` VARCHAR(255), \`role\` VARCHAR(255), \`created_at\` TIMESTAMP, PRIMARY KEY (\`id\`))`);
        await connection.query(`CREATE TABLE IF NOT EXISTS \`vehiclecategories\` (\`id\` BIGINT AUTO_INCREMENT, \`name\` VARCHAR(100) UNIQUE, \`created_at\` TIMESTAMP, PRIMARY KEY (\`id\`))`);
        await connection.query(`CREATE TABLE IF NOT EXISTS \`vehicles\` (\`id\` BIGINT AUTO_INCREMENT, \`category_id\` BIGINT, \`name\` VARCHAR(150), \`description\` TEXT, \`photo_url\` VARCHAR(255), \`max_speed\` INT, \`horsepower\` INT, \`torque\` INT, \`power_to_weight\` FLOAT, \`country\` VARCHAR(100), \`year\` INT, \`difficulty\` TINYINT, \`is_active\` BOOL, \`created_at\` TIMESTAMP, PRIMARY KEY (\`id\`))`);
        await connection.query(`ALTER TABLE \`resetpassword\` ADD UNIQUE INDEX \`idx_resetpassword_user\` (\`user\`)`);
        await connection.query(`ALTER TABLE \`resetpassword\` ADD UNIQUE INDEX \`idx_resetpassword_token\` (\`token\`)`);
        await connection.query(`ALTER TABLE \`resetpassword\` ADD INDEX \`fk_resetpassword_user\` (\`user\`)`);
        await connection.query(`ALTER TABLE \`user\` ADD UNIQUE INDEX \`idx_user_email\` (\`email\`)`);
        await connection.query(`ALTER TABLE \`vehiclecategories\` ADD UNIQUE INDEX \`idx_vehiclecategories_name\` (\`name\`)`);
        await connection.query(`ALTER TABLE \`resetpassword\` ADD CONSTRAINT \`fk_resetpassword_user\` FOREIGN KEY (\`user\`) REFERENCES \`user\` (\`id\`) ON UPDATE CASCADE ON DELETE CASCADE`);
    }
    async down(connection) {
        await connection.query(`ALTER TABLE \`resetpassword\` DROP FOREIGN KEY \`fk_resetpassword_user\``);
        await connection.query(`DROP TABLE IF EXISTS \`circuits\``);
        await connection.query(`DROP TABLE IF EXISTS \`fooditems\``);
        await connection.query(`DROP TABLE IF EXISTS \`resetpassword\``);
        await connection.query(`DROP TABLE IF EXISTS \`user\``);
        await connection.query(`DROP TABLE IF EXISTS \`vehiclecategories\``);
        await connection.query(`DROP TABLE IF EXISTS \`vehicles\``);
    }
    async dryRun(connection) {
        return [
            "CREATE TABLE IF NOT EXISTS \`circuits\` (\`id\` BIGINT AUTO_INCREMENT, \`name\` VARCHAR(150), \`description\` TEXT, \`difficulty\` TINYINT, \`photo_url\` VARCHAR(255), \`is_active\` BOOL, \`created_at\` TIMESTAMP, PRIMARY KEY (\`id\`))",
            "CREATE TABLE IF NOT EXISTS \`fooditems\` (\`id\` BIGINT AUTO_INCREMENT, \`name\` VARCHAR(150), \`description\` TEXT, \`photo_url\` VARCHAR(255), \`category\` VARCHAR(50), \`price\` FLOAT, \`is_active\` BOOL, \`created_at\` TIMESTAMP, PRIMARY KEY (\`id\`))",
            "CREATE TABLE IF NOT EXISTS \`resetpassword\` (\`id\` BIGINT AUTO_INCREMENT, \`user\` BIGINT UNIQUE, \`token\` VARCHAR(255) UNIQUE, \`requested_at\` TIMESTAMP, \`expires_at\` TIMESTAMP, PRIMARY KEY (\`id\`))",
            "CREATE TABLE IF NOT EXISTS \`user\` (\`id\` BIGINT AUTO_INCREMENT, \`email\` VARCHAR(255) UNIQUE, \`password\` VARCHAR(255), \`role\` VARCHAR(255), \`created_at\` TIMESTAMP, PRIMARY KEY (\`id\`))",
            "CREATE TABLE IF NOT EXISTS \`vehiclecategories\` (\`id\` BIGINT AUTO_INCREMENT, \`name\` VARCHAR(100) UNIQUE, \`created_at\` TIMESTAMP, PRIMARY KEY (\`id\`))",
            "CREATE TABLE IF NOT EXISTS \`vehicles\` (\`id\` BIGINT AUTO_INCREMENT, \`category_id\` BIGINT, \`name\` VARCHAR(150), \`description\` TEXT, \`photo_url\` VARCHAR(255), \`max_speed\` INT, \`horsepower\` INT, \`torque\` INT, \`power_to_weight\` FLOAT, \`country\` VARCHAR(100), \`year\` INT, \`difficulty\` TINYINT, \`is_active\` BOOL, \`created_at\` TIMESTAMP, PRIMARY KEY (\`id\`))",
            "ALTER TABLE \`resetpassword\` ADD UNIQUE INDEX \`idx_resetpassword_user\` (\`user\`)",
            "ALTER TABLE \`resetpassword\` ADD UNIQUE INDEX \`idx_resetpassword_token\` (\`token\`)",
            "ALTER TABLE \`resetpassword\` ADD INDEX \`fk_resetpassword_user\` (\`user\`)",
            "ALTER TABLE \`user\` ADD UNIQUE INDEX \`idx_user_email\` (\`email\`)",
            "ALTER TABLE \`vehiclecategories\` ADD UNIQUE INDEX \`idx_vehiclecategories_name\` (\`name\`)",
            "ALTER TABLE \`resetpassword\` ADD CONSTRAINT \`fk_resetpassword_user\` FOREIGN KEY (\`user\`) REFERENCES \`user\` (\`id\`) ON UPDATE CASCADE ON DELETE CASCADE"
        ];
    }
}
