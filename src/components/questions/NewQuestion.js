import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faToggleOff, faGrip, faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import {ReactComponent as SingleIcon} from '../../assets/types/single.svg'
import {ReactComponent as MultipleIcon} from '../../assets/types/multiple.svg'
import {ReactComponent as RatingIcon} from '../../assets/types/rating.svg'
import {ReactComponent as OpenIcon} from '../../assets/types/open.svg'
import {ReactComponent as RankingIcon} from '../../assets/types/ranking.svg'
import {ReactComponent as ListIcon} from '../../assets/types/list.svg'
import {ReactComponent as IntroIcon} from '../../assets/types/intro.svg'
import {ReactComponent as ThanksIcon} from '../../assets/types/thanks.svg'

export default function NewQuestion({index, CRUD: {updateQuestion}}) {
    return (
        <div className="bg-white u-round-sm u-shadow-lg px-3 pt-2 pb-1">
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
            <div className="grid grid-cols-4-md grid-cols-2 u-gap-2 p-1">
                <div className="type-pill bg-gray-100 p-1 u-round-xs u-flex u-flex-column u-items-center u-relative-md" onClick={() => updateQuestion(index, 'type', 'intro')}>
                    <font className="text-xs u-absolute-md font-bold">Intro</font>
                    <font className="u-absolute-md u-top-1 u-right-0 pr-1-md text-gray-600 tooltip tooltip--bottom" data-tooltip="Greet the user with style"><FontAwesomeIcon icon={faInfoCircle} /></font>
                    <IntroIcon className="pt-0-md" alt="Single" />
                </div>
                <div className="type-pill bg-gray-100 p-1 u-round-xs u-flex u-flex-column u-items-center u-relative-md" onClick={() => updateQuestion(index, 'type', 'single')}>
                    <font className="text-xs u-absolute-md font-bold">Single choice</font>
                    <font className="u-absolute-md u-top-1 u-right-0 pr-1-md text-gray-600 tooltip tooltip--bottom" data-tooltip="The user must choose one option only"><FontAwesomeIcon icon={faInfoCircle} /></font>
                    <SingleIcon className="pt-1-md" alt="Single" />
                </div>
                <div className="type-pill bg-gray-100 p-1 u-round-xs u-flex u-flex-column u-items-center u-relative-md" onClick={() => updateQuestion(index, 'type', 'multiple')}>
                    <font className="text-xs u-absolute-md font-bold">Multiple choice</font>
                    <font className="u-absolute-md u-top-1 u-right-0 pr-1-md text-gray-600 tooltip tooltip--bottom" data-tooltip="The user can choose multiple options"><FontAwesomeIcon icon={faInfoCircle} /></font>
                    <MultipleIcon className="pt-1-md" alt="Single" />
                </div>
                <div className="type-pill bg-gray-100 p-1 u-round-xs u-flex u-flex-column u-items-center u-relative-md" onClick={() => updateQuestion(index, 'type', 'open')}>
                    <font className="text-xs u-absolute-md font-bold">Open answer</font>
                    <font className="u-absolute-md u-top-1 u-right-0 pr-1-md text-gray-600 tooltip tooltip--bottom" data-tooltip="A single line, a paragraph, date, email, number, etc.">
                        <FontAwesomeIcon icon={faInfoCircle} /></font>
                    <OpenIcon className="pt-1-md" alt="Single" />
                </div>
                <div className="type-pill bg-gray-100 p-1 u-round-xs u-flex u-flex-column u-items-center u-relative-md" onClick={() => updateQuestion(index, 'type', 'rating')}>
                    <font className="text-xs u-absolute-md font-bold">Rating</font>
                    <font className="u-absolute-md u-top-1 u-right-0 pr-1-md text-gray-600 tooltip tooltip--bottom" data-tooltip="Up to 5 stars!"><FontAwesomeIcon icon={faInfoCircle} /></font>
                    <RatingIcon className="pt-1-md" alt="Single" />
                </div>
                <div className="type-pill bg-gray-100 p-1 u-round-xs u-flex u-flex-column u-items-center u-relative-md" onClick={() => updateQuestion(index, 'type', 'ranking')}>
                    <font className="text-xs u-absolute-md font-bold">Ranking</font>
                    <font className="u-absolute-md u-top-1 u-right-0 pr-1-md text-gray-600 tooltip tooltip--bottom" data-tooltip="Let the user rank some options"><FontAwesomeIcon icon={faInfoCircle} /></font>
                    <RankingIcon className="pt-1-md" alt="Single" />
                </div>
                <div className="type-pill bg-gray-100 p-1 u-round-xs u-flex u-flex-column u-items-center u-relative-md" onClick={() => updateQuestion(index, 'type', 'list')}>
                    <font className="text-xs u-absolute-md font-bold">List</font>
                    <font className="u-absolute-md u-top-1 u-right-0 pr-1-md text-gray-600 tooltip tooltip--bottom" data-tooltip="Ask the user for a list"><FontAwesomeIcon icon={faInfoCircle} /></font>
                    <ListIcon className="pt-1-md" alt="Single" />
                </div>
                <div className="type-pill bg-gray-100 p-1 u-round-xs u-flex u-flex-column u-items-center u-relative-md" onClick={() => updateQuestion(index, 'type', 'thanks')}>
                    <font className="text-xs u-absolute-md font-bold">Thank you</font>
                    <font className="u-absolute-md u-top-1 u-right-0 pr-1-md text-gray-600 tooltip tooltip--bottom" data-tooltip="It's always nice to say thanks"><FontAwesomeIcon icon={faInfoCircle} /></font>
                    <ThanksIcon className="pt-1-md" alt="Single" />
                </div>
            </div>
        </div>
    )
}








