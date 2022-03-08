/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {

  return knex.schema.createTable('rushing', (table) =>{
    table.increments('id');
    table.string('Player').notNullable();
    table.string('Team');
    table.string('Att');
    table.string('Gain');
    table.string('Loss');
    table.string('Yds');
    table.string('Avg');
    table.string('Lg');
    table.string('TD');
    table.string('Stat Type');
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('rushing');
};
