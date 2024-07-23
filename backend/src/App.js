const express = require("express");
const App = express();

App.use(express.json());
App.use("/api/tasks");

module.exports = App;
