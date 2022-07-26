import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faToggleOff, faGrip, faPen, faStar } from '@fortawesome/free-solid-svg-icons'

function NewRating(props) {
    return (
        <div className="bg-white u-round-sm u-shadow-lg px-3 pt-2 pb-1">
            {/* Question header */}
            <div className="u-flex u-flex-column u-justify-center u-relative pb-1">
                <FontAwesomeIcon className="text-gray-600 grip top-grip" icon={faGrip} />
                <div className="u-absolute-md u-left-0 u-right-0">
                    <div className="u-flex u-flex-row-md u-justify-space-between-md u-items-center u-flex-column">
                        <em className="font-bold">Rating question</em>
                        <div className="u-flex u-gap-1 text-xs text-gray-800">Not compulsory <FontAwesomeIcon className="text-xl text-gray-800" style={{ cursor: "pointer" }} icon={faToggleOff} /></div>
                    </div>
                </div>
            </div>
            <div className="u-text-break font-alt font-bold py-1 text-yellow-400 u-text-center" style={{ lineHeight: "1.2rem" }}>This is a rating question title example, what do you think? <FontAwesomeIcon className="text-gray-600 text-sm" icon={faPen} /></div>
            {/* Question header */}
            {/* Question body */}
            <h5 className="u-center text-gray-300 mt-1"><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /></h5>
            <button className="text-white bg-indigo-900 btn--sm u-pull-right mr-1">Save</button>
            {/* Question body */}
        </div>
    )
}

export default NewRating;