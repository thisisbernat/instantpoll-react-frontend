import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

export default function VoteRating(props) {
    return (
        <div className="bg-white u-round-sm u-shadow-lg px-2 py-3 grid-c-4-md">
            <h4 className="u-text-center">What's your favourite language?</h4>
            <div className="text-lg u-center mb-1">
                <h3><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /></h3>
            </div>
            <button className="bg-green-600 text-white u-center">Submit</button>
        </div>
    )
}