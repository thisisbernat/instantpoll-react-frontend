import SymbolDark from '../assets/img/symbolDark.svg'
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/auth.context";


function Navbar(props) {
    // Subscribe to the AuthContext to gain access to
    // the values from AuthContext.Provider `value` prop
    const { isLoggedIn, user, logOutUser } = useContext(AuthContext);


    // Control the hamburguer and dropdown menu
    const [isMenuOpen, setMenuOpen] = useState("false");
    const [isDropdownOpen, setDropdownOpen] = useState("false");


    return (
        <header className="header header-fixed u-unselectable header-animated">
            <div className="header-brand">
                <div className="nav-item no-hover">
                    <Link to="/">
                        <img className="max-w-100p text-dark" style={{ width: "3rem" }} src={SymbolDark} alt="InstantPoll Symbol" /><span style={{ width: "2px" }}></span><h5 className="title">InstantPoll</h5>
                    </Link>
                </div>
                <div className={isMenuOpen ? "nav-item nav-btn no-hover" : "nav-item nav-btn active"} onClick={() => setMenuOpen(!isMenuOpen)} id="header-btn">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <div className={isMenuOpen ? "header-nav" : "header-nav active"}>
                <div className="nav-left"></div>
                <div className="nav-right">
                    <div className="nav-item no-hover">
                        <Link to="/new" className="react-link u-center">
                            <button className="bg-teal-600 dark-teal-btn text-white btn--sm" onClick={() => setMenuOpen(!isMenuOpen)}>Create Poll</button>
                        </Link>
                    </div>

                    {!isLoggedIn ? (
                        <>
                            <div className="nav-item no-hover pt-0">
                                <Link to="/signup" className="react-link u-center">
                                    <button className="bg-teal-400 text-white btn--sm light-teal-btn" onClick={() => setMenuOpen(!isMenuOpen)}>Sign up</button>
                                </Link>
                            </div>
                            <div className="nav-item no-hover pt-0">
                                <Link to="/login" className="react-link u-center">
                                    <button className="btn--sm btn-transparent" onClick={() => setMenuOpen(!isMenuOpen)}>Log in</button>
                                </Link>
                            </div>
                        </>
                    ) : (
                        < div className="nav-item has-sub no-hover" id="dropdown" onClick={() => setDropdownOpen(!isDropdownOpen)}>
                            <div className="nav-dropdown-link"><div className="avatar text-gray-000 avatar--sm" data-text={user.firstname.charAt(0) + user.lastname.charAt(0).toLowerCase()}></div></div>
                            <ul className={isDropdownOpen ? "dropdown-menu dropdown-animated" : "dropdown-menu dropdown-animated dropdown-shown"} role="menu">
                                <li className="menu-item"><Link to="/dashboard" className="react-link" onClick={() => setMenuOpen(!isMenuOpen)}>Dashboard</Link></li>
                                <li className="menu-item"><Link to="/profile" className="react-link" onClick={() => setMenuOpen(!isMenuOpen)}>Profile</Link></li>                                
                                <li className="dropdown-menu-divider"></li>
                                <li className="menu-item ml-2"><div onClick={() => { logOutUser(); setMenuOpen(!isMenuOpen); }} className="text-primary font-extrabold">Log out</div></li>
                            </ul>
                        </div>
                    )
                    }
                </div>
            </div>
        </header >
    )
}

export default Navbar;