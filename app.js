const express = require("express");
const morgan = require("morgan");

const app = express();

app.use(express.json())
app.use(morgan("tiny"))

app.get("/", (req,res) => {
    res.send("hello, it works...")
})

// endpoints and routes that allow for all CRUDL functionality, namely, it should have endpoints that allow a user to:
// CREATE a record(s) in at least one table
// READ a specific record
// UPDATE a record
// DELETE a record
// LIST all of the records from one or more table(s)


module.exports = app;