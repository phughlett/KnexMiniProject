/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

 var fs = require("fs");

 const SEED_PATH = 'seeds/rushing.csv';

exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('rushing').del()
  await knex('rushing').insert(
    fileReader(SEED_PATH)
  );
};



function fileReader(inputFileName){
  // use the below methods in your code (you will need to change the passed in parameters)

  //Reads an input file and returns the contents as a string
  let fileRead = fs.readFileSync(inputFileName) + '';
  let lines = fileRead.split(/\r?\n/);

  let header = lines[0]; //Player,Team,Att,Gain,Loss,Yds,Avg,Lg,TD,"Stat Type"
  header = header.split(',');

  var arrayObj = [];//Empty Array to store objects

  for(var i = 1; i < lines.length-1; ++i){

    let obj = {};
    let currLine = lines[i];
    currLine = currLine.split(',')
    // console.log('Adding: ', currLine);

    
    obj[header[0]] = currLine[0]//player
    obj[header[1]] = currLine[1]//Team
    obj[header[2]] = currLine[2]//Att
    obj[header[3]] = currLine[3]//Gain
    obj[header[4]] = currLine[4]//Loss
    obj[header[5]] = currLine[5]//Yds
    obj[header[6]] = currLine[6]//Avg
    obj[header[7]] = currLine[7]//Lg
    obj[header[8]] = currLine[8]//TD
    obj[header[9]] = currLine[9]//Stat type

    arrayObj.push(obj);
  }
  console.log("Array Obj: ", arrayObj)

 return arrayObj;













}

