import { useState } from "react"
import Swal from 'sweetalert2'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faToggleOff, faToggleOn, faCirclePlus, faGrip, faPen, faSquare, faTrashCan } from '@fortawesome/free-solid-svg-icons'

export default function NewMultipleChoice(props) {
	const { index, CRUD, question } = props
    const savedTitle = question.title
    const savedOptions = question.options
    const savedIsCompulsory = question.isCompulsory
    const { updateQuestion, deleteQuestion } = CRUD

    const [title, setTitle] = useState(savedTitle)
    const [showPen, setShowPen] = useState(false)
    const [isCompulsory, setCompulsory] = useState(savedIsCompulsory)
    const [options, setOptions] = useState(savedOptions)

	const createOption = () => {
        setOptions([...options, ''])
    }

    const deleteOption = (index) => {
        if (options.length > 2) {
            let optionsCopy = [...options]
            optionsCopy.splice(index, 1)
            setOptions(optionsCopy)
        }
    }

    const handleFormChange = (index, event) => {
        let optionsCopy = [...options]
        optionsCopy[index] = event.target.value
        setOptions(optionsCopy)
    }

	const saveQuestion = (e) => {
        e.preventDefault()
        const optionsCopy = options.filter(option => option !== '')

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
        if (optionsCopy.length < 2) {
            Swal.fire({
                title: 'Missing options!',
                text: 'Please provide at least two correct options.',
                customClass: {
                  confirmButton: 'bg-teal-600 text-white',
                }
              })
            return
        }
        
        updateQuestion(index, 'options', optionsCopy)
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
			{/* Question header */}
			<div className="u-flex u-flex-column u-justify-center u-relative pb-1">
				<FontAwesomeIcon className="text-gray-600 grip top-grip" icon={faGrip} />
				<div className="u-absolute-md u-left-0 u-right-0">
					<div className="u-flex u-flex-row-md u-justify-space-between-md u-items-center u-flex-column">
						<em className="font-bold">Multiple choice question</em>
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
			{/* Question header */}

			{/* Question body */}
			<form onSubmit={saveQuestion}>
                <div className="u-flex u-flex-column u-gap-1 mx-auto">
                    <div className="mx-auto">
                        <label className="pl-3 mb-0 text-sm">Add all the options here!</label>
                        {options.map((option, optionIndex) => {
                            return <div className="u-flex u-items-center u-gap-1 pb-1" key={optionIndex}><FontAwesomeIcon icon={faSquare} className="text-teal-600" /> <input type="text" className="input--sm" placeholder={'Option ' + (optionIndex + 1)} value={option} onChange={event => handleFormChange(optionIndex, event)} /> <FontAwesomeIcon onClick={() => deleteOption(optionIndex)} className="text-gray-600 text-lg pointer" icon={faTrashCan} title="Remove option" /></div>
                        })}
                        <div className="u-flex u-items-center u-gap-1 pointer" onClick={createOption}><FontAwesomeIcon icon={faSquare} className="hidden" /> <div className="btn u-flex u-items-center u-justify-center u-flex-grow-1 text-lg bg-teal-600 dark-teal-btn text-gray-000 tooltip tooltip--bottom" data-tooltip="Add extra option"><FontAwesomeIcon icon={faCirclePlus} /></div> <FontAwesomeIcon className="text-gray-600 text-lg hidden" icon={faTrashCan} /></div>
                    </div>
                </div>
                <button type="submit" className="text-white bg-teal-600 btn--sm u-pull-right mr-1">Save</button>
            </form>
            <button className="outline btn-primary btn--sm u-pull-right mr-1" onClick={() => deleteQuestion(index)}><FontAwesomeIcon icon={faTrashCan} /></button>
			{/* Question body */}

		</div>
	)
}