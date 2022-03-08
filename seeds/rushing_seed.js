/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('rushing').del()
  table: 'rushing',
  file: './database/rushing.csv';
};
