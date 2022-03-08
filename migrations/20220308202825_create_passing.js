/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable("passing", (table) => {
        table.increments('id');
        table.string('Player').notNullable();
        table.string('Team').notNullable();
        table.integer('Att');
        table.integer('Cmp')
        table.integer('Pct')
        table.integer('Yds')
        table.integer('YPA')
        table.integer('TD')
        table.integer('TD%')
        table.integer('Int')
        table.integer('Int%')
        table.integer('Att')
        table.integer('Att')


    })
    Player,Team,Att,Cmp,Pct,Yds,YPA,TD,TD%,Int,Int%,Lg,Sack,Loss,Rate,"Stat Type"
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTableIfExists('passing');
};
