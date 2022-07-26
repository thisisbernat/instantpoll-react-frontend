import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faToggleOff, faGrip, faPen } from '@fortawesome/free-solid-svg-icons'

function NewThanks(props) {
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
            <div className="u-text-break font-alt font-bold py-1 text-yellow-400 u-text-center hidden" style={{ lineHeight: "1.2rem" }}>This is an open question title example, what do you think? <FontAwesomeIcon className="text-gray-600 text-sm" icon={faPen} /></div>
            {/* Question header */}

            {/* Question body */}
            <form className="p-1 px-10-md">
                <label className="mb-0 text-sm">Write down a nice thank you note for the user and customize the confirmation button</label>
                <textarea placeholder="Introduction text shown to the user"></textarea>
                <div className="u-flex u-justify-space-between">
                    <div className="u-flex u-items-baseline u-flex-grow-1">
                        <input className="mr-1 input--sm max-w-50p" type="text" placeholder="Custom button text" />
                        <div style={{ cursor: "default" }} className="btn bg-gray-400 btn--sm tooltip tooltip--bottom" data-tooltip="Sample button">Sample</div>
                    </div>
                </div>
            </form>
            <button className="text-white bg-indigo-900 btn--sm u-pull-right mr-1">Save</button>
            {/* Question body */}
        </div>
    )
}

export default NewThanks;