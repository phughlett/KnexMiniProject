/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable("passing", (table) => {
        table.increments('id').primary();
        table.string('Player').notNullable();
        table.string('Team').notNullable();
        table.string('Att');
        table.string('Cmp');
        table.string('Pct');
        table.string('Yds');
        table.string('YPA');
        table.string('TD');
        table.string('TD_percentage');
        table.string('Int');
        table.string('Int_percent');
        table.string('Lg');
        table.string('Sack');
        table.string('Loss');
        table.string('Rate');
        table.string('Stat Type');
        })

};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTableIfExists('passing');
};
