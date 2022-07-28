import SymbolDarkest from '../assets/img/symbolDarkest.svg'
import { Link } from "react-router-dom"

function Hero(props) {
    return (
        <div className="hero">
            <div className="hero-body">
                <div className="content">
                    <div className="title u-center max-w-xs u-text-center"><img src={SymbolDarkest} style={{ width: "16rem" }} alt="InstantPoll symbol" /></div>
                    <h2 className="title u-center max-w-xs u-text-center"><span>Quickly create and share useful <font className="text-teal-400">polls</font> with&nbsp;<font className="instant">InstantPoll</font></span></h2>
                    <h6 className="subtitle u-center text-gray-500 mt-4 u-text-center">Because the only stupid question is the one that is never asked.</h6>
                    <div className="u-center mt-6">
                        <Link to="/new">
                            <button className="cta-btn text-white bg-black btn--lg">Create a new poll</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero