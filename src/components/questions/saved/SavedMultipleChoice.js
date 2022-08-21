import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquare, faToggleOn, faGrip, faPen } from '@fortawesome/free-solid-svg-icons'

export default function SavedMultipleChoice(props) {
	const { index, CRUD, question } = props
    const { updateQuestion } = CRUD

	const handleEdit = (e) => {
        e.preventDefault()
        updateQuestion(index, 'isSaved', false)
    }

	return (
		<div className="bg-white u-round-sm u-shadow-lg px-3 pt-2 pb-1">
			{/* Question header */}
            <div className="u-flex u-flex-column u-justify-center u-relative pb-1">
                <FontAwesomeIcon className="text-gray-600 grip top-grip" icon={faGrip} />
                <div className="u-absolute-md u-left-0 u-right-0">
                    <div className="u-flex u-flex-row-md u-justify-space-between-md u-items-center u-flex-column">
                        <em className="font-bold">Multiple choice question</em>
                        <div className="u-flex u-gap-1 text-xs text-gray-800 hidden">
                            Compulsory <FontAwesomeIcon className="text-xl text-red-800" style={{ cursor: "pointer" }} icon={faToggleOn} />
                        </div>
                    </div>
                </div>
            </div>
            {/* Question header */}

            {/* Question body */}
            <div className="p-1 px-10-md u-text-center mt-3">
                <div className="mx-24-md p-4 u-round-sm u-shadow-md u-text-center" style={{ border: "solid 1px lightgrey" }}>
                    <h4>{question.title}<font className="text-red-700">{question.isCompulsory ? '*' : ''}</font></h4>
                    <div className="u-text-left" style={{ display: "inline-block" }}>
                        {question.options.map((option, index) => {
                            return <div><FontAwesomeIcon className="text-teal-600" icon={faSquare} key={index}/> {option}</div>
                        })}
                    </div>
                </div>
            </div>
            <button onClick={handleEdit} className="bg-teal-600 text-white btn--sm u-pull-right mr-1">Edit  <FontAwesomeIcon icon={faPen} /></button>
            {/* Question body */}

		</div>
	)
}