import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import Swal from "sweetalert2"
import VoteForm from "../containers/VoteForm"


export default function VoteRating(props) {
    const { question, nextStep, saveAnswer } = props
    const [rating, setRating] = useState(null)
    const [hover, setHover] = useState(null)

    const handleSubmit = (e) => {
        e.preventDefault()
        if (question.isCompulsory && !rating) {
            Swal.fire('Answering to this question is compulsory')
            return
        }
        if (rating) {
            saveAnswer({ 'rating': rating })
            setRating(null)
        } else if (!rating) {
            nextStep()
        }
    }
    
    return (
        <VoteForm onSubmit={handleSubmit}>
            <h4 className="u-text-center">{question.title}<font className="text-red-700">{question.isCompulsory ? '*' : ''}</font></h4>
            <div className="text-lg u-center mb-2 h-60p-md">
                {[...Array(5)].map((star, i) => {
                    const ratingValue = i + 1
                    return (
                        <label style={{ margin: "0" }} key={`star-${ratingValue}`}>
                            <input
                                type="radio"
                                name="rating"
                                style={{ display: "none" }}
                                value={ratingValue} onClick={() => setRating(ratingValue)}
                            />
                            <FontAwesomeIcon
                                icon={faStar}
                                style={{ fontSize: "3rem" }}
                                className="pointer"
                                color={ratingValue <= (hover || rating) ? "#E3A008" : "#495057"}
                                onMouseEnter={() => setHover(ratingValue)}
                                onMouseLeave={() => setHover(null)}
                            />
                        </label>
                    )
                })}
            </div>
            <button type="submit" className="bg-teal-600 text-white u-center">Submit answer</button>
        </VoteForm>
    )
}