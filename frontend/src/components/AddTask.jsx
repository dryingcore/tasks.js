import { Box, Button, TextField } from "@mui/material";
import { useEffect, useState } from "react";

export default function AddTask({ currentTask, setCurrentTask, refreshTasks }) {
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [completed, setCompleted] = useState(false);

	useEffect(() => {
		if (currentTask) {
			setTitle(currentTask.title);
			setDescription(currentTask.description);
			setCompleted(currentTask.completed);
		}
	}, [currentTask]);

	return (
		<Box component="form" sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
			<TextField label="Title" variant="outlined" required />
			<TextField label="Description" variant="outlined" multiline rows={4} required />

			<Button variant="contained" type="submit">
				Add Task
			</Button>
		</Box>
	);
}
