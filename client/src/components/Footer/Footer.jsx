import "../Footer/Footer.scss"
import Linkedin from "../../assets/linkedin (1).png"
import Github from "../../assets/github.png"
import Gmail from "../../assets/gmail.png"

const Footer = () => {
    return (
        <div className="footer-container">

            <div className="footer-content__style">
                <div className="contact-details__style">
                    <h4 className="contact__style"> Contact Me </h4>
                     <a className = "footer__link" rel="noreferrer" href= "mailto:franklinokeke9@gmail.com" target="_blank"><img className="icon__style" src={Gmail} alt="gmail"/></a> 
                    <a className = "footer__link" href= "https://www.linkedin.com/in/franklinokeke/"> <img className="icon__style" src={Linkedin} alt="linkedin"/> </a> 
                    <a className = "footer__link" href= "https://www.github.com/okeke-miles/"> <img className="icon__style" src={Github} alt="github"/> </a> 
                </div>
            </div>
        </div>
    )
}

export default Footer