import { useState } from "react"

function VoteSingleChoice(props) {
    const { question, next, saveAnswer } = props
    const [answer, setAnswer] = useState(null)

    const handleFormChange = (index, event) => {
        setAnswer(event.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        next()
        console.log(answer)
        console.log(e.target)
        
    }

    return (
        <form onSubmit={handleSubmit} className="bg-white u-round-sm u-shadow-lg px-2 py-3 grid-c-4-md">
            <h4 className="u-text-center">{question.title}</h4>
            <div className="text-lg u-center mb-1">
                <ul className="no-bullets">
                    {question.options.map((option, optionIndex) => {
                        return <li key={optionIndex}><label className="pointer"><input type="radio" name="option" value={option} onChange={event => handleFormChange(optionIndex, event)}/> {option}</label></li>
                    })}
                </ul>
            </div>
            <button type="submit" className="bg-teal-600 text-white u-center">Submit answer</button>
        </form>
    )
}

export default VoteSingleChoice;