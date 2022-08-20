import { useState, useContext } from 'react'
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../context/auth.context"
import { addNewPollService, updatePatchPollService } from '../services/polls.services.js'
import { addNewQuestionService } from '../services/questions.services.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFloppyDisk, faPen, faPaperPlane, faGears } from '@fortawesome/free-solid-svg-icons'
import Swal from 'sweetalert2'


import NewQuestion from '../components/questions/new/NewQuestion'
import NewIntro from '../components/questions/new/NewIntro'
import NewList from '../components/questions/new/NewList'
import NewMultipleChoice from '../components/questions/new/NewMultipleChoice'
import NewRanking from '../components/questions/new/NewRanking'
import NewRating from '../components/questions/new/NewRating'
import NewSingleChoice from '../components/questions/new/NewSingleChoice'
import NewThanks from '../components/questions/new/NewThanks'
import AddQuestion from '../components/questions/AddQuestion'
import NewOpen from '../components/questions/new/NewOpen'
// import NewParagraph from '../components/questions/NewParagraph'
// import NewLine from '../components/questions/NewLine'
// import NewDate from '../components/questions/NewDate'
// import NewNumber from '../components/questions/NewNumber'
// import NewEmail from '../components/questions/NewEmail'
// import NewPhone from '../components/questions/NewPhone'





import SavedIntro from '../components/questions/saved/SavedIntro'
import SavedList from '../components/questions/saved/SavedList'
import SavedMultipleChoice from '../components/questions/saved/SavedMultipleChoice'
import SavedRanking from '../components/questions/saved/SavedRanking'
import SavedRating from '../components/questions/saved/SavedRating'
import SavedSingleChoice from '../components/questions/saved/SavedSingleChoice'
import SavedThanks from '../components/questions/saved/SavedThanks'
import SavedOpen from '../components/questions/saved/SavedOpen'

const NewQuestionsMap = {
  tbd: NewQuestion,
  intro: NewIntro,
  single: NewSingleChoice,
  multiple: NewMultipleChoice,
  open: NewOpen,
  rating: NewRating,
  ranking: NewRanking,
  list: NewList,
  thanks: NewThanks,
  // paragraph: NewParagraph,
  // line: NewLine,
  // date: NewDate,
  // number: NewNumber,
  // email: NewEmail,
  // phone: NewPhone
}

const SavedQuestionsMap = {
  intro: SavedIntro,
  single: SavedSingleChoice,
  multiple: SavedMultipleChoice,
  open: SavedOpen,
  rating: SavedRating,
  ranking: SavedRanking,
  list: SavedList,
  thanks: SavedThanks
}

