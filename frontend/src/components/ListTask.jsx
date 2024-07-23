import PropTypes from "prop-types";
import { IconButton, List, ListItem, ListItemSecondaryAction, ListItemText } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

export default function ListTask({ tasks, setCurrentTask, deleteTask }) {
	return (
		<List>
			{tasks.map(task => (
				<ListItem key={task._id}>
					<ListItemText primary={task.title} secondary={task.description} />
					<ListItemSecondaryAction>
						<IconButton edge="end" aria-label="edit" onClick={() => setCurrentTask(task)}>
							<EditIcon />
						</IconButton>
						<IconButton edge="end" aria-label="delete" onClick={() => deleteTask(task._id)}>
							<DeleteIcon />
						</IconButton>
					</ListItemSecondaryAction>
				</ListItem>
			))}
		</List>
	);
}

ListTask.propTypes = {
	tasks: PropTypes.array.isRequired,
	setCurrentTask: PropTypes.func.isRequired,
	deleteTask: PropTypes.func.isRequired,
};
