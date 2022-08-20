import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faToggleOff, faGrip, faPen, faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import {ReactComponent as OpenIcon} from '../../../assets/types/open.svg'
import {ReactComponent as DateIcon} from '../../../assets/types/open/date.svg'
import {ReactComponent as EmailIcon} from '../../../assets/types/open/email.svg'
import {ReactComponent as NumberIcon} from '../../../assets/types/open/number.svg'
import {ReactComponent as PhoneIcon} from '../../../assets/types/open/phone.svg'
import {ReactComponent as SingleLineIcon} from '../../../assets/types/open/single-line.svg'

function NewOpen(props) {
    const { index, CRUD } = props
    const { updateQuestion } = CRUD

    return (
        <div className="bg-white u-round-sm u-shadow-lg px-3 pt-2 pb-1">

            {/* Question header */}
            <div className="u-flex u-flex-column u-justify-center u-relative pb-1">
                <FontAwesomeIcon className="text-gray-600 grip top-grip" icon={faGrip} />
                <div className="u-absolute-md u-left-0 u-right-0">
                    <div className="u-flex u-flex-row-md u-justify-space-between-md u-items-center u-flex-column">
                        <em className="font-bold">Open question</em>
                        <div className="u-flex u-gap-1 text-xs text-gray-800">Not compulsory <FontAwesomeIcon className="text-xl text-gray-800" style={{ cursor: "pointer" }} icon={faToggleOff} /></div>
                    </div>
                </div>
            </div>
            <div className="u-text-break font-alt font-bold py-1 text-yellow-400 u-text-center" style={{ lineHeight: "1.2rem" }}>This is an open question title example, what do you think? <FontAwesomeIcon className="text-gray-600 text-sm" icon={faPen} /></div>
            {/* Question header */}

            {/* Question options */}
            <div className="grid grid-cols-3-md grid-cols-2 u-gap-2 p-1">
                {/* Option */}
                <div className="type-pill bg-gray-100 p-1 u-round-xs u-flex u-flex-column u-items-center u-relative-md" onClick={() => updateQuestion(index, 'type', 'paragraph')}>
                    <font className="text-xs u-absolute-md font-bold">Paragraph</font>
                    <font className="u-absolute-md u-top-1 u-right-0 pr-1-md text-gray-600 tooltip tooltip--bottom" data-tooltip="Let the user enter a paragraph"><FontAwesomeIcon icon={faInfoCircle} /></font>
                    <OpenIcon className="pt-0-md" alt="Single" />
                </div>
                {/* Option */}

                {/* Option */}
                <div className="type-pill bg-gray-100 p-1 u-round-xs u-flex u-flex-column u-items-center u-relative-md" onClick={() => updateQuestion(index, 'type', 'line')}>
                    <font className="text-xs u-absolute-md font-bold">Single line</font>
                    <font className="u-absolute-md u-top-1 u-right-0 pr-1-md text-gray-600 tooltip tooltip--bottom" data-tooltip="Let the user enter a line of text"><FontAwesomeIcon icon={faInfoCircle} /></font>
                    <SingleLineIcon className="pt-1-md" alt="Single" />
                </div>
                {/* Option */}

                {/* Option */}
                <div className="type-pill bg-gray-100 p-1 u-round-xs u-flex u-flex-column u-items-center u-relative-md" onClick={() => updateQuestion(index, 'type', 'date')}>
                    <font className="text-xs u-absolute-md font-bold">Date</font>
                    <font className="u-absolute-md u-top-1 u-right-0 pr-1-md text-gray-600 tooltip tooltip--bottom" data-tooltip="Let the user enter a date"><FontAwesomeIcon icon={faInfoCircle} /></font>
                    <DateIcon className="pt-1-md" alt="Single" />
                </div>
                {/* Option */}

                {/* Option */}
                <div className="type-pill bg-gray-100 p-1 u-round-xs u-flex u-flex-column u-items-center u-relative-md" onClick={() => updateQuestion(index, 'type', 'number')}>
                    <font className="text-xs u-absolute-md font-bold">Number</font>
                    <font className="u-absolute-md u-top-1 u-right-0 pr-1-md text-gray-600 tooltip tooltip--bottom" data-tooltip="Ask something that must be answered with a number"><FontAwesomeIcon icon={faInfoCircle} /></font>
                    <NumberIcon className="pt-1-md" alt="Single" />
                </div>
                {/* Option */}

                {/* Option */}
                <div className="type-pill bg-gray-100 p-1 u-round-xs u-flex u-flex-column u-items-center u-relative-md" onClick={() => updateQuestion(index, 'type', 'email')}>
                    <font className="text-xs u-absolute-md font-bold">Email</font>
                    <font className="u-absolute-md u-top-1 u-right-0 pr-1-md text-gray-600 tooltip tooltip--bottom" data-tooltip="Ask for an email address"><FontAwesomeIcon icon={faInfoCircle} /></font>
                    <EmailIcon className="pt-1-md" alt="Single" />
                </div>
                {/* Option */}

                {/* Option */}
                <div className="type-pill bg-gray-100 p-1 u-round-xs u-flex u-flex-column u-items-center u-relative-md" onClick={() => updateQuestion(index, 'type', 'phone')}>
                    <font className="text-xs u-absolute-md font-bold">Phone number</font>
                    <font className="u-absolute-md u-top-1 u-right-0 pr-1-md text-gray-600 tooltip tooltip--bottom" data-tooltip="Ask for a phone number"><FontAwesomeIcon icon={faInfoCircle} /></font>
                    <PhoneIcon className="pt-1-md" alt="Single" />
                </div>
                {/* Option */}
            </div>
            {/* Question options */}
        </div>
    )
}

export default NewOpen