import { Box, Button, TextField } from "@mui/material";

export default function AddTask() {
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
