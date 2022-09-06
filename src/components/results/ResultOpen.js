import { useState, useEffect } from "react"
import { getAllAnswersFromQuestionsService } from '../../services/questions.services.js'

const TypesMap = {
    paragraph: 'Open question (Paragraph)',
    line: 'Open question (Single line)',
    date: 'Open question (Date)',
    email: 'Open question (Email)',
    phone: 'Open question (Phone)',
    number: 'Open question (Number)',
    list: 'Open question (List)'
  }

export default function ResultOpen({ question: {_id: questionId, title, type} }) {
    const [answers, setAnswers] = useState(0)

    useEffect(() => {
        getNumberOfAnswers(questionId)
    }, [questionId])

    const SpecificType = () => TypesMap[type]
    

    const getNumberOfAnswers = async (questionId) => {
        const answers = await getAllAnswersFromQuestionsService(questionId)
        setAnswers(answers.data.length)
    }

    return (
        <div className="bg-white u-round-sm u-shadow-lg py-3 px-6">
            <h6 className="mb-0">{title}</h6>
            <em>{SpecificType()}</em>
            <div className="u-flex u-flex-column u-items-center u-text-center text-gray-900 pt-1">
                <h6 className="mb-0">You've got <ins className="text-teal-600">{answers} answer{answers > 1 && 's'}</ins> for this question</h6>
                <em>Export poll results to review them</em>              
            </div>
        </div>
    )
}








