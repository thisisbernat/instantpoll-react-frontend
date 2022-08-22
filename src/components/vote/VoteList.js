import Swal from "sweetalert2"
import VoteForm from "../containers/VoteForm"

export default function VoteList(props) {
  const { question, nextStep, saveAnswer } = props

  const handleSubmit = (e) => {
    e.preventDefault()

    const answersArray = []
    for (let i = 0; i < e.target.length - 1; i++) {
      answersArray.push((e.target[i]).value)
    }

    const numberOfAnswers = answersArray.reduce((previousValue, currentValue) => {
      if (currentValue !== '') { return previousValue + 1 }
      else { return previousValue }
    }, 0)

    if (question.isCompulsory && (numberOfAnswers < question.listNumber)) {
      Swal.fire('You must provide all the answers')
      return
    }

    if (numberOfAnswers > 0) {
      saveAnswer({ 'list': answersArray })
    }
    
    nextStep()
  }

  return (
    <VoteForm onSubmit={handleSubmit}>
      <h4 className="u-text-center">{question.title}<font className="text-red-700">{question.isCompulsory ? '*' : ''}</font></h4>
      <div className="text-lg u-text-center mx-auto u-flex u-flex-column max-w-90p u-gap-2 py-3">
        {[...Array(question.listNumber)].map((option, i) => {
          return <input key={i} type="text" placeholder={`Answer ${i + 1}`} className="u-center" style={{ maxWidth: "200px" }} />
        })}
      </div>
      <button type="submit" className="bg-teal-600 text-white u-center">Submit answer</button>
    </VoteForm>
  )
}