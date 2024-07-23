const express = require("express");
const cors = require("cors");
const App = express();
const tasksRoute = require("./routes/tasks.route");

App.use(cors());
App.use(express.json());
App.use("/api/tasks", tasksRoute);

module.exports = App;
