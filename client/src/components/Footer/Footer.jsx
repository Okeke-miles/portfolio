import "../Footer/Footer.scss"

const Footer = () => {
    return (
        <div className="footer-container">
            <div className="footer-content__style">
                <div className="contact-details__style">
                    <h4 className="contact__style"> Contact Us </h4>
                    <p className="contact__style"> Email: <a class = "footer__link" rel="noreferrer" href= "mailto:franklinokeke9@gmail.com" target="_blank">franklinokeke9@gmail.com</a> </p>
                    <p className="contact__style"> Address </p>
                </div>
            </div>
        </div>
    )
}

export default Footer