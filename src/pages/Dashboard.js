import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquarePollHorizontal, faEye, faPersonChalkboard, faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom"
import { getAllPollsService } from '../services/polls.services.js'
import { useState, useEffect } from 'react'

function Dashboard() {
  const [polls, setPolls] = useState([])

  const getAllPolls = async () => {
    const response = await getAllPollsService()
    setPolls(response.data)
  }

  useEffect(() => {
    getAllPolls()
  }, [])

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
          <h1 className="my-0">5</h1>
          <h4 className="my-0">Polls</h4>
        </div>
        <div className="bg-white u-round-sm u-shadow-lg px-2 py-3 u-flex u-flex-column u-items-center u-gap-5">
          <div className="p-1 bg-green-500 text-gray-000 u-center circle"><FontAwesomeIcon icon={faEye} /></div>
          <h1 className="my-0">15</h1>
          <h4 className="my-0">Views</h4>
        </div>
        <div className="bg-white u-round-sm u-shadow-lg px-2 py-3 u-flex u-flex-column u-items-center u-gap-5">
          <div className="p-1 bg-yellow-400 text-gray-000 u-center circle"><FontAwesomeIcon icon={faPersonChalkboard} /></div>
          <h1 className="my-0">3</h1>
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
        <table class="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Status</th>
              <th>Creation</th>
              <th>Questions</th>
              <th>Views</th>
              <th>Submissions</th>
              <th>Subm. rate</th>
            </tr>
          </thead>
          <tbody>
            {polls.map((poll, index) => {
              return (
                <tr key={index}>
                  <th><Link to={`/poll/${poll._id}`}>{poll.title}</Link></th>
                  <td>{poll.isPublished}</td>
                  <td>{poll.createdAt}</td>
                  <td>{poll.questions.length}</td>
                  <td>63</td>
                  <td>41</td>
                  <td>81%</td>
                </tr>
              )
            })}
          </tbody>
        </table>
        {polls.length ? <></> : (
          <div class="toast toast--gray mx-auto">
            <div className="u-text-center"><FontAwesomeIcon icon={faInfoCircle} /> No polls available</div>
          </div>
        )}
      </div>
    </>
  );
}

export default Dashboard;
