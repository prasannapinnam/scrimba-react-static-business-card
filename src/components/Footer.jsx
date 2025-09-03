import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter,
  faInstagram,
  faFacebook,
  faGithub } from "@fortawesome/free-brands-svg-icons";
export default function Footer() {
    return (
        <footer className="icon-container">
            <div className="icons">
                    <FontAwesomeIcon icon={faTwitter} />
                    <FontAwesomeIcon icon={faInstagram} />
                    <FontAwesomeIcon icon={faFacebook} />
                    <FontAwesomeIcon icon={faGithub} />
            </div>    
        </footer>
    )
}