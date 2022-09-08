import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquarePollHorizontal, faEye, faPersonChalkboard, faInfoCircle, faTrashCan, faPaperPlane, faDoorClosed } from '@fortawesome/free-solid-svg-icons'
import { Link, useNavigate } from "react-router-dom"
import { getAllPollsService, deletePollService, updatePatchPollService } from '../services/polls.services.js'
import { useState, useEffect, useContext } from 'react'
import { AuthContext } from "../context/auth.context"
import Swal from 'sweetalert2'

export default function Dashboard() {
  const { user } = useContext(AuthContext)
  const [polls, setPolls] = useState([])
  const [totalSubmissions, setTotalSubmissions] = useState(0)
  const [totalViews, setTotalViews] = useState(0)
  const navigate = useNavigate()
  const formatDate = (date) => new Intl.DateTimeFormat('en-GB').format(new Date(date))

  useEffect(() => {
    getAllPollsService(user._id)
      .then(response => {
        setPolls(response.data)
        const reduceSubmissions = response.data.reduce((acc, obj) => {
          return acc + obj.submissions
        }, 0)
        setTotalSubmissions(reduceSubmissions)
        const reduceViews = response.data.reduce((acc, obj) => {
          return acc + obj.views
        }, 0)
        setTotalViews(reduceViews)
      })
      .catch(err => console.log(err))
  }, [user._id])

  const publishPoll = (pollId, index) => {
    let confAlert = {
      text: 'Are you sure you want to publish the poll?',
      icon: 'warning',
      cancelButtonText: `No`,
      confirmButtonText: `Publish`,
      showCancelButton: true,
      customClass: {
        cancelButton: 'btn-dark btn--sm',
        confirmButton: 'bg-teal-600 text-white btn--sm'
      }
    }
    Swal.fire(confAlert)
      .then(response => {
        if (response.isConfirmed) {
          updatePatchPollService(pollId, { isPublished: true })
          let pollsCopy = [...polls]
          pollsCopy[index].isPublished = true
          setPolls(pollsCopy)
        }
      })
      .catch(err => console.log(err))
  }

  const closePoll = (pollId, index) => {
    let confAlert = {
      text: 'Are you sure you want to close the poll?',
      icon: 'question',
      cancelButtonText: `No`,
      confirmButtonText: `Close`,
      showCancelButton: true,
      showCloseButton: true,
      customClass: {
        cancelButton: 'btn-dark btn--sm',
        confirmButton: 'bg-teal-600 text-white btn--sm'
      }
    }
    Swal.fire(confAlert)
      .then(response => {
        if (response.isConfirmed) {
          updatePatchPollService(pollId, { isPublished: false })
          let pollsCopy = [...polls]
          pollsCopy[index].isPublished = false
          setPolls(pollsCopy)
        }
      })
      .catch(err => console.log(err))
  }

  const deletePoll = (pollId, index) => {
    let confAlert = {
      title: 'Are you sure you want to delete the poll?',
      text: 'This process is irreversible! All information related to this poll will be deleted',
      icon: 'warning',
      cancelButtonText: `No`,
      confirmButtonText: `Delete`,
      showCancelButton: true,
      showCloseButton: true,
      customClass: {
        cancelButton: 'btn-dark btn--sm',
        confirmButton: 'bg-teal-600 text-white btn--sm'
      }
    }
    Swal.fire(confAlert)
      .then(response => {
        if (response.isConfirmed) {
          deletePollService(pollId)
          let pollsCopy = [...polls]
          pollsCopy.splice(index, 1)
          setPolls(pollsCopy)
        }
      })
      .catch(err => console.log(err))
  }

  return (
    <>
      <div className="u-flex u-flex-wrap u-justify-space-between-md u-items-center u-justify-center">
        <h4 className="font-alt uppercase">Dashboard</h4>
      </div>
      <div className="grid grid-cols-3-md grid-cols-1 u-gap-2 mx-0-md mx-2">
        <div className="bg-white u-round-sm u-shadow-lg px-2 py-3 u-flex u-flex-column u-items-center u-gap-5">
          <div className="p-1 bg-pink-800 text-gray-000 u-center circle"><FontAwesomeIcon icon={faSquarePollHorizontal} /></div>
          <h1 className="my-0">{polls.length}</h1>
          <h4 className="my-0">Polls</h4>
        </div>
        <div className="bg-white u-round-sm u-shadow-lg px-2 py-3 u-flex u-flex-column u-items-center u-gap-5">
          <div className="p-1 bg-green-500 text-gray-000 u-center circle"><FontAwesomeIcon icon={faEye} /></div>
          <h1 className="my-0">{totalViews}</h1>
          <h4 className="my-0">Views</h4>
        </div>
        <div className="bg-white u-round-sm u-shadow-lg px-2 py-3 u-flex u-flex-column u-items-center u-gap-5">
          <div className="p-1 bg-yellow-400 text-gray-000 u-center circle"><FontAwesomeIcon icon={faPersonChalkboard} /></div>
          <h1 className="my-0">{totalSubmissions}</h1>
          <h4 className="my-0">Submissions</h4>
        </div>
      </div>

      <div className="u-center mt-2 mb-0">
        <Link to="/new">
          <button className="cta-btn text-white bg-black btn--lg">Create a new poll</button>
        </Link>
      </div>

      <div className="u-flex u-flex-wrap u-justify-space-between-md u-items-center u-justify-center mt-0">
        <h4 className="font-alt mt-0">My polls</h4>
      </div>

      <div className="bg-white u-round-sm u-shadow-lg px-3 pt-2 pb-1 mt-0 table-container">
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Creation</th>
              <th>Status</th>
              <th>Vote</th>
              <th>Report</th>
              <th>Publish</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {polls.map((poll, index) => {
              return (
                <tr key={index}>
                  <th><span className="uppercase">{poll.title}</span></th>
                  <td>{formatDate(poll.createdAt)}</td>
                  <td>{poll.isPublished ? 'Published' : 'Closed'}</td>
                  <td><h4 className="tooltip tooltip--bottom dashboard-btn" data-tooltip="Vote poll"><FontAwesomeIcon onClick={() => navigate(`/poll/${poll._id}`)} icon={faPersonChalkboard} className="pointer" /></h4></td>
                  <td><h4 className="tooltip tooltip--bottom dashboard-btn" data-tooltip="View report"><FontAwesomeIcon onClick={() => navigate(`/results/${poll._id}`)} icon={faSquarePollHorizontal} className="pointer" /></h4></td>
                  <td>{poll.isPublished ? <h4 className="tooltip tooltip--bottom dashboard-btn" data-tooltip="Unpublish poll"><FontAwesomeIcon onClick={() => closePoll(poll._id, index)} icon={faDoorClosed} className="pointer" /></h4> : <h4 className="tooltip tooltip--bottom dashboard-btn" data-tooltip="Publish poll"><FontAwesomeIcon onClick={() => publishPoll(poll._id, index)} icon={faPaperPlane} className="pointer" /></h4>}</td>
                  <td><h4 className="tooltip tooltip--bottom dashboard-btn" data-tooltip="Delete poll"><FontAwesomeIcon onClick={() => deletePoll(poll._id, index)} icon={faTrashCan} className="pointer" /></h4></td>
                </tr>
              )
            })}
          </tbody>
        </table>
        {polls.length ? <></> : (
          <div className="toast toast--gray mx-auto">
            <div className="u-text-center"><FontAwesomeIcon icon={faInfoCircle} /> No polls available</div>
          </div>
        )}
      </div>
    </>
  )
}
