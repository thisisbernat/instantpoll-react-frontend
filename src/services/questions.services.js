import service from './service'

const URL = '/questions'

// GET ALL QUESTIONS
const getAllQuestionsService = (pollId) => {
	return service.get(`${URL}/${pollId}`)
}

// ADD NEW QUESTION
const addNewQuestionService = (newQuestion) => {
	return service.post(`${URL}/`, newQuestion)
}

// UPDATE QUESTION
const updateQuestionService = (id, updatedQuestion) => {
	return service.put(`${URL}/${id}`, updatedQuestion)
}

// DELETE QUESTION
const deleteQuestionService = (id) => {
	return service.delete(`${URL}/${id}`)
}

export { getAllQuestionsService, addNewQuestionService, updateQuestionService, deleteQuestionService }