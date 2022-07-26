import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faToggleOff, faGrip, faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import singleIcon from '../../assets/types/single.svg'
import multipleIcon from '../../assets/types/multiple.svg'
import ratingIcon from '../../assets/types/rating.svg'
import openIcon from '../../assets/types/open.svg'
import rankingIcon from '../../assets/types/ranking.svg'
import listIcon from '../../assets/types/list.svg'
import introIcon from '../../assets/types/intro.svg'
import thanksIcon from '../../assets/types/thanks.svg'

function NewQuestion(props) {
    const { index, crud } = props
    const update = crud.update

    return (
        <div className="bg-white u-round-sm u-shadow-lg px-3 pt-2 pb-1">
            {/* Question header */}
            <div className="u-flex u-flex-column u-justify-center u-relative">
                <FontAwesomeIcon className="text-gray-600 grip top-grip" icon={faGrip} />
                <div className="u-absolute-md u-left-0 u-right-0">
                    <div className="u-flex u-flex-row-md u-justify-space-between-md u-items-center u-flex-column">
                        <div className="font-alt font-bold text-lg">New question</div>
                        <div className="u-flex u-gap-1 text-xs text-gray-800 hidden">Not compulsory <FontAwesomeIcon className="text-xl text-gray-800" style={{ cursor: "pointer" }} icon={faToggleOff} /></div>
                    </div>
                </div>
            </div>
            <div className="u-flex u-justify-flex-start-md u-justify-center pb-1 hidden"><em>Category</em></div>
            {/* Question header */}

            {/* Question options */}
            <div className="grid grid-cols-4-md grid-cols-2 u-gap-2 p-1">
                {/* Option */}
                <div className="type-pill bg-gray-100 p-1 u-round-xs u-flex u-flex-column u-items-center u-relative-md" onClick={() => update(index, 'type', 'intro')}>
                    <font className="text-xs u-absolute-md font-bold">Intro</font>
                    <font className="u-absolute-md u-top-1 u-right-0 pr-1-md text-gray-600 tooltip tooltip--bottom" data-tooltip="Greet the user with style"><FontAwesomeIcon icon={faInfoCircle} /></font>
                    <img className="pt-0-md" src={introIcon} alt="Single" />
                </div>
                {/* Option */}

                {/* Option */}
                <div className="type-pill bg-gray-100 p-1 u-round-xs u-flex u-flex-column u-items-center u-relative-md" onClick={() => update(index, 'type', 'single')}>
                    <font className="text-xs u-absolute-md font-bold">Single choice</font>
                    <font className="u-absolute-md u-top-1 u-right-0 pr-1-md text-gray-600 tooltip tooltip--bottom" data-tooltip="The user must choose one option only"><FontAwesomeIcon icon={faInfoCircle} /></font>
                    <img className="pt-1-md" src={singleIcon} alt="Single" />
                </div>
                {/* Option */}

                {/* Option */}
                <div className="type-pill bg-gray-100 p-1 u-round-xs u-flex u-flex-column u-items-center u-relative-md" onClick={() => update(index, 'type', 'multiple')}>
                    <font className="text-xs u-absolute-md font-bold">Multiple choice</font>
                    <font className="u-absolute-md u-top-1 u-right-0 pr-1-md text-gray-600 tooltip tooltip--bottom" data-tooltip="The user can choose multiple options"><FontAwesomeIcon icon={faInfoCircle} /></font>
                    <img className="pt-1-md" src={multipleIcon} alt="Single" />
                </div>
                {/* Option */}

                {/* Option */}
                <div className="type-pill bg-gray-100 p-1 u-round-xs u-flex u-flex-column u-items-center u-relative-md" onClick={() => update(index, 'type', 'open')}>
                    <font className="text-xs u-absolute-md font-bold">Open answer</font>
                    <font className="u-absolute-md u-top-1 u-right-0 pr-1-md text-gray-600 tooltip tooltip--bottom" data-tooltip="A single line, a paragraph, date, email, number, etc."><FontAwesomeIcon icon={faInfoCircle} /></font>
                    <img className="pt-1-md" src={openIcon} alt="Single" />
                </div>
                {/* Option */}

                {/* Option */}
                <div className="type-pill bg-gray-100 p-1 u-round-xs u-flex u-flex-column u-items-center u-relative-md" onClick={() => update(index, 'type', 'rating')}>
                    <font className="text-xs u-absolute-md font-bold">Rating</font>
                    <font className="u-absolute-md u-top-1 u-right-0 pr-1-md text-gray-600 tooltip tooltip--bottom" data-tooltip="Up to 5 stars!"><FontAwesomeIcon icon={faInfoCircle} /></font>
                    <img className="pt-1-md" src={ratingIcon} alt="Single" />
                </div>
                {/* Option */}

                {/* Option */}
                <div className="type-pill bg-gray-100 p-1 u-round-xs u-flex u-flex-column u-items-center u-relative-md" onClick={() => update(index, 'type', 'ranking')}>
                    <font className="text-xs u-absolute-md font-bold">Ranking</font>
                    <font className="u-absolute-md u-top-1 u-right-0 pr-1-md text-gray-600 tooltip tooltip--bottom" data-tooltip="Let the user rank some options"><FontAwesomeIcon icon={faInfoCircle} /></font>
                    <img className="pt-1-md" src={rankingIcon} alt="Single" />
                </div>
                {/* Option */}

                {/* Option */}
                <div className="type-pill bg-gray-100 p-1 u-round-xs u-flex u-flex-column u-items-center u-relative-md" onClick={() => update(index, 'type', 'list')}>
                    <font className="text-xs u-absolute-md font-bold">List</font>
                    <font className="u-absolute-md u-top-1 u-right-0 pr-1-md text-gray-600 tooltip tooltip--bottom" data-tooltip="Ask the user for a list"><FontAwesomeIcon icon={faInfoCircle} /></font>
                    <img className="pt-1-md" src={listIcon} alt="Single" />
                </div>
                {/* Option */}

                {/* Option */}
                <div className="type-pill bg-gray-100 p-1 u-round-xs u-flex u-flex-column u-items-center u-relative-md" onClick={() => update(index, 'type', 'thanks')}>
                    <font className="text-xs u-absolute-md font-bold">Thank you</font>
                    <font className="u-absolute-md u-top-1 u-right-0 pr-1-md text-gray-600 tooltip tooltip--bottom" data-tooltip="It's always nice to say thanks"><FontAwesomeIcon icon={faInfoCircle} /></font>
                    <img className="pt-1-md" src={thanksIcon} alt="Single" />
                </div>
                {/* Option */}

            </div>
            {/* Question options */}
        </div>
    )
}

export default NewQuestion;







