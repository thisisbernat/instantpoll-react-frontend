import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShare, faQrcode } from '@fortawesome/free-solid-svg-icons'
import { faTwitterSquare, faFacebookSquare, faWhatsappSquare } from '@fortawesome/free-brands-svg-icons'

function Share(props) {
    return (
        <div className="bg-white u-round-sm u-shadow-lg px-3 py-8-md py-3">
            <div className="u-flex u-flex-column u-items-center">
                <font className="font-bold pb-2">Share</font>
                <div className="text-md">
                    <div><FontAwesomeIcon icon={faTwitterSquare} /> Share on Twitter</div>
                    <div><FontAwesomeIcon icon={faFacebookSquare} /> Share on Facebook</div>
                    <div><FontAwesomeIcon icon={faWhatsappSquare} /> Share on Whatsapp</div>
                    <div><FontAwesomeIcon icon={faQrcode} /> Share QR Code</div>
                    <div><FontAwesomeIcon icon={faShare} /> Share with link</div>
                </div>
            </div>
        </div>
    )

}

export default Share;