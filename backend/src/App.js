const express = require("express");
const App = express();
const tasksRoute = require("./routes/tasks.route");

App.use(express.json());
App.use("/api/tasks", tasksRoute);

module.exports = App;
