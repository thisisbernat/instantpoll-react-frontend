import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faToggleOff, faGrip, faPen } from '@fortawesome/free-solid-svg-icons'

export default function SavedList(props) {
    const { index, CRUD: { updateQuestion }, question: { title, isCompulsory, listNumber } } = props

    const handleEdit = (e) => {
        e.preventDefault()
        updateQuestion(index, 'isSaved', false)
    }

    return (
        <div className="bg-white u-round-sm u-shadow-lg px-3 pt-2 pb-1">
            <div className="u-flex u-flex-column u-justify-center u-relative pb-1">
                <FontAwesomeIcon className="text-gray-600 grip top-grip" icon={faGrip} />
                <div className="u-absolute-md u-left-0 u-right-0">
                    <div className="u-flex u-flex-row-md u-justify-space-between-md u-items-center u-flex-column">
                        <em className="font-bold">List question</em>
                        <div className="u-flex u-gap-1 text-xs text-gray-800 hidden">Not compulsory <FontAwesomeIcon className="text-xl text-gray-800" style={{ cursor: "pointer" }} icon={faToggleOff} /></div>
                    </div>
                </div>
            </div>
            <div className="p-1 px-10-md u-text-center mt-3">
                <div className="mx-24-md p-4 u-round-sm u-shadow-md" style={{ border: "solid 1px lightgrey" }}>
                    <h4>{title}<font className="text-red-700">{isCompulsory ? '*' : ''}</font></h4>
                    <div className="text-lg u-text-center mx-auto u-flex u-flex-column max-w-90p u-gap-2 py-2">
                        {[...Array(Number(listNumber))].map((field, i) => {
                            return <input disabled key={i} type="text" placeholder={`Answer ${i + 1}`} className="u-center input--xs" style={{ maxWidth: "200px", cursor: "default" }} />
                        })}
                    </div>
                </div>
            </div>
            <button onClick={handleEdit} className="bg-teal-600 text-white btn--sm u-pull-right mr-1">Edit <FontAwesomeIcon icon={faPen} /></button>
        </div>
    )
}