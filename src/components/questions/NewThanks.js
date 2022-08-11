import { useState } from "react"
import Swal from 'sweetalert2'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faToggleOff, faGrip, faPen, faTrashCan } from '@fortawesome/free-solid-svg-icons'


function NewThanks(props) {
    const { index, CRUD, question } = props
    const savedTitle = question.title
    const savedMessage = question.message
    const savedButtonText = question.buttonText
    const { updateQuestion, deleteQuestion } = CRUD

    const [title, setTitle] = useState(savedTitle)
    const [showPen, setShowPen] = useState(false)
    const [message, setMessage] = useState(savedMessage)
    const [buttonText, setButtonText] = useState(savedButtonText)

    const handleMessage = (e) => setMessage(e.target.value)
    const handleButtonText = (e) => setButtonText(e.target.value)

    const saveQuestion = (e) => {
        e.preventDefault()
        if (title === '') {
            Swal.fire({
                title: 'Title missing!',
                text: 'Please provide a question title before saving it.',
                customClass: {
                  confirmButton: 'bg-teal-600 text-white',
                }
              })
            return
        }
        if (message === undefined) {
            Swal.fire({
                title: 'Message missing!',
                text: 'Please provide a question message before saving it.',
                customClass: {
                  confirmButton: 'bg-teal-600 text-white',
                }
              })
            return
        }
        if (buttonText === undefined) {
            Swal.fire({
                title: 'Button text missing!',
                text: 'Please provide the button text before saving it.',
                customClass: {
                  confirmButton: 'bg-teal-600 text-white',
                }
              })
            return
        }
        updateQuestion(index, 'title', title)
        updateQuestion(index, 'message', message)
        updateQuestion(index, 'buttonText', buttonText)
        updateQuestion(index, 'isCompulsory', true)
        updateQuestion(index, 'isSaved', true)
    }

    const saveTitle = () => {
        let confAlert = {
            title: 'Edit title',
            input: 'text',
            inputValue: title,
            showCloseButton: true,
            customClass: {
                confirmButton: 'bg-teal-600 text-white',
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
            {/* Question header */}
            <div className="u-flex u-flex-column u-justify-center u-relative pb-1">
                <FontAwesomeIcon className="text-gray-600 grip top-grip" icon={faGrip} />
                <div className="u-absolute-md u-left-0 u-right-0">
                    <div className="u-flex u-flex-row-md u-justify-space-between-md u-items-center u-flex-column">
                        <em className="font-bold">Thank you note</em>
                        <div className="u-flex u-gap-1 text-xs text-gray-800 hidden">Not compulsory <FontAwesomeIcon className="text-xl text-gray-800" style={{ cursor: "pointer" }} icon={faToggleOff} /></div>
                    </div>
                </div>
            </div>
            <div className="u-text-break font-alt font-bold py-1 text-yellow-400 u-text-center" style={{ lineHeight: "1.2rem" }}>
                <div onClick={() => saveTitle()} onMouseEnter={() => setShowPen(true)} onMouseLeave={() => setShowPen(false)} className="click-area">
                    <font className="dotted">{title ? title : 'Edit your title here!'}</font> {<FontAwesomeIcon className={showPen ? "text-gray-600 text-sm" : "text-gray-600 text-sm hidden"} icon={faPen} />}
                </div>
            </div>
            {/* Question header */}

            {/* Question body */}
            <form onSubmit={saveQuestion}>
                <div className="p-1 px-10-md">
                    <label className="mb-0 text-sm">Write down a thank you message for the user and customize the confirmation button</label>
                    <textarea value={message} onChange={handleMessage} placeholder="Thank you note shown to the user"></textarea>
                    <div className="u-flex u-justify-space-between">
                        <div className="u-flex u-items-baseline u-flex-grow-1">
                            <input className="mr-1 input--sm max-w-50p" type="text" value={buttonText} onChange={handleButtonText} placeholder="Custom button text" />
                            <div style={{ cursor: "default" }} className="btn bg-gray-400 btn--sm tooltip tooltip--bottom" data-tooltip="Sample button">{buttonText ? buttonText : 'Sample'}</div>
                        </div>
                    </div>
                </div>
                <button type="submit" className="text-white bg-teal-600 btn--sm u-pull-right mr-1">Save</button>
            </form>
            <button className="outline btn-primary btn--sm u-pull-right mr-1" onClick={() => deleteQuestion(index)}><FontAwesomeIcon icon={faTrashCan} /></button>
            {/* Question body */}

        </div>
    )
}

export default NewThanks