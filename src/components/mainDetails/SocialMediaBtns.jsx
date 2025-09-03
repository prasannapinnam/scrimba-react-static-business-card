import { faLinkedin} from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
export default function SocialMediaBtns() {
    return (
         <div className="social-media-btns">
                            <button><FontAwesomeIcon icon={faEnvelope} className="envelop-icon"/> <span>Email</span></button>
                            <button className="linkedin-btn"><FontAwesomeIcon icon={faLinkedin} /> <span>LinkedIn</span></button>
         </div>
    )
}