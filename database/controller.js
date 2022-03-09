const knex = require("./dbconnection.js");
//Table names are "passing" and "rushing"

function getPassingStats() {
  return knex.select("*").from("passing");
}

function getRushingStats() {
  return knex.select("*").from("rushing");
}

function getPlayerRushingStats(playerId) {
  return knex.select("*").where('id', playerId).from("rushing")
}
function getPlayerPassingStats(playerId) {
  return knex.select("*").where('id', playerId).from("passing")
}

function updatePlayerPassingStats(playerId, data) {

  console.log('Data in Controller: ', data);
  return knex("passing")
    .where("id", playerId)
    .update(data)
}

function updatePlayerRushingStats(playerId, data) {

  console.log('Data in Controller: ', data);
  return knex("rushing")
    .where("id", playerId)
    .update(data)
}

function newPlayerPassingData(data) {

  console.log('Data at newPlayerPassing in Controller: ', data);
  return knex("passing")
    .insert(data)
}

function newPlayerRushingData(data) {

    console.log('Data at newPlayerRushingData in Controller: ', data);
    return knex("rushing")
      .insert(data)
  }

function deletePassingRecord(playerId){
  console.log("Calling controller > deletePassingRecord w/ playerID: ", playerId);

  return knex("passing")
    .where("id", playerId)
    .del()
}

function deleteRushingRecord(playerId){
    console.log("Calling controller > deleteRushingRecord w/ playerID: ", playerId);

    return knex("rushing")
      .where("id", playerId)
      .del()
  }


module.exports = { getPassingStats, getRushingStats, getPlayerRushingStats, getPlayerPassingStats, updatePlayerPassingStats, updatePlayerRushingStats, newPlayerPassingData, newPlayerRushingData, deletePassingRecord, deleteRushingRecord};



