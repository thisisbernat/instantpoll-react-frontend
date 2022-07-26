import service from './service';

const URL = '/tasks';

//add new task
const addNewTaskService = (newTask) => {
	return service.post(`${URL}/`, newTask);
};

//delete task
const deleteTaskService = (id) => {
	return service.delete(`${URL}/${id}`);
};

//update task
const updateTaskService = (id, updatedTask) => {
	return service.put(`${URL}/${id}`, updatedTask);
};

export { addNewTaskService, deleteTaskService, updateTaskService };
