import service from './service'

const URL = '/questions'

// GET ALL QUESTIONS
const getAllQuestionsService = (pollId) => {
	return service.get(`${URL}/${pollId}`)
}

// GET ALL ANSWERS FROM QUESTIONS
const getAllAnswersFromQuestionsService = (questionId) => {
	return service.get(`${URL}/${questionId}/answers`)
}

// GET ALL ANSWERS FROM QUESTIONS
const getGraphFromQuestionService = (questionId) => {
	return service.get(`${URL}/${questionId}/answers/graph`)
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

export { getAllQuestionsService, addNewQuestionService, updateQuestionService, deleteQuestionService, getAllAnswersFromQuestionsService, getGraphFromQuestionService }