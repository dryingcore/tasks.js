import PropTypes from "prop-types";
import { IconButton, List, ListItem, ListItemSecondaryAction, ListItemText } from "@mui/material";
import { DeleteIcon, EditIcon } from "@mui/icons-material";

export default function ListTask({ tasks, setCurrentTask, deleteTask }) {
	return (
		<List>
			{tasks.map(tasks => {
				<ListItem key={tasks._id}>
					<ListItemText primary={tasks.title} secondary={tasks.description} />
					<ListItemSecondaryAction>
						<IconButton edge="end" aria-label="edit" onClick={() => setCurrentTask(tasks)}>
							<EditIcon />
						</IconButton>
						<IconButton edge="end" aria-label="delete" onClick={() => deleteTask(tasks._id)}>
							<DeleteIcon />
						</IconButton>
					</ListItemSecondaryAction>
				</ListItem>;
			})}
		</List>
	);
}

ListTask.propTypes = {
	tasks: PropTypes.array.isRequired,
	setCurrentTask: PropTypes.func.isRequired,
	deleteTask: PropTypes.func.isRequired,
};
