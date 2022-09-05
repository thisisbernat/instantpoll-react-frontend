import { useState } from "react";
import BarChart from "../charts/BarChart";
import {UserData} from '../../pages/Data.js'

export default function ResultChart() {
    const [userData, setUserData] = useState({
        labels: UserData.map(data => data.option),
        datasets: [{
            label: "Votes",
            data: UserData.map(data => data.votes),
            backgroundColor: ['#FFC273'],
            maxBarThickness: 100
        }]
    })
    return (
        <div className="bg-white u-round-sm u-shadow-lg py-3 px-6">
            <h6 className="mb-0">This is the question</h6>
            <em>Category</em>
            <div className="p-2">
                <BarChart chartData={userData} />
            </div>
        </div>
    )
}








