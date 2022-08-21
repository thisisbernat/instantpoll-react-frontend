import { useState } from "react"
import Swal from "sweetalert2"
import VoteForm from "../containers/VoteForm"

export default function VoteSingleChoice(props) {
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
            saveAnswer({ 'choices': answer })
            setAnswer(null)
        } else if (!answer) {
            nextStep()
        }
    }

    return (
        <VoteForm onSubmit={handleSubmit}>
            <h4 className="u-text-center">{question.title}<font className="text-red-700">{question.isCompulsory ? '*' : ''}</font></h4>
            <div className="text-lg u-center mb-1">
                <ul className="no-bullets">
                    {question.options.map((option, optionIndex) => {
                        return <li key={`${option}-${optionIndex}`}><label className="pointer"><input type="radio" name="option" value={option} onChange={e => handleFormChange(e)} /> {option}</label></li>
                    })}
                </ul>
            </div>
            <button type="submit" className="bg-teal-600 text-white u-center">Submit answer</button>
        </VoteForm>
    )
}