function NewPoll() {
  const { user } = useContext(AuthContext)
  let navigate = useNavigate()

  const newQuestion = {
    title: '',
    type: 'tbd',
    options: ['', ''],
    isSaved: false,
    isCompulsory: false
  }

  const [questions, setQuestions] = useState([])
  const [pollTitle, setPollTitle] = useState('')
  const [showPen, setShowPen] = useState(false)

  const createQuestion = (newQuestion) => {
    // early return 
    if (questions.length > 0) {
      const lastQ = questions.slice(-1)[0]
      if (!lastQ.isSaved) {
        Swal.fire({
          title: 'Before adding a new question...',
          text: '...please save the at least one.',
          customClass: {
            confirmButton: 'bg-teal-600 text-white',
          }
        })
        return
      }
    }
    setQuestions([...questions, newQuestion])
  }

  // const readQuestion = (index) => questions[index]

  const updateQuestion = (index, property, newValue) => {
    let questionsCopy = [...questions]
    let question = questionsCopy[index]
    question[property] = newValue
    setQuestions(questionsCopy)
  }

  const deleteQuestion = (index) => {
    let confAlert = {
      text: 'Are you sure you want to delete the question?',
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
          let questionsCopy = [...questions]
          questionsCopy.splice(index, 1)
          setQuestions(questionsCopy)
        }
      })
      .catch(err => console.log(err))
  }

  const CRUD = {
    // createQuestion,
    // createQuestion,
    updateQuestion,
    deleteQuestion
  }

  const saveTitle = () => {
    let confAlert = {
      title: 'Poll title',
      text: 'Please, enter a poll title here',
      input: 'text',
      inputValue: pollTitle,
      customClass: {
        confirmButton: 'bg-teal-600 text-white',
        input: 'max-w-90p mx-auto'
      }
    }
    Swal.fire(confAlert)
      .then(response => {
        if (response.isConfirmed) {
          if (response.value) {
            setPollTitle(response.value)
          }

        }
      })
      .catch(err => console.log(err))
  }

  const pollOptionsMenu = () => {
    Swal.fire({
      title: 'Poll options',
      text: 'Here, you will be able to set the poll as public, where everybody will be able to vote, or private, where only a list of users will be able to vote',
      customClass: {
        confirmButton: 'bg-teal-600 text-white',
      }
    })
  }

  const savePoll = async (isPublished) => {
    if (pollTitle === '') {
      Swal.fire({
        title: 'Poll title missing!',
        text: 'Please edit the poll title before saving or publishing the poll.',
        customClass: {
          confirmButton: 'bg-teal-600 text-white',
        }
      })
      return
    }
    if (questions.length === 0) {
      Swal.fire({
        title: 'No questions added!',
        text: 'You must configure and save at least one question.',
        customClass: {
          confirmButton: 'bg-teal-600 text-white',
        }
      })
      return
    } else if (questions.length > 0 && questions.at(-1).isSaved === false) {
      Swal.fire({
        title: 'No questions added!',
        text: 'You must configure and save at least one question.',
        customClass: {
          confirmButton: 'bg-teal-600 text-white',
        }
      })
      return
    }

    if (isPublished) {
      let confAlert = {
        text: 'Are you sure you want to publish the poll?',
        icon: 'warning',
        cancelButtonText: `No`,
        confirmButtonText: `Yes`,
        showCancelButton: true,
        showCloseButton: true,
        customClass: {
          cancelButton: 'btn-dark btn--sm',
          confirmButton: 'bg-teal-600 text-white btn--sm'
        }
      }
      const publicationConfirm = await Swal.fire(confAlert)
      if (!publicationConfirm.isConfirmed) {
        return
      }
    }

    const newPoll = {
      title: pollTitle,
      isPublic: true,
      isPublished: isPublished,
      submissions: 0,
      views: 0,
      owner: user._id
    }

    const questionIds = []
    let savedPollId = null

    try {
      const savedPoll = await addNewPollService(newPoll)
      savedPollId = savedPoll.data._id

      for (const [index, question] of questions.entries()) {
        delete question.isSaved
        question.position = index
        question.parentPoll = savedPollId
        const savedQuestion = await addNewQuestionService(question)
        const savedQuestionId = savedQuestion.data._id
        questionIds.push(savedQuestionId)
      }

      await updatePatchPollService(savedPollId, { questions: questionIds })

    }
    catch (err) { console.log(err) }

    if (isPublished) {
      const value = await Swal.fire({
        title: 'The poll has been published',
        text: 'People can start participating right now!',
        icon: 'success',
        customClass: {
          confirmButton: 'bg-teal-600 text-white',
        }
      })
      if (value.isConfirmed) {
        navigate(`/poll/${savedPollId}`)
      }
    } else if (!isPublished) {
      const value = await Swal.fire({
        title: 'The poll has been saved',
        text: 'It can be published through your Dasboard',
        icon: 'success',
        customClass: {
          confirmButton: 'bg-teal-600 text-white',
        }
      })
      if (value.isConfirmed) {
        navigate("/dashboard")
      }
    }
  }

  return (
    <>
      <div className="u-flex u-flex-wrap u-justify-space-between-md u-items-center u-justify-center">
        <h4 className="font-alt text-yellow-400">
          <div onClick={saveTitle} onMouseEnter={() => setShowPen(true)} onMouseLeave={() => setShowPen(false)} className="click-area">
            <font className="dotted">{pollTitle ? pollTitle : 'Edit your poll title here!'}</font> {<FontAwesomeIcon className={showPen ? "text-gray-600 text-lg" : "text-gray-600 text-sm hidden"} icon={faPen} />}
          </div>
        </h4>
        <div className="u-flex u-gap-1">
          <button onClick={pollOptionsMenu} className="outline text-indigo-800 btn--sm">Poll options <FontAwesomeIcon icon={faGears} /></button>
          <button onClick={() => savePoll(false)} className="outline text-indigo-800 btn--sm">Save <FontAwesomeIcon icon={faFloppyDisk} /></button>
          <button onClick={() => savePoll(true)} className="bg-indigo-800 text-white btn--sm">Publish poll <FontAwesomeIcon icon={faPaperPlane} /></button>
        </div>
      </div>
      {questions.map((question, index) => {
        if (!question.isSaved) {
          const ViewType = NewQuestionsMap[question.type]
          return <ViewType key={index} index={index} CRUD={CRUD} question={question} />
        } else if (question.isSaved) {
          const ViewType = SavedQuestionsMap[question.type]
          return <ViewType key={index} index={index} CRUD={CRUD} question={question} />
        }
        return <></>
      })}

      <AddQuestion createQuestion={createQuestion} newQuestion={newQuestion} />

    </>
  )
}

export default NewPoll
