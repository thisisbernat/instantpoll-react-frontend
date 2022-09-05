import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

export default function ResultOpen() {
    return (
        <div className="bg-white u-round-sm u-shadow-lg py-3 px-6">
            <h6 className="mb-0">This is the question?</h6>
            <em>Category</em>
            <div className="u-flex u-flex-column u-items-center u-text-center text-gray-900">
                <h6 className="mb-0">You've got <ins>3 answers</ins> for this question</h6>
                <em>Export poll results to review them</em>              
            </div>
        </div>
    )
}








