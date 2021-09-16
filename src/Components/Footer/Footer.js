import React from 'react'
import './Footer.css'
import logo from '../../Assets/Logo.png'

const Footer = () => {
    return (
        <div>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="keywords" content="footer, address, phone, icons" />
            <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css" />
            <link href="http://fonts.googleapis.com/css?family=Cookie" rel="stylesheet" type="text/css" />
            <footer className="footer-distributed">
                <div className="footer-left">
                    <img src={logo} alt='' className='logo'/>
                    <h3>The <span> Lab</span></h3>
                    <p className="footer-company-name">The Lab © 2021</p>
                </div>
                <div className="footer-center">
                    <div>
                        <i className="fa fa-map-marker" />
                        <p><span>3 rue Med Beyrem</span> Hammam Lif, Ben Arous</p>
                    </div>
                    <div>
                        <i className="fa fa-phone" />
                        <p>+216 56 430720</p>
                    </div>
                    <div>
                        <i className="fa fa-envelope" />
                        <p><a href="mailto:support@company.com">hamza.amdounitsmm@gmail.com</a></p>
                    </div>
                </div>
                <div className="footer-right">
                    <p className="footer-company-about">
                        <span>About the company</span>
                        Le Bar à Jus de Fruits et Smoothies sera votre animation préférée tout au long de l’année.
                    </p>
                    <div className="footer-icons">
                        <a href="#"><i className="fa fa-facebook" /></a>
                        <a href="#"><i className="fa fa-twitter" /></a>
                        <a href="#"><i className="fa fa-linkedin" /></a>
                        <a href="#"><i className="fa fa-github" /></a>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer
