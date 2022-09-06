import { useState, useEffect } from "react"
import BarChart from "../charts/BarChart"
import { getGraphFromQuestionService } from '../../services/questions.services.js'

export default function ResultChart({ question: {_id: questionId, title, type} }) {
    const [chartData, setChartData] = useState({
        labels: [],
        datasets: [{
            label: "Votes",
            data: [],
            backgroundColor: ['#FFC273'],
            maxBarThickness: 100
        }]
    })

    useEffect(() => {
        getGraphData(questionId)
    }, [questionId])

    const getGraphData = async (questionId) => {
        const answer = await getGraphFromQuestionService(questionId)
        setChartData({
            labels: answer.data.labels,
            datasets: [{
                label: "Votes",
                data: answer.data.data,
                backgroundColor: ['#FFC273'],
                maxBarThickness: 100
            }]
        })
    }

    return (
        <div className="bg-white u-round-sm u-shadow-lg py-3 px-6">
            <h6 className="mb-0">{title}</h6>
            <em>{type === 'single' && 'Single choice'}{type === 'multiple' && 'Multiple choice'}</em>
            <div className="p-2">
                <BarChart chartData={chartData} />
            </div>
        </div>
    )
}








