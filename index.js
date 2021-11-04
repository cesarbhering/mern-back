const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const port = 3002;

const cors = require("cors");

const ActivitiesService = require("./Services/ActivitiesServices");

app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => res.send("Hello World!"));

app.use('/Activities', ActivitiesService);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
