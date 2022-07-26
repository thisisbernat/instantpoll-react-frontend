import { useState } from 'react';
import { addNewProjectService } from '../services/project.services.js';

function AddProject(props) {
	const [ title, setTitle ] = useState('');
	const [ description, setDescription ] = useState('');

	const handleSubmit = async (e) => {
		e.preventDefault();

		const newProject = { title, description };

		// Send the token through the request "Authorization" Headers
		try {
			await addNewProjectService(newProject);
			setTitle('');
			setDescription('');
			props.refreshProjects();
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<div className="AddProject">
			<h3>Add Project</h3>

			<form onSubmit={handleSubmit}>
				<label>Title:</label>
				<input type="text" name="title" value={title} onChange={(e) => setTitle(e.target.value)} />

				<label>Description:</label>
				<textarea
					type="text"
					name="description"
					value={description}
					onChange={(e) => setDescription(e.target.value)}
				/>

				<button type="submit">Submit</button>
			</form>
		</div>
	);
}

export default AddProject;
