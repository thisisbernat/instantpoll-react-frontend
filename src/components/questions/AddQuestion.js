import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons'

function AddQuestion(props) {
    const { create } = props
    let newQuestion = {
        title: 'New question',
        type: 'tbd'
    }
    return (
        <div className="bg-white u-round-xs u-shadow-lg px-3 py-2">
            <div className="u-flex u-items-center u-gap-2">
                    <FontAwesomeIcon onClick={() => create(newQuestion)} className="text-teal-600 pointer" style={{ fontSize: "2.5rem"}} icon={faCirclePlus} />
                    <font onClick={() => create(newQuestion)} className="font-bold pointer">Add a new question</font>
            </div>
        </div>
    )
}

export default AddQuestion;