import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

export default function ResultRating() {
    return (
        <div className="bg-white u-round-sm u-shadow-lg pt-3 pb-2 px-6">
            <h6 className="mb-0">This is the question?</h6>
            <em>Category</em>
            <div className="u-center">
                <h3 className="u-absolute u-z-1 text-white mt-2">3.6</h3>
                <font className="u-z-0 text-yellow-400" style={{fontSize: "6rem"}}><FontAwesomeIcon icon={faStar} /></font>
            </div>
        </div>
    )
}








