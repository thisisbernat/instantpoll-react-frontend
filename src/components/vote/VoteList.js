import { useState } from "react"
import Swal from "sweetalert2"
import VoteForm from "../containers/VoteForm"

export default function VoteList(props) {
  const { question, nextStep, saveAnswer } = props
  const [answer, setAnswer] = useState(null)

  const handleFormChange = (e) => {
    setAnswer(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (question.isCompulsory && !answer) {
      Swal.fire('Answering to this question is compulsory')
      return
    }
    if (answer) {
      saveAnswer({ 'list': answer })
      setAnswer(null)
    } else if (!answer) {
      nextStep()
    }
  }

  return (
    <VoteForm onSubmit={handleSubmit}>
      <h4 className="u-text-center">{question.title}<font className="text-red-700">{question.isCompulsory ? '*' : ''}</font></h4>
      <div className="text-lg u-text-center mx-auto u-flex u-flex-column max-w-90p u-gap-2 py-3">
        {[...Array(question.listNumber)].map((option, i) => {
          return <input key={i} type="text" placeholder={`Answer ${i + 1}`} className="u-center" style={{ maxWidth: "200px" }} onChange={e => handleFormChange(e)} />
        })}
      </div>
      <button type="submit" className="bg-teal-600 text-white u-center">Submit answer</button>
    </VoteForm>
  )
}