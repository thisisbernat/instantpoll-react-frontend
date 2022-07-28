import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquarePollHorizontal, faEye, faPersonChalkboard, faInfoCircle, faTrashCan, faPaperPlane,faUpRightFromSquare, faDoorClosed } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom"
import { getAllPollsService, deletePollService, updatePatchPollService } from '../services/polls.services.js'
import { useState, useEffect, useContext } from 'react'
import { AuthContext } from "../context/auth.context"
import Swal from 'sweetalert2'


function Dashboard() {
  const { user } = useContext(AuthContext)
  const [userId] = useState(user._id)
  const [polls, setPolls] = useState([])
  const [totalSubmissions, setTotalSubmissions] = useState(0)

  const translateDate = (date) => {
    let yourDate = new Date(date)
    let newDate = new Intl.DateTimeFormat('en-GB').format(yourDate)
    return <>{newDate}</>
  }

  useEffect(() => {
    getAllPollsService(userId)
      .then(response => {
        setPolls(response.data)
        const total = response.data.reduce((acc, obj) => { 
          return acc + obj.submissions; 
        }, 0)
        setTotalSubmissions(total)
      })
      .catch(err => console.log(err))
  }, [userId])

  const publishPoll = (pollId, index) => {
    let confAlert = {
      text: 'Are you sure you want to publish the poll?',
      icon: 'warning',
      cancelButtonText: `No`,
      confirmButtonText: `Publish`,
      showCancelButton: true,
      showCloseButton: true,
      customClass: {
        cancelButton: 'bg-teal-400 text-white btn--sm',
        confirmButton: 'bg-red-700 text-white btn--sm'
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
        cancelButton: 'bg-teal-400 text-white btn--sm',
        confirmButton: 'bg-red-700 text-white btn--sm'
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
        cancelButton: 'bg-teal-400 text-white btn--sm',
        confirmButton: 'bg-red-700 text-white btn--sm'
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
      {/* DASHBOARD HEADER */}
      <div className="u-flex u-flex-wrap u-justify-space-between-md u-items-center u-justify-center">
        <h4 className="font-alt uppercase">Dashboard</h4>
      </div>
      {/* DASHBOARD HEADER */}

      <div className="grid grid-cols-3-md grid-cols-1 u-gap-2 mx-0-md mx-2">
        <div className="bg-white u-round-sm u-shadow-lg px-2 py-3 u-flex u-flex-column u-items-center u-gap-5">
          <div className="p-1 bg-pink-800 text-gray-000 u-center circle"><FontAwesomeIcon icon={faSquarePollHorizontal} /></div>
          <h1 className="my-0">{polls.length}</h1>
          <h4 className="my-0">Polls</h4>
        </div>
        <div className="bg-white u-round-sm u-shadow-lg px-2 py-3 u-flex u-flex-column u-items-center u-gap-5">
          <div className="p-1 bg-green-500 text-gray-000 u-center circle"><FontAwesomeIcon icon={faEye} /></div>
          <h1 className="my-0">15</h1>
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

      {/* MY POLLS HEADER */}
      <div className="u-flex u-flex-wrap u-justify-space-between-md u-items-center u-justify-center mt-0">
        <h4 className="font-alt mt-0">My polls</h4>
      </div>
      {/* MY POLLS HEADER */}

      {/* TABLE */}
      <div className="bg-white u-round-sm u-shadow-lg px-3 pt-2 pb-1 mt-0 table-container">
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th><abbr title="Creation date">Creation</abbr></th>
              <th><abbr title="Published/Saved">Status</abbr></th>  
              <th><abbr title="Public/Private">Visibility</abbr></th>                      
              <th><abbr title="Number of views">Views</abbr></th>
              <th><abbr title="Submissions">Sub.</abbr></th>
              <th><abbr title="Submission rate">SR</abbr></th>
              <th>Actions</th>
              <th>Del</th>
            </tr>
          </thead>
          <tbody>
            {polls.map((poll, index) => {
              return (
                <tr key={index}>                  
                  <th><Link to={`/poll/${poll._id}`}>{poll.title} <FontAwesomeIcon icon={faUpRightFromSquare} /></Link></th>
                  <td>{translateDate(poll.createdAt)}</td>
                  <td>{poll.isPublished ? 'Published' : 'Closed'}</td>
                  <td>{poll.isPublic ? 'Public' : 'Private'}</td>                  
                  <td>63</td>
                  <td>{poll.submissions}</td>
                  <td>81%</td>
                  <td>{poll.isPublished ? <button onClick={() => closePoll(poll._id, index)} className="btn--sm outline text-gray-700 py-0" title="Close poll"><FontAwesomeIcon icon={faDoorClosed} /></button> : <button onClick={() => publishPoll(poll._id, index)} className="btn--sm outline btn-dark py-0" title="Publish poll"><FontAwesomeIcon icon={faPaperPlane} /></button>}</td>
                  <td><button onClick={() => deletePoll(poll._id, index)} className="btn--sm outline btn-primary py-0" title="Delete poll"><FontAwesomeIcon icon={faTrashCan} /></button></td>
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
  );
}

export default Dashboard;
