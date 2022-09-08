import { faGrip, faPen, faToggleOff, faToggleOn, faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Swal from 'sweetalert2'
import { useState } from "react"

export default function NewDate(props) {
  const { index, CRUD: {updateQuestion, deleteQuestion}, question } = props
  const [title, setTitle] = useState(question.title)
  const [showPen, setShowPen] = useState(false)
  const [isCompulsory, setCompulsory] = useState(question.isCompulsory)

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
    updateQuestion(index, 'title', title)
    updateQuestion(index, 'isCompulsory', isCompulsory)
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
      <div className="u-flex u-flex-column u-justify-center u-relative pb-1">
        <FontAwesomeIcon className="text-gray-600 grip top-grip" icon={faGrip} />
        <div className="u-absolute-md u-left-0 u-right-0">
          <div className="u-flex u-flex-row-md u-justify-space-between-md u-items-center u-flex-column">
            <em className="font-bold">Open question (date)</em>
            <div className="u-flex u-gap-1 text-xs text-gray-800">
              {isCompulsory ?
                (
                  <>Compulsory question <FontAwesomeIcon className="text-xl text-red-800" onClick={() => setCompulsory(!isCompulsory)} style={{ cursor: "pointer" }} icon={faToggleOn} /></>
                ) : (
                  <>Optional question <FontAwesomeIcon className="text-xl text-gray-800" onClick={() => setCompulsory(!isCompulsory)} style={{ cursor: "pointer" }} icon={faToggleOff} /></>
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
      <input disabled type="date" className="u-center" style={{ maxWidth: "180px", cursor: "default" }} />
      <form onSubmit={saveQuestion}>
        <button type="submit" className="text-white bg-teal-600 btn--sm u-pull-right mr-1">Save</button>
      </form>
      <button className="outline text-gray-700 btn--sm u-pull-right mr-1" onClick={() => deleteQuestion(index)}><FontAwesomeIcon icon={faTrashCan} /></button>
    </div>
  )
}