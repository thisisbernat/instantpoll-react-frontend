import { useState, useEffect, useContext } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useAnalytics } from 'use-analytics'
import { AuthContext } from "../context/auth.context"
import { addNewAnswerService, getAllQuestionsService, getPollStatusService, addSubmissionPollService } from '../services/public.services.js'
import Swal from 'sweetalert2'

import VoteList from '../components/vote/VoteList'
import VoteIntro from '../components/vote/VoteIntro'
import VoteMultipleChoice from '../components/vote/VoteMultipleChoice'
import VoteOpenDate from '../components/vote/VoteDate'
import VoteOpenEmail from '../components/vote/VoteEmail'
import VoteOpenLine from '../components/vote/VoteLine'
import VoteOpenNumber from '../components/vote/VoteNumber'
import VoteOpenParagraph from '../components/vote/VoteParagraph'
import VoteOpenPhone from '../components/vote/VotePhone'
import VoteRanking from '../components/vote/VoteRanking'
import VoteRating from '../components/vote/VoteRating'
import VoteSingleChoice from '../components/vote/VoteSingleChoice'
import Share from '../components/vote/Share'
import SavingResults from '../components/vote/SavingResults'


const VoteQuestionsMap = {
  intro: VoteIntro,
  single: VoteSingleChoice,
  multiple: VoteMultipleChoice,
  paragraph: VoteOpenParagraph,
  line: VoteOpenLine,
  date: VoteOpenDate,
  email: VoteOpenEmail,
  phone: VoteOpenPhone,
  number: VoteOpenNumber,
  rating: VoteRating,
  ranking: VoteRanking,
  list: VoteList,
  thanks: VoteIntro,
  saving: SavingResults
}

export default function Vote() {
  let userEmail = 'anonymous@instantpoll.local'
  const { user } = useContext(AuthContext)
  if (user) {
    userEmail = user.email
  }

  const { id } = useParams()
  const [pollId] = useState(id)
  let navigate = useNavigate()
  const { page } = useAnalytics()

  const sampleQuestion = {
    title: 'Sample title',
    type: 'intro',
    message: 'Sample message',
    buttonText: 'ok'
  }

  const [questions, setQuestions] = useState([sampleQuestion])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [answers, setAnswers] = useState([])
  const [submissionId, setSubmissionId] = useState('')

  useEffect(() => {
    window.scrollTo(0, 0)

      ; (async (parameters) => {
        try {
          const pollStatus = await getPollStatusService(pollId)
          let anonymousId = ''
          if (pollStatus.data.isPublished) {
            const { payload } = await page()
            anonymousId = payload.anonymousId
            setSubmissionId(anonymousId)
          }
          if (pollStatus.data.submissionsIds.includes(anonymousId)) {
            const response = await Swal.fire({
              icon: 'warning',
              html: "We are sorry.<br /> It looks like you already participated in this poll.",
              customClass: {
                confirmButton: 'text-white bg-teal-600'
              },
              allowOutsideClick: false,
              allowEscapeKey: false
            })
            if (response.isConfirmed) {
              navigate("/")
            }
          }
        } catch (err) {
          console.log(err)
        }
      })(pollId)

    getAllQuestionsService(pollId)
      .then(response => {
        const sortedQuestions = response.data.sort((a, b) => {
          if (a.position > b.position) {
            return 1
          } else if (a.position < b.position) {
            return -1
          }
          return 0
        })
        setQuestions([...sortedQuestions, { type: 'saving' }])
      })
      .catch(err => console.log(err))
  }, [pollId, page])

  const nextStep = () => {
    if (currentIndex + 1 === questions.length) {
      answers.forEach(answer => {
        addNewAnswerService(answer)
      })
      addSubmissionPollService(questions[0].parentPoll, submissionId)
      Swal.fire({
        icon: 'success',
        html: 'Thank you for your participation<br /><strong>InstantPoll</strong>',
        customClass: { confirmButton: 'text-white bg-teal-600' }
      })
        .then(() => navigate("/"))
        .catch(err => console.log(err))
    }
    else {
      setCurrentIndex(currentIndex + 1)
    }
  }

  const showQuestion = () => {
    const ViewType = VoteQuestionsMap[questions[currentIndex].type]
    return <ViewType question={questions[currentIndex]} nextStep={nextStep} saveAnswer={saveAnswer} />
  }

  const saveAnswer = async (currentAnswer) => {
    currentAnswer.parentQuestion = questions[currentIndex]._id
    currentAnswer.replierEmail = userEmail
    currentAnswer.submissionId = submissionId
    setAnswers([...answers, currentAnswer])
    nextStep()
  }

  return (
    <div className="grid grid-cols-5-md grid-cols-1 u-gap-2 mx-0-md mx-2">
      {showQuestion()}
      <Share />
    </div>
  )
}