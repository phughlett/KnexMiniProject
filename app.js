const express = require("express");
const morgan = require("morgan");
const { getPassingStats, getRushingStats, getPlayerRushingStats, getPlayerPassingStats, updatePlayerPassingStats, updatePlayerRushingStats, newPlayerPassingData, newPlayerRushingData, deletePassingRecord, deleteRushingRecord } = require("./database/controller");

const app = express();

app.use(express.json())
app.use(morgan("tiny"))

app.get("/", (req, res) => {
    res.send("hello, it works...")
})

app.get("/rushing", (req, res) => {
    getRushingStats()
        .then((data) => res.send(data))
        .catch((err) =>
            res.status(404).json({ message: "No stats found matching this search!" })
        );
})

app.get("/rushing/:playerId", (req, res) => {

    let { playerId } = req.params;

    getPlayerRushingStats(playerId)
        .then((data) => res.send(data))
        .catch((err) =>
            res.status(404).json({ message: "No stats found matching this search!" })
        );
})

app.patch("/rushing/:playerId", (req, res) => {

    let { playerId } = req.params;
    console.log('playerID: ', playerId)
    console.log('Req.body: ', req.body);

    let updatedRushingData = req.body;
    updatePlayerRushingStats(playerId, updatedRushingData)
        .then(data=>res.status(201).send(`${playerId} record updated successfully`))
        .catch(err=>res.send(err))


})

app.post("/rushing", (req, res) => {

    console.log('Req.body: ', req.body);

    let newRushingData = req.body;
    newPlayerRushingData(newRushingData)
        .then(data=>res.status(201).send(`${playerId} record updated successfully`))
        .catch(err=>res.send(err))


})

app.delete("/rushing/:playerId", (req, res) => {

    let { playerId } = req.params;

    deleteRushingRecord(playerId)
        .then(() => res.status(200).send(`${playerId} has been deleted.`))
        .catch((err) =>
            res.status(404).send("No playerID found matching this!")
        );
})



//Passing Routes

app.get("/passing", (req, res) => {
    getPassingStats()
        .then((data) => res.send(data))
        .catch((err) =>
            res.status(404).json({ message: "No stats found matching this search!" })
        );
});

app.get("/passing/:playerId", (req, res) => {

    let { playerId } = req.params;

    getPlayerPassingStats(playerId)
        .then((data) => res.send(data))
        .catch((err) =>
            res.status(404).json({ message: "No stats found matching this search!" })
        );
})


app.patch("/passing/:playerId", (req, res) => {

    let { playerId } = req.params;
    console.log('playerID: ', playerId)
    console.log('Req.body: ', req.body);

    let updatedPassingData = req.body;
    updatePlayerPassingStats(playerId, updatedPassingData)
        .then(data=>res.status(201).send(`${playerId} record updated successfully`))
        .catch(err=>res.send(err))


})
app.post("/passing", (req, res) => {

    console.log('Req.body: ', req.body);

    let newPassingData = req.body;
    newPlayerPassingData(newPassingData)
        .then(data=>res.status(201).send(`${playerId} record updated successfully`))
        .catch(err=>res.send(err))


})

app.delete("/passing/:playerId", (req, res) => {

    let { playerId } = req.params;

    deletePassingRecord(playerId)
        .then(() => res.status(200).send(`${playerId} has been deleted.`))
        .catch((err) =>
            res.status(404).send("No playerID found matching this!")
        );
})



// endpoints and routes that allow for all CRUDL functionality, namely, it should have endpoints that allow a user to:
// CREATE a record(s) in at least one table
// READ a specific record
// UPDATE a record
// DELETE a record
// LIST all of the records from one or more table(s)


module.exports = app;




