import service from './service'

const URL = '/polls'

// GET ALL POLLS
const getAllPollsService = () => {
	return service.get(`${URL}/`)
}

// GET ONE POLL
const getPollService = (id) => {
	return service.get(`${URL}/${id}`)
}

// ADD NEW POLL
const addNewPollService = (newPoll) => {
	return service.post(`${URL}/`, newPoll)
}

// UPDATE POLL
const updatePollService = (id, updatedPoll) => {
	return service.put(`${URL}/${id}`, updatedPoll)
}

// DELETE POLL
const deletePollService = (id) => {
	return service.delete(`${URL}/${id}`)
}

export { getAllPollsService, getPollService, addNewPollService, updatePollService, deletePollService }