import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFloppyDisk, faPen, faPaperPlane, faGears } from '@fortawesome/free-solid-svg-icons'

import NewQuestion from '../components/questions/NewQuestion'
import NewIntro from '../components/questions/NewIntro'
import NewList from '../components/questions/NewList'
import NewMultipleChoice from '../components/questions/NewMultipleChoice'
import NewRanking from '../components/questions/NewRanking'
import NewRating from '../components/questions/NewRating'
import NewSingleChoice from '../components/questions/NewSingleChoice'
import NewThanks from '../components/questions/NewThanks'
import AddQuestion from '../components/questions/AddQuestion'
import NewOpen from '../components/questions/NewOpen'

const QuestionsMap = {
  tbd: NewQuestion,
  intro: NewIntro,
  single: NewSingleChoice,
  multiple: NewMultipleChoice,
  open: NewOpen,
  rating: NewRating,
  ranking: NewRanking,
  list: NewList,
  thanks: NewThanks
}

function NewPoll() {

  const newQuestion = {
    title: 'New question',
    type: 'tbd',
    isSaved: false,
    isCompulsory: false
  }

  const [questions, setQuestions] = useState([]);
  const [pollTitle, setPollTitle] = useState('My new poll')

  const createQuestion = (newQuestion) => {
    if (questions.length > 0) {
      const lastQ = questions.slice(-1)[0]
      if (!lastQ.isSaved) {
        return
      }
    }
    setQuestions([...questions, newQuestion])
  }

  const readQuestion = (index) => {
    return questions[index]
  }

  const updateQuestion = (index, property, newValue) => {
    let questionsCopy = [...questions]
    questionsCopy[index].type = newValue
    setQuestions(questionsCopy)
  }

  const deleteQuestion = (index) => {
    let questionsCopy = [...questions]
    questionsCopy.splice(index, 1)
    setQuestions(questionsCopy)
  }

  const crud = {
    create: createQuestion,
    read: readQuestion,
    update: updateQuestion,
    delete: deleteQuestion
  }

  return (
    <>
      {/* POLL HEADER */}
      <div className="u-flex u-flex-wrap u-justify-space-between-md u-items-center u-justify-center">
        <h4 className="font-alt">{pollTitle} <FontAwesomeIcon className="text-gray-600 text-lg" icon={faPen} /></h4>
        <div className="u-flex u-gap-1">
          <button className="outline text-indigo-800 btn--sm">Poll options <FontAwesomeIcon icon={faGears} /></button>
          <button className="outline text-indigo-800 btn--sm">Save <FontAwesomeIcon icon={faFloppyDisk} /></button>
          <button className="bg-indigo-800 text-white btn--sm">Publish poll <FontAwesomeIcon icon={faPaperPlane} /></button>
        </div>
      </div>
      {/***************/}

      {questions.map((question, index) => {
        const ViewType = QuestionsMap[question.type]
        return <ViewType key={index} index={index} crud={crud} />
      })}


      <AddQuestion create={createQuestion} />

      {/* <NewQuestion /> */}
      {/* <NewIntro /> */}
      {/* <NewSingleChoice /> */}
      {/* <NewMultipleChoice /> */}
      {/* <NewRating /> */}
      {/* <NewRanking /> */}
      {/* <NewList /> */}
      {/* <NewThanks /> */}
      {/* <NewOpen /> */}

      {/* <QuestionsMap[multiple] /> */}

    </>
  );
}

export default NewPoll;
