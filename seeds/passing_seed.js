/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

 var fs = require("fs");

 const SEED_PATH = 'seeds/passing.csv';

exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('passing').del()
  await knex('passing').insert(
    fileReader(SEED_PATH)
  );
};



function fileReader(inputFileName){
  // use the below methods in your code (you will need to change the passed in parameters)
  //Reads an input file and returns the contents as a string
  let fileRead = fs.readFileSync(inputFileName) + '';
  let lines = fileRead.split(/\r?\n/);

  let header = lines[0]; // Player,Team,Att,Cmp,Pct,Yds,YPA,TD,TD%,Int,Int%,Lg,Sack,Loss,Rate,Stat Type
  header = header.split(',');


  var arrayObj = [];

  for(var i = 1; i < lines.length-1; ++i){

    let obj = {};
    let currLine = lines[i];
    currLine = currLine.split(',')
    // console.log('Adding: ', currLine);

    
    obj[header[0]] = currLine[0]//player
    obj[header[1]] = currLine[1]//Team
    obj[header[2]] = currLine[2]//Att
    obj[header[3]] = currLine[3]//Cmp
    obj[header[4]] = currLine[4]//Pct
    obj[header[5]] = currLine[5]//Yds
    obj[header[6]] = currLine[6]//YPA
    obj[header[7]] = currLine[7]//TD
    obj[header[8]] = currLine[8]//TD%
    obj[header[9]] = currLine[9]//Int
    obj[header[10]] = currLine[10]//Int%
    obj[header[11]] = currLine[11]//Lg
    obj[header[12]] = currLine[12]//Sack
    obj[header[13]] = currLine[13]//Loss
    obj[header[14]] = currLine[14]//Rate
    obj[header[15]] = currLine[15]//Stat Type

    arrayObj.push(obj);
  }
  console.log("Array Obj: ", arrayObj)

 return arrayObj;













}

