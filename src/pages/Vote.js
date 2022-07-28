import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { AuthContext } from "../context/auth.context"
import { addNewAnswerService } from '../services/answers.services.js'
import { getAllQuestionsService } from '../services/questions.services.js'

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
  thanks: VoteThanks
}

function Vote() {
  const { id } = useParams()
  const [pollId] = useState(id)

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
            return 1;
          } else if (a.position < b.position) {
            return -1;
          }
          return 0
        })
        setQuestions(sortedQuestions)
      })
      .catch(err => console.log(err))
  }, [pollId])

  const next = () => {
    setCurrentIndex(currentIndex + 1)
  }

  const showQuestion = () => {
    const ViewType = VoteQuestionsMap[questions[currentIndex].type]
    return <ViewType question={questions[currentIndex]} next={next} saveAnswer={saveAnswer} />
  }

  const saveAnswer = (e, answer) => {
    e.preventDefault()
    next()
    console.log('answer saved!')
    console.log(answer)
  }

  return (
    <div className="grid grid-cols-5-md grid-cols-1 u-gap-2 mx-0-md mx-2">
      {showQuestion()}
      <Share />

    </div>
  );
}

export default Vote;