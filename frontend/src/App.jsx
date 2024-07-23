import { Container, ThemeProvider, CssBaseline } from "@mui/material";
import theme from "./theme"; // Certifique-se de que a exportação está correta
import AddTask from "./components/AddTask"; 

export default function App() {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Container maxWidth="sm" sx={{ padding: 2 }}>
				<AddTask />
			</Container>
		</ThemeProvider>
	);
}
