import service from './service'

const URL = '/public'

// ADD NEW ANSWER
const addNewAnswerService = (newAnswer) => {
  return service.post(`${URL}/answers`, newAnswer)
}

// GET POLL STATUS
const getPollStatusService = (id) => {
  return service.get(`${URL}/polls/status/${id}`)
}

// UPDATE POLL (PARTIAL UPDATE)
const updatePatchPollService = (id, updatedPoll) => {
  return service.patch(`${URL}/polls/${id}`, updatedPoll)
}

// GET ALL QUESTIONS
const getAllQuestionsService = (pollId) => {
  return service.get(`${URL}/questions/${pollId}`)
}

export { addNewAnswerService, getPollStatusService, updatePatchPollService, getAllQuestionsService }