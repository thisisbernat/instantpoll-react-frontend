import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

export default function ResultRanking() {
    return (
        <div className="bg-white u-round-sm u-shadow-lg py-3 px-6">
            <h6 className="mb-0">This is the question?</h6>
            <em>Category</em>
            <div className="u-flex u-flex-column u-items-center u-gap-2">
                <div className="u-flex u-gap-1">
                    <font className="text-teal-400 text-xl ranking-num">1</font>
                    <div className="bg-teal-400 text-white u-round-xs u-shadow-sm u-center" style={{ minWidth: "200px" }}><span className="font-black">Option</span></div>
                </div>
                <div className="u-flex u-gap-1">
                    <font className="text-teal-400 text-xl ranking-num">2</font>
                    <div className="bg-teal-400 text-white u-round-xs u-shadow-sm u-center" style={{ minWidth: "200px" }}><span className="font-black">Option</span></div>
                </div>
                <div className="u-flex u-gap-1">
                    <font className="text-teal-400 text-xl ranking-num">3</font>
                    <div className="bg-teal-400 text-white u-round-xs u-shadow-sm u-center" style={{ minWidth: "200px" }}><span className="font-black">Option</span></div>
                </div>
                <div className="u-flex u-gap-1">
                    <font className="text-teal-400 text-xl ranking-num">4</font>
                    <div className="bg-teal-400 text-white u-round-xs u-shadow-sm u-center" style={{ minWidth: "200px" }}><span className="font-black">Option</span></div>
                </div>
                <div className="u-flex u-gap-1">
                    <font className="text-teal-400 text-xl ranking-num">5</font>
                    <div className="bg-teal-400 text-white u-round-xs u-shadow-sm u-center" style={{ minWidth: "200px" }}><span className="font-black">Option</span></div>
                </div>
            </div>
        </div>
    )
}








