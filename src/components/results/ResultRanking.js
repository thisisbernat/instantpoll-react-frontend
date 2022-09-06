import { useState, useEffect } from "react"
import { getAllAnswersFromQuestionsService } from '../../services/questions.services.js'

export default function ResultRanking({ question: {_id: questionId, title} }) {
    const [ranking, setRanking] = useState([])

    useEffect(() => {
        getAnswers(questionId)
    }, [questionId])

    const getAnswers = async (questionId) => {
        const answers = await getAllAnswersFromQuestionsService(questionId)
        const optionsQty = answers.data[0].ranking.length
        const options = {}
        answers.data[0].ranking.forEach(element => options[element] = 0)
        answers.data.forEach(answer => {
            answer.ranking.forEach((choice, index) => {
                options[choice] = options[choice] + (optionsQty - index)
            })
        })
        const rankingArray = Object.entries(options)
            .sort(([, a], [, b]) => b - a)
            .map(element => element[0])
        setRanking(rankingArray)
    }

    return (
        <div className="bg-white u-round-sm u-shadow-lg py-3 px-6">
            <h6 className="mb-0">{title}</h6>
            <em>Ranking</em>
            <div className="u-flex u-flex-column u-items-center u-gap-2">
                {ranking.map((option, index) => {
                    return (
                        <div key={index} className="u-flex u-gap-1">
                            <font className="text-teal-400 text-xl ranking-num">{index+1}</font>
                            <div className="bg-teal-400 text-white u-round-xs u-shadow-sm u-center" style={{ minWidth: "200px" }}><span className="font-black">{option}</span></div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}








