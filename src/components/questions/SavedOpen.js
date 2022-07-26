import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faToggleOff, faGrip, faPen, faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import openIcon from '../../assets/types/open.svg'
import dateIcon from '../../assets/types/open/date.svg'
import emailIcon from '../../assets/types/open/email.svg'
import numberIcon from '../../assets/types/open/number.svg'
import phoneIcon from '../../assets/types/open/phone.svg'
import singleLineIcon from '../../assets/types/open/single-line.svg'

function NewOpen(props) {
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
                <div className="type-pill bg-gray-100 p-1 u-round-xs u-flex u-flex-column u-items-center u-relative-md">
                    <font className="text-xs u-absolute-md font-bold">Paragraph</font>
                    <font className="u-absolute-md u-top-1 u-right-0 pr-1-md text-gray-600 tooltip tooltip--bottom" data-tooltip="Let the user enter a paragraph"><FontAwesomeIcon icon={faInfoCircle} /></font>
                    <img className="pt-0-md" src={openIcon} alt="Single" />
                </div>
                {/* Option */}

                {/* Option */}
                <div className="type-pill bg-gray-100 p-1 u-round-xs u-flex u-flex-column u-items-center u-relative-md">
                    <font className="text-xs u-absolute-md font-bold">Single line</font>
                    <font className="u-absolute-md u-top-1 u-right-0 pr-1-md text-gray-600 tooltip tooltip--bottom" data-tooltip="Let the user enter a line of text"><FontAwesomeIcon icon={faInfoCircle} /></font>
                    <img className="pt-1-md" src={singleLineIcon} alt="Single" />
                </div>
                {/* Option */}

                {/* Option */}
                <div className="type-pill bg-gray-100 p-1 u-round-xs u-flex u-flex-column u-items-center u-relative-md">
                    <font className="text-xs u-absolute-md font-bold">Date</font>
                    <font className="u-absolute-md u-top-1 u-right-0 pr-1-md text-gray-600 tooltip tooltip--bottom" data-tooltip="Let the user enter a date"><FontAwesomeIcon icon={faInfoCircle} /></font>
                    <img className="pt-1-md" src={dateIcon} alt="Single" />
                </div>
                {/* Option */}

                {/* Option */}
                <div className="type-pill bg-gray-100 p-1 u-round-xs u-flex u-flex-column u-items-center u-relative-md">
                    <font className="text-xs u-absolute-md font-bold">Number</font>
                    <font className="u-absolute-md u-top-1 u-right-0 pr-1-md text-gray-600 tooltip tooltip--bottom" data-tooltip="Ask something that must be answered with a number"><FontAwesomeIcon icon={faInfoCircle} /></font>
                    <img className="pt-1-md" src={numberIcon} alt="Single" />
                </div>
                {/* Option */}

                {/* Option */}
                <div className="type-pill bg-gray-100 p-1 u-round-xs u-flex u-flex-column u-items-center u-relative-md">
                    <font className="text-xs u-absolute-md font-bold">Email</font>
                    <font className="u-absolute-md u-top-1 u-right-0 pr-1-md text-gray-600 tooltip tooltip--bottom" data-tooltip="Ask for an email address"><FontAwesomeIcon icon={faInfoCircle} /></font>
                    <img className="pt-1-md" src={emailIcon} alt="Single" />
                </div>
                {/* Option */}

                {/* Option */}
                <div className="type-pill bg-gray-100 p-1 u-round-xs u-flex u-flex-column u-items-center u-relative-md">
                    <font className="text-xs u-absolute-md font-bold">Phone number</font>
                    <font className="u-absolute-md u-top-1 u-right-0 pr-1-md text-gray-600 tooltip tooltip--bottom" data-tooltip="Ask for a phone number"><FontAwesomeIcon icon={faInfoCircle} /></font>
                    <img className="pt-1-md" src={phoneIcon} alt="Single" />
                </div>
                {/* Option */}
            </div>
            {/* Question options */}
        </div>
    )
}

export default NewOpen;