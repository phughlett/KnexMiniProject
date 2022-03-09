
// const knex = require("knex");
// const knexConfigs = require("./knexfile");
// const correctConfigForThisEnvironment =
//   knexConfigs[process.env.NODE_ENV || "development"];
// knex(correctConfigForThisEnvironment);

// VERY WEIRD REQUIRE
const knex = require("knex")(
  require("../knexfile")[process.env.NODE_ENV || "development"]
);
module.exports = knex;