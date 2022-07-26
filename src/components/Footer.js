import SymbolLight from '../assets/img/symbolLight.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithubSquare } from '@fortawesome/free-brands-svg-icons'

function Footer(props) {
    return (    
        <footer className="bg-gray-700 text-gray-000 u-flex u-flex-column u-items-center pt-4 pb-3">
            <img src={SymbolLight} style={{width:"3rem"}} alt="InstantPoll symbol"/>
            <h4 className="mt-1">© InstantPoll</h4>
            <p className="mt-2 mb-0">Bernat Escarrà - Barcelona 2022</p>
            <h3 className="mt-0"><a href="https://www.linkedin.com/in/bernatescarra/" target="_blank" rel="noreferrer" className="social-icons"><FontAwesomeIcon icon={faLinkedin} /></a> <a href="https://github.com/thisisbernat/" target="_blank" rel="noreferrer" className="social-icons"><FontAwesomeIcon icon={faGithubSquare} /></a></h3>
        </footer>
    )
}

export default Footer;