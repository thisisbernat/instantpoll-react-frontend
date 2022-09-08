import { useState } from "react"
import Swal from 'sweetalert2'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faToggleOn, faToggleOff, faGrip, faPen, faTrashCan } from '@fortawesome/free-solid-svg-icons'

export default function NewList(props) {
    const { index, CRUD, question } = props
    const savedTitle = question.title
    const savedListNumber = question.listNumber
    const savedIsCompulsory = question.isCompulsory
    const { updateQuestion, deleteQuestion } = CRUD

    const [title, setTitle] = useState(savedTitle)
    const [listNumber, setListNumber] = useState(savedListNumber)
    const [showPen, setShowPen] = useState(false)
    const [isCompulsory, setCompulsory] = useState(savedIsCompulsory)

    const handleListNumber = (e) => setListNumber(e.target.value)

    const saveQuestion = (e) => {
        e.preventDefault()

        if (title === '') {
            Swal.fire({
                title: 'Question title missing!',
                text: 'Please edit the question title before saving it.',
                customClass: {
                    confirmButton: 'bg-teal-600 text-white',
                }
            })
            return
        }

        updateQuestion(index, 'listNumber', listNumber)
        updateQuestion(index, 'title', title)
        updateQuestion(index, 'isCompulsory', isCompulsory)
        updateQuestion(index, 'isSaved', true)
    }

    const saveTitle = () => {
        let confAlert = {
            title: 'Question title',
            text: 'Please, enter a question title here',
            input: 'text',
            inputValue: title,
            customClass: {
                confirmButton: 'bg-teal-600 text-white btn--sm',
                input: 'max-w-90p mx-auto'
            }
        }
        Swal.fire(confAlert)
            .then(response => {
                if (response.isConfirmed) {
                    if (response.value) {
                        setTitle(response.value)
                    }

                }
            })
            .catch(err => console.log(err))
    }

    return (
        <div className="bg-white u-round-sm u-shadow-lg px-3 pt-2 pb-1">
            <div className="u-flex u-flex-column u-justify-center u-relative pb-1">
                <FontAwesomeIcon className="text-gray-600 grip top-grip" icon={faGrip} />
                <div className="u-absolute-md u-left-0 u-right-0">
                    <div className="u-flex u-flex-row-md u-justify-space-between-md u-items-center u-flex-column">
                        <em className="font-bold">List question</em>
                        <div className="u-flex u-gap-1 text-xs text-gray-800">
                            {isCompulsory ?
                                (
                                    <>Compulsory <FontAwesomeIcon className="text-xl text-red-800" onClick={() => setCompulsory(!isCompulsory)} style={{ cursor: "pointer" }} icon={faToggleOn} /></>
                                ) : (
                                    <>Not compulsory <FontAwesomeIcon className="text-xl text-gray-800" onClick={() => setCompulsory(!isCompulsory)} style={{ cursor: "pointer" }} icon={faToggleOff} /></>
                                )}
                        </div>
                    </div>
                </div>
            </div>
            <div className="u-text-break font-alt font-bold py-1 text-yellow-400 u-text-center" style={{ lineHeight: "1.2rem" }}>
                <div onClick={() => saveTitle()} onMouseEnter={() => setShowPen(true)} onMouseLeave={() => setShowPen(false)} className="click-area">
                    <font className="dotted">{title ? `${title}${isCompulsory ? '*' : ''}` : <>Edit your title here!{isCompulsory && '*'}</>}</font> {<FontAwesomeIcon className={showPen ? "text-gray-600 text-sm" : "text-gray-600 text-sm hidden"} icon={faPen} />}
                </div>
            </div>
            <form onSubmit={saveQuestion}>
                <div className="u-flex u-flex-column u-items-center">
                    <label className="mb-0 text-sm">Set how many options the user should enter</label>
                    <input type="number" value={listNumber} onChange={handleListNumber} placeholder="3" style={{ maxWidth: "75px" }} />
                </div>
                <button className="text-white bg-indigo-900 btn--sm u-pull-right mr-1">Save</button>
            </form>
            <button className="outline text-gray-700 btn--sm u-pull-right mr-1" onClick={() => deleteQuestion(index)}><FontAwesomeIcon icon={faTrashCan} /></button>
        </div>
    )
}