import { faLinkedin} from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
export default function SocialMediaBtns() {
    return (
         <div className="social-media-btns">
                            <button><FontAwesomeIcon icon={faLinkedin} /> <span>LinkedIn</span></button>
                            <button><FontAwesomeIcon icon={faEnvelope} /> <span>Email</span></button>
                        </div>
    )
}