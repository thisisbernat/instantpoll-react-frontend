import { useState, useContext } from "react"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../../context/auth.context"
import { loginService } from "../../services/auth.services"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLock, faCircleInfo } from '@fortawesome/free-solid-svg-icons'


export default function Login(props) {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [errorMessage, setErrorMessage] = useState(undefined)
    const navigate = useNavigate()
    const { logInUser } = useContext(AuthContext)

    const handleEmail = (e) => setEmail(e.target.value)
    const handlePassword = (e) => setPassword(e.target.value)

    const handleLoginSubmit = async (e) => {
        e.preventDefault()
        const requestBody = { email, password }

        try {
            const response = await loginService(requestBody)

            const token = response.data.authToken
            logInUser(token)
            navigate("/")
        } catch (err) {
            const errorDescription = err?.response?.data?.message
            setErrorMessage(errorDescription)
        }
    }

    return (
        <div className="pt-3 pb-8 u-center">
            <div className="bg-white p-4 u-text-center u-round-xs u-shadow-lg">
                <h3>Log in</h3>
                <form onSubmit={handleLoginSubmit} className="u-flex u-flex-column mt-1">
                    <div className="input-control">
                        <input className="input-contains-icon input--sm" type="email" name="email" value={email} onChange={handleEmail} placeholder="Email address" /><span className="icon"><FontAwesomeIcon icon={faEnvelope} className="fa-wrapper" /></span>
                    </div>
                    <div className="input-control">
                        <input className="input-contains-icon input--sm" type="password" name="password" value={password} onChange={handlePassword} placeholder="Password" /><span className="icon"><FontAwesomeIcon icon={faLock} className="fa-wrapper" /></span>
                    </div>
                    <button type="submit" className="mt-2 bg-teal-400 text-white light-teal-btn">Log in</button>
                </form>
                {errorMessage && <div class="toast toast--warning mx-auto">
                    <p><FontAwesomeIcon icon={faCircleInfo} /> {errorMessage}</p>
                </div>}
            </div>
        </div>
    )
}