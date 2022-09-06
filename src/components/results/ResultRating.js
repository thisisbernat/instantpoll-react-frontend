import { useState, useEffect } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { getAllAnswersFromQuestionsService } from '../../services/questions.services.js'

export default function ResultRating({ question: {_id: questionId, title} }) {
    const [rating, setRating] = useState(0)

    useEffect(() => {
        getAnswers(questionId)
    }, [questionId])

    const getAnswers = async (questionId) => {
        const answers = await getAllAnswersFromQuestionsService(questionId)
        const average = Math.round((answers.data.reduce((prev, current) => prev + current.rating, 0)) / answers.data.length * 10) / 10
        setRating(average)
    }

    return (
        <div className="bg-white u-round-sm u-shadow-lg pt-3 pb-2 px-6">
            <h6 className="mb-0">{title}</h6>
            <em>Rating</em>
            <div className="u-center">
                <h3 className="u-absolute u-z-1 text-white mt-2">{rating}</h3>
                <font className="u-z-0 text-yellow-400" style={{ fontSize: "6rem" }}><FontAwesomeIcon icon={faStar} /></font>
            </div>
        </div>
    )
}








