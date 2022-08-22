import Swal from "sweetalert2"
import VoteForm from "../containers/VoteForm"

export default function VoteMultipleChoice(props) {
    const { question, nextStep, saveAnswer } = props

    const handleSubmit = (e) => {
        e.preventDefault()
     
        const answersArray = []
        for (let i = 0; i < e.target.length - 1; i++) {
            if ((e.target[i]).checked) {
                answersArray.push((e.target[i]).value)
            }
        }

        const numberOfAnswers = answersArray.reduce((previousValue, currentValue) => {
            if (currentValue !== '') { return previousValue + 1 }
            else { return previousValue }
        }, 0)

        if (question.isCompulsory && (numberOfAnswers <= 0)) {
            Swal.fire('You must provide an answers')
            return
        }

        if (numberOfAnswers > 0) {
            saveAnswer({ 'choices': answersArray })
        }

        nextStep()
    }

    return (
        <VoteForm onSubmit={handleSubmit}>
            <h4 className="u-text-center">{question.title}<font className="text-red-700">{question.isCompulsory ? '*' : ''}</font></h4>
            <div className="text-lg u-center mb-1">
                <ul className="no-bullets">
                    {question.options.map((option, optionIndex) => {
                        return <li key={`${option}-${optionIndex}`}><label className="pointer"><input type="checkbox" name="option" value={option} /> {option}</label></li>
                    })}
                </ul>
            </div>
            <button type="submit" className="bg-teal-600 text-white u-center">Submit answer</button>
        </VoteForm>
    )
}