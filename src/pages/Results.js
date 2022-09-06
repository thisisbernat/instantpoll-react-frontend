import ResultChart from '../components/results/ResultChart.js'
import ResultRating from '../components/results/ResultRating.js'
import ResultRanking from '../components/results/ResultRanking.js'
import ResultOpen from '../components/results/ResultOpen.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileCsv, faSquarePollVertical, faEye, faPersonChalkboard, faCalendar } from '@fortawesome/free-solid-svg-icons'
import { getAllPollsService, getAllQuestionsFromPollService } from '../services/polls.services.js'
import { useState, useEffect, useContext } from 'react'
import { AuthContext } from "../context/auth.context"
import { useParams } from 'react-router-dom'

const ResultsQuestionsMap = {
  single: ResultChart,
  multiple: ResultChart,
  rating: ResultRating,
  ranking: ResultRanking,
  open: ResultOpen,
  paragraph: ResultOpen,
  line: ResultOpen,
  date: ResultOpen,
  email: ResultOpen,
  phone: ResultOpen,
  number: ResultOpen,
  list: ResultOpen
}

export default function Results() {
  const { user: { _id: userId } } = useContext(AuthContext)
  const { pollId } = useParams()
  const [questions, setQuestions] = useState([])
  const [poll, setPoll] = useState({
    title: 'title',
    submissions: '1',
    views: '1',
    createdAt: '2022-07-28T21:27:53.697Z'
  })

  const formatDate = (date) => new Intl.DateTimeFormat('en-GB').format(new Date(date))

  useEffect(() => {
    getQuestions(pollId)
    getPoll(pollId, userId)
  }, [pollId, userId])

  const getQuestions = async (id) => {
    try {
      const questions = await getAllQuestionsFromPollService(id)
      const filteredQuestions = questions.data.filter(question => {
        if (question.type === 'intro') {
          return false
        } else if (question.type === 'thanks') {
          return false
        } else {
          return true
        }
      })
      setQuestions(filteredQuestions)
    } catch (err) {
      console.log(err)
    }
  }

  const getPoll = async (pollId, userId) => {
    try {
      const polls = await getAllPollsService(userId)
      const thisPoll = polls.data.find(poll => poll._id === pollId)
      setPoll(thisPoll)
    } catch (err) {
      console.log(err)
    }
  }

  const ResultSpecificView = (question) => {
    const SpecificView = ResultsQuestionsMap[question.type]
    return <SpecificView question={question} />
  }

  return (
    <>
      <div className="u-flex u-flex-column u-items-center u-justify-center">
          <h4 className="font-alt">{poll.title}</h4>
          <button className="bg-teal-600 text-white btn--sm">Export to CSV <FontAwesomeIcon icon={faFileCsv} /></button>
      </div>
      <div className="grid grid-cols-4-md grid-cols-2 u-gap-2 text-gray-700">
        <div className="u-flex u-flex-column u-items-center bg-white u-round-sm u-shadow-lg p-2">
          <div><FontAwesomeIcon icon={faEye} /></div>
          <font className="font-black">Views</font>
          <h6 className="mb-0">{poll.views}</h6>
        </div>
        <div className="u-flex u-flex-column u-items-center bg-white u-round-sm u-shadow-lg p-2">
          <div><FontAwesomeIcon icon={faPersonChalkboard} /></div>
          <font className="font-black">Submissions</font>
          <h6 className="mb-0">{poll.submissions}</h6>
        </div>
        <div className="u-flex u-flex-column u-items-center bg-white u-round-sm u-shadow-lg p-2">
          <div><FontAwesomeIcon icon={faSquarePollVertical} /></div>
          <font className="font-black">Submission rate</font>
          <h6 className="mb-0">{Math.round((poll.submissions / poll.views) * 100) + '%'}</h6>
        </div>
        <div className="u-flex u-flex-column u-items-center bg-white u-round-sm u-shadow-lg p-2">
          <div><FontAwesomeIcon icon={faCalendar} /></div>
          <font className="font-black">Creation date</font>
          <h6 className="mb-0">{formatDate(poll.createdAt)}</h6>
        </div>
      </div>
      <div className="u-flex u-flex-column u-gap-2">
        {questions.map((question, index) => {
          return <div key={index}>{ResultSpecificView(question)}</div>
        })}
      </div>
    </>
  )
}
