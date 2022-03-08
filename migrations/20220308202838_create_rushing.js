/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {

  return knex.schema.createTable('rushing', (table) =>{
    table.increments('id');
    table.string('player').notNullable();
    table.string('team');
    table.integer('att');
    table.integer('gain');
    table.integer('loss');
    table.integer('yds');
    table.integer('avg');
    table.string('longest_run');
    table.integer('td');
    table.string('stat-type');
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('rushing');
};
