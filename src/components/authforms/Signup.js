import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { signupService } from '../../services/auth.services'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLock, faUser, faAddressCard, faCircleInfo } from '@fortawesome/free-solid-svg-icons'


export default function Signup(props) {
    const [firstname, setFirstName] = useState('')
    const [lastname, setLastName] = useState('')
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()
    const [errorMessage, setErrorMessage] = useState(undefined)

    const handleEmail = (e) => setEmail(e.target.value)
    const handlePassword = (e) => setPassword(e.target.value)
    const handleFirstName = (e) => setFirstName(e.target.value)
    const handleLastName = (e) => setLastName(e.target.value)
    const handleUsername = (e) => setUsername(e.target.value)

    const handleSignupSubmit = async (e) => {
        e.preventDefault()
        // Create an object representing the request body
        const requestBody = { email, password, firstname, lastname, username }
        try {
            await signupService(requestBody)
            navigate("/login")
        } catch (err) {
            if (err.response?.status === 400) {
                setErrorMessage(err.response.data.message)
                console.log(err.response.data.message)
            }
        }
    }

    return (
        <div className="pt-3 pb-8 u-center">
            <div className="bg-white p-4 u-text-center u-round-xs u-shadow-lg">
                <h3>Sign up</h3>
                <form className="u-flex u-flex-column" onSubmit={handleSignupSubmit}>
                    <div className="grid grid-cols-2-md grid-cols-1 u-gap-2 my-1">
                        <div className="input-control mt-0 mb-0">
                            <input className="input--sm input-contains-icon" type="text" name="firstname" value={firstname} onChange={handleFirstName} placeholder="First name" /><span className="icon"><FontAwesomeIcon icon={faAddressCard} className="fa-wrapper" /></span>
                        </div>
                        <div className="input-control mt-0 mb-0">
                            <input className="input--sm input-contains-icon" type="text" name="lastname" value={lastname} onChange={handleLastName} placeholder="Last name" /><span className="icon"><FontAwesomeIcon icon={faAddressCard} className="fa-wrapper" /></span>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-control min-w-100p mt-0 mb-0">
                            <input className="input--sm input-contains-icon" type="email" name="email" value={email} onChange={handleEmail} placeholder="Email address" /><span className="icon"><FontAwesomeIcon icon={faEnvelope} className="fa-wrapper" /></span>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-control min-w-100p mt-0 mb-0">
                            <input className="input--sm input-contains-icon" type="text" name="username" value={username} onChange={handleUsername} placeholder="Username" /><span className="icon"><FontAwesomeIcon icon={faUser} className="fa-wrapper" /></span>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-control min-w-100p mt-0">
                            <input className="input--sm input-contains-icon" type="password" name="password" value={password} onChange={handlePassword} placeholder="Password" /><span className="icon"><FontAwesomeIcon icon={faLock} className="fa-wrapper" /></span>
                        </div>
                    </div>
                    <button type="submit" className="mt-2 bg-teal-400 text-white light-teal-btn">Sign up</button>
                </form>
                {errorMessage && <div class="toast toast--warning mx-auto">
                    <p><FontAwesomeIcon icon={faCircleInfo} /> {errorMessage}</p>
                </div>}
            </div>
        </div>
    )
}