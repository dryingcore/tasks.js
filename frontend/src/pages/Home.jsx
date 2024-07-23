import { useState, useEffect } from "react";
import { Container, Typography, Paper } from "@mui/material";
import { getTasks, deleteTask } from "../api";
import AddTask from "../components/AddTask";
import ListTask from "../components/ListTask";

const Home = () => {
	const [tasks, setTasks] = useState([]);
	const [currentTask, setCurrentTask] = useState(null);

	const fetchTasks = async () => {
		const response = await getTasks();
		setTasks(response.data);
	};

	const handleDeleteTask = async id => {
		await deleteTask(id);
		fetchTasks();
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
				<ListTask tasks={tasks} setCurrentTask={setCurrentTask} deleteTask={handleDeleteTask} />
			</Paper>
		</Container>
	);
};

export default Home;
