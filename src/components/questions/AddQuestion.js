import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons'

export default function AddQuestion(props) {
    const { createQuestion, newQuestion } = props

    return (
        <div className="bg-white u-round-xs u-shadow-lg px-3 py-2 pointer" onClick={() => createQuestion(newQuestion)} >
            <div className="u-flex u-items-center u-gap-2">
                    <FontAwesomeIcon onClick={() => createQuestion(newQuestion)} className="text-teal-600 pointer" style={{ fontSize: "2.5rem"}} icon={faCirclePlus} />
                    <font className="font-bold">Add a new question</font>
            </div>
        </div>
    )
}