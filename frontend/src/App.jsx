import { Container, ThemeProvider } from "@mui/material";
import { theme } from "./theme";
import AddTask from "./components/addTask";

export default function App() {
	return (
		<ThemeProvider theme={theme}>
			<Container>
				<AddTask />
			</Container>
		</ThemeProvider>
	);
}
