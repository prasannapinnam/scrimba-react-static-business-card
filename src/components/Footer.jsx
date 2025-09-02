import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter,
  faInstagram,
  faFacebook,
  faGithub } from "@fortawesome/free-brands-svg-icons";
export default function Footer() {
    return (
        <footer>
                    <FontAwesomeIcon icon={faTwitter} />
                    <FontAwesomeIcon icon={faInstagram} />
                    <FontAwesomeIcon icon={faFacebook} />
                    <FontAwesomeIcon icon={faGithub} />
        </footer>
    )
}