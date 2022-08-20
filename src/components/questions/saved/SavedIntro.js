import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faToggleOff, faGrip, faPen } from '@fortawesome/free-solid-svg-icons'

function SavedIntro(props) {
    const { index, CRUD, question } = props
    const { title, message, buttonText } = question
    const { updateQuestion } = CRUD


    const handleEdit = (e) => {
        e.preventDefault()
        updateQuestion(index, 'isSaved', false)
    }


    return (
        <div className="bg-white u-round-sm u-shadow-lg px-3 pt-2 pb-1">
            {/* Question header */}
            <div className="u-flex u-flex-column u-justify-center u-relative">
                <FontAwesomeIcon className="text-gray-600 grip top-grip" icon={faGrip} />
                <div className="u-absolute-md u-left-0 u-right-0">
                    <div className="u-flex u-flex-row-md u-justify-space-between-md u-items-center u-flex-column">
                        <em className="font-bold">Introduction message</em>
                        <div className="u-flex u-gap-1 text-xs text-gray-800 hidden">Not compulsory <FontAwesomeIcon className="text-xl text-gray-800" style={{ cursor: "pointer" }} icon={faToggleOff} /></div>
                    </div>
                </div>
            </div>
            {/* Question header */}

            {/* Question body */}
            <div className="p-1 px-10-md u-text-center mt-3">
                <div className="mx-24-md p-4 u-round-sm u-shadow-md" style={{border:"solid 1px lightgrey"}}>
                <h4>{title}</h4>
                <p className="mt-4">{message}</p>
                <button style={{ cursor: "default" }} className="btn bg-teal-300 text-white btn--sm mt-2">{buttonText}</button>
                </div>
            </div>
            <button onClick={handleEdit} className="bg-teal-600 text-white btn--sm u-pull-right mr-1">Edit <FontAwesomeIcon icon={faPen} /></button>
            {/* Question body */}

        </div>
    )
}

export default SavedIntro