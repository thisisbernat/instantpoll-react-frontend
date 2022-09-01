import service from './service'

const URL = '/polls'

// GET ALL POLLS
const getAllPollsService = (userId) => {
	return service.get(`${URL}/${userId}`)
}

// GET POLL STATUS
const getPollStatusService = (id) => {
	return service.get(`${URL}/status/${id}`)
}

// ADD NEW POLL
const addNewPollService = (newPoll) => {
	return service.post(`${URL}/`, newPoll)
}

// ADD VIEW TO POLL
const addNewViewService = (id, visitId) => {
	return service.post(`${URL}/views/${id}`, {visitId})
}

// UPDATE POLL (FULL UPDATE)
const updatePollService = (id, updatedPoll) => {
	return service.put(`${URL}/${id}`, updatedPoll)
}

// UPDATE POLL (PARTIAL UPDATE)
const updatePatchPollService = (id, updatedPoll) => {
	return service.patch(`${URL}/${id}`, updatedPoll)
}

// DELETE POLL
const deletePollService = (id) => {
	return service.delete(`${URL}/${id}`)
}

export { getAllPollsService, addNewPollService, updatePollService, deletePollService, updatePatchPollService, addNewViewService, getPollStatusService }