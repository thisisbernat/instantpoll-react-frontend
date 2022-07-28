import { useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faToggleOn, faCircleDot, faGrip, faPen } from '@fortawesome/free-solid-svg-icons'

function NewSigleChoice(props) {
    const { index, CRUD, question } = props
    const savedTitle = question.title
    const savedOptions = question.options
    const savedIsCompulsory = question.isCompulsory
    const { updateQuestion } = CRUD

    const [title] = useState(savedTitle)
    const [isCompulsory, setCompulsory] = useState(savedIsCompulsory)
    const [options] = useState(savedOptions)

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
                        <em className="font-bold">Single choice question</em>
                        <div className="u-flex u-gap-1 text-xs text-gray-800 hidden">
                            Compulsory <FontAwesomeIcon className="text-xl text-red-800" onClick={() => setCompulsory(!isCompulsory)} style={{ cursor: "pointer" }} icon={faToggleOn} />
                        </div>
                    </div>
                </div>
            </div>
            {/* Question header */}

            {/* Question body */}
            <div className="p-1 px-10-md u-text-center mt-3">
                <div className="mx-24-md p-4 u-round-sm u-shadow-md u-text-center" style={{ border: "solid 1px lightgrey" }}>
                    <h4>{title}<font className="text-red-700">{isCompulsory ? '*' : ''}</font></h4>
                    <div className="u-text-left" style={{ display: "inline-block" }}>
                        {options.map((option, index) => {
                            return <div><FontAwesomeIcon className="text-teal-600" icon={faCircleDot} key={index}/> {option}</div>
                        })}
                    </div>
                </div>
            </div>
            <button onClick={handleEdit} className="text-white bg-indigo-900 btn--sm u-pull-right mr-1">Edit  <FontAwesomeIcon icon={faPen} /></button>

            {/* Question body */}
        </div>
    )
}

export default NewSigleChoice