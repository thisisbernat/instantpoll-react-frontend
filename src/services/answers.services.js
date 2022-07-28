import service from './service'

const URL = '/answers'

// GET ALL ANSWERS
const getAllAnswersService = (pollId) => {
	return service.get(`${URL}/${pollId}`)
}

// GET ONE ANSWER
const getAnswerService = (id) => {
	return service.get(`${URL}/${id}`)
}

// ADD NEW ANSWER
const addNewAnswerService = (newAnswer) => {
	return service.post(`${URL}/`, newAnswer)
}

// UPDATE ANSWER (FULL UPDATE)
const updateAnswerService = (id, updatedAnswer) => {
	return service.put(`${URL}/${id}`, updatedAnswer)
}


// DELETE ANSWER
const deleteAnswerService = (id) => {
	return service.delete(`${URL}/${id}`)
}

export { getAllAnswersService, getAnswerService, addNewAnswerService, updateAnswerService, deleteAnswerService }