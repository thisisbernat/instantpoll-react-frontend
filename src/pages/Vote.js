import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
// import { AuthContext } from "../context/auth.context"
import { addNewAnswerService } from '../services/answers.services.js'
import { getAllQuestionsService } from '../services/questions.services.js'
import { updatePatchPollService } from '../services/polls.services.js'
import Swal from 'sweetalert2'

import VoteList from '../components/votes/VoteList'
import VoteIntro from '../components/votes/VoteIntro'
import VoteThanks from '../components/votes/VoteThanks'
import VoteMultipleChoice from '../components/votes/VoteMultipleChoice'
import VoteOpenDate from '../components/votes/VoteOpenDate'
import VoteOpenEmail from '../components/votes/VoteOpenEmail'
import VoteOpenLine from '../components/votes/VoteOpenLine'
import VoteOpenNumber from '../components/votes/VoteOpenNumber'
import VoteOpenParagraph from '../components/votes/VoteOpenParagraph'
import VoteOpenPhone from '../components/votes/VoteOpenPhone'
import VoteRanking from '../components/votes/VoteRanking'
import VoteRating from '../components/votes/VoteRating'
import VoteSingleChoice from '../components/votes/VoteSingleChoice'
import Share from '../components/votes/Share'
import SavingResults from '../components/votes/SavingResults'


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
  thanks: VoteThanks,
  saving: SavingResults
}

export default function Vote() {
  const { id } = useParams()
  const [pollId] = useState(id)
  let navigate = useNavigate()

  const sampleQuestion = {
    title: 'Sample title',
    type: 'intro',
    message: 'Sample message',
    buttonText: 'ok'
  } 

  const [questions, setQuestions] = useState([sampleQuestion])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [answers, setAnswers] = useState([])

  useEffect(() => {
    window.scrollTo(0, 0)

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
        setQuestions([...sortedQuestions, {type: 'saving'}])
      })
      .catch(err => console.log(err))
  }, [pollId])

  const nextStep = () => {
    if (currentIndex + 1 === questions.length) {     
      answers.forEach(answer => {
        addNewAnswerService(answer)
      })
      updatePatchPollService(questions[0].parentPoll, { $inc: {submissions: 1} })
      Swal.fire({
        icon: 'success',
        html: 'Thank you for your participation<br /><strong>InstantPoll</strong>',
        customClass: { confirmButton: 'text-white bg-teal-600'}
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
    currentAnswer.replierEmail = 'test@test.com'
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