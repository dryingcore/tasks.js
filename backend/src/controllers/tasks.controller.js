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
	try {
		const task = await Tasks.findById(req.params.id);

		if (!task) return res.status(404).json({ message: "Task not found" });
		if (req.body.title != null) task.title = req.body.title;
		if (req.body.description != null) task.description = req.body.description;
		if (req.body.completed != null) task.completed = req.body.completed;

		const updatedTask = await task.save();
		res.status(200).json(updatedTask);
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
};

exports.deleteTask = async (req, res) => {
	try {
		const task = await Tasks.findById(req.params.id);
		if (!task) return res.status(404).json({ message: "Task not found" });
		await task.remove();
		res.status(200).json({ message: "Task deleted" });
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};
