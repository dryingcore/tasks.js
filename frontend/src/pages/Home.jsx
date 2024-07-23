import { Container, Paper, Typography } from "@mui/material";
import AddTask from "../components/AddTask";

export default function Home() {
	return (
		<Container>
			<Typography variant="h4" gutterBottom>
				Task Manager
			</Typography>
			<Paper sx={{ padding: 2 }}>
				<AddTask />
			</Paper>
		</Container>
	);
}
