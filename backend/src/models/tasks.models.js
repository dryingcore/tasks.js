const mongoose = require("mongoose");

const tasksSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true,
	},
	completed: {
		type: Boolean,
		default: false,
	},
});

module.exports = mongoose.model("Tasks", tasksSchema);
