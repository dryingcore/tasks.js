import PropTypes from "prop-types";
import { Box, Button, TextField, FormControlLabel, Checkbox } from "@mui/material";
import { useEffect, useState } from "react";
import { updateTask, createTask } from "../api";

export default function AddTask({ currentTask, setCurrentTask, refreshTasks }) {
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [completed, setCompleted] = useState(false);

	useEffect(() => {
		if (currentTask) {
			setTitle(currentTask.title);
			setDescription(currentTask.description);
			setCompleted(currentTask.completed);
		} else {
			setTitle("");
			setDescription("");
			setCompleted(false);
		}
	}, [currentTask]);

	const handleSubmit = async e => {
		e.preventDefault();
		if (currentTask) {
			await updateTask(currentTask._id, { title, description, completed });
		} else {
			await createTask({ title, description, completed });
		}

		setTitle("");
		setDescription("");
		setCompleted(false);
		setCurrentTask(null);
		refreshTasks();
	};

	return (
		<Box component="form" sx={{ display: "flex", flexDirection: "column", gap: 2 }} onSubmit={handleSubmit}>
			<TextField label="Title" value={title} onChange={e => setTitle(e.target.value)} variant="outlined" required />
			<TextField label="Description" value={description} onChange={e => setDescription(e.target.value)} variant="outlined" multiline rows={4} required />
			<FormControlLabel control={<Checkbox checked={completed} onChange={e => setCompleted(e.target.checked)} />} label="Completed" />
			<Button variant="contained" type="submit">
				{currentTask ? "Update Task" : "Add Task"}
			</Button>
		</Box>
	);
}

AddTask.propTypes = {
	currentTask: PropTypes.shape({
		_id: PropTypes.string,
		title: PropTypes.string,
		description: PropTypes.string,
		completed: PropTypes.bool,
	}),
	setCurrentTask: PropTypes.func.isRequired,
	refreshTasks: PropTypes.func.isRequired,
};
