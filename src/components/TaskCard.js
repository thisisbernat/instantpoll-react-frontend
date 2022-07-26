import React, { useState } from 'react';

import { updateTaskService, deleteTaskService } from '../services/tasks.services';

function TaskCard({ title, description, _id }) {
	const [ inputTitle, setInputTitle ] = useState(title);
	const [ inputDescription, setInputDescription ] = useState(description);
	const [ isDeleted, setIsDeleted ] = useState(false);
	const idTask = _id;

	const handleSubmitTask = async (e) => {
		try {
			const requestBody = { inputTitle, inputDescription };

			await updateTaskService(idTask, requestBody);
		} catch (err) {
			console.log(err);
		}
	};

	const handleDeleteTask = async (e) => {
		try {
			await deleteTaskService(idTask);
			setIsDeleted(true);
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<div>
			{!isDeleted && (
				<div className="TaskCard card">
					<p>Task</p>
					<input
						value={inputTitle}
						onChange={(e) => {
							setInputTitle(e.target.value);
						}}
					/>
					<input
						value={inputDescription}
						onChange={(e) => {
							setInputDescription(e.target.value);
						}}
					/>
					<button onClick={handleSubmitTask}>Modificar</button>
					<button onClick={handleDeleteTask}>Eliminar</button>
				</div>
			)}
		</div>
	);
}

export default TaskCard;
