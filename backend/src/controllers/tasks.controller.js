const Tasks = require("../models/tasks.models");

exports.getTasks = async (req, res) => {
	try {
		const tasks = await Tasks.find();
		res.status(200).json(tasks);
	} catch (error) {
		res.status(404).json({ message: error.message });
	}
};

exports.createTask = async (req, res) => {
	const task = new Tasks({
		title: req.body.title,
		description: req.body.description,
	});

	try {
		const newTask = await task.save();
		res.status(201).json(newTask);
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
};

exports.updateTask = async (req, res) => {
	
}