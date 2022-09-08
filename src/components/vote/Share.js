import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopy, faQrcode } from '@fortawesome/free-solid-svg-icons'
import { faTwitterSquare, faFacebookSquare, faWhatsappSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import Swal from 'sweetalert2'
import { useLocation } from 'react-router-dom'

export default function Share(props) {

    const showQR = () => {
        Swal.fire({
            imageUrl: `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${URL}`,
            showConfirmButton: false
        })
    }

    const {pathname} = useLocation()
    const URL = 'https://instantpoll.vercel.app' + pathname

    return (
        <div className="bg-white u-round-sm u-shadow-lg px-3 py-8-md py-3">
            <div className="u-flex u-flex-column u-items-center">
                <h5 className="font-light">Share</h5>
                <div className="text-md">
                    <div><FontAwesomeIcon style={{ color: "#00acee" }} icon={faTwitterSquare} /> <a href={`https://twitter.com/intent/tweet/?text=Vote%20now%20at%20&url=${URL}`} rel="noreferrer" target="_blank">Share on Twitter</a></div>
                    <div><FontAwesomeIcon style={{ color: "#0072b1" }} icon={faLinkedin} /> <a href={`https://www.linkedin.com/shareArticle?mini=true&url=${URL}`} rel="noreferrer" target="_blank">Share on Linkedin</a></div>
                    <div><FontAwesomeIcon style={{ color: "#25d366" }} icon={faWhatsappSquare} /> <a href={`https://api.whatsapp.com/send?text=Vote%20now%20at%20${URL}`} rel="noreferrer" target="_blank">Share on Whatsapp</a></div>
                    <div><FontAwesomeIcon style={{ color: "#3b5998" }} icon={faFacebookSquare} /> <a href={`https://www.facebook.com/sharer/sharer.php?u=${URL}`} rel="noreferrer" target="_blank">Share on Facebook</a></div>
                    <div onClick={showQR}><FontAwesomeIcon className="text-gray-700" icon={faQrcode} /> <font className="pointer" style={{ color: "#5e5cc7", fontWeight: "600", padding: "2px" }}>Share QR Code</font></div>
                    <div onClick={() => navigator.clipboard.writeText(URL)}><FontAwesomeIcon className="text-gray-700" icon={faCopy} /> <font className="pointer" style={{ color: "#5e5cc7", fontWeight: "600", padding: "2px" }} title="Click to copy link!">Copy link</font></div>
                </div>
            </div>
        </div>
    )

}