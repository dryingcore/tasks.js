import { Container, Paper, Typography } from "@mui/material";
import AddTask from "../components/AddTask";
import ListTask from "../components/ListTask";
import { deleteTask, getTasks } from "../api";
import { useEffect, useState } from "react";

export default function Home() {
	const [tasks, setTasks] = useState([]);
	const [currentTask, setCurrentTask] = useState(null);

	const fetchTasks = async () => {
		const tasks = await getTasks();
		setTasks(tasks.data);
	};

	useEffect(() => {
		fetchTasks();
	}, []);

	return (
		<Container>
			<Typography variant="h4" gutterBottom>
				Task Manager
			</Typography>
			<Paper sx={{ padding: 2 }}>
				<AddTask currentTask={currentTask} setCurrentTask={setCurrentTask} refreshTasks={fetchTasks} />
			</Paper>
			<Paper sx={{ marginTop: 2, padding: 2 }}>
				<ListTask tasks={tasks} setCurrentTask={setCurrentTask} deleteTask={deleteTask} />
			</Paper>
		</Container>
	);
}
