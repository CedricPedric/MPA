// server/index.js

const express = require("express");

const PORT = process.env.PORT || 5000;

const app = express();

const data = require("./data.json");
console.log(data);

app.get("/api", (req, res) => {

    res.json(data);
});
app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});