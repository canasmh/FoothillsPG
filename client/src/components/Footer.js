import React from "react";

export default function Footer(props) {

    return (
    <>
        <footer className="footer">
            <img src="./images/fpg-logo-icon-ovr.png" className="footer__img" />
            <div className="footer__content">
                <nav className="footer__column">
                    <ul className="footer__list">
                        <li className="footer__list-item"><a className="footer__list-link">Buy</a></li>
                        <li className="footer__list-item"><a className="footer__list-link">About</a></li>
                        <li className="footer__list-item"><a className="footer__list-link">Communities</a></li>
                        <li className="footer__list-item"><a className="footer__list-link">Team</a></li>
                        <li className="footer__list-item"><a className="footer__list-link">Testimonials</a></li>
                        <li className="footer__list-item"><a className="footer__list-link">Contact</a></li>
                    </ul>
                </nav>
                <div className="footer__column">
                    <h3>Our Communities</h3>
                    <p>Anderson</p>
                    <p>Greenville</p>
                    <p>Greer</p>
                    <p>Simpsonville</p>
                    <p>Spartanburg</p>
                    <p>Taylors</p>
                    <p>Travelers Rest</p>
                    <p>and many more!</p>
                </div>
                <div className="footer__column">
                    <address>
                        <h4 className="footer__contact--header">Address</h4>
                        <p><a className="footer__contact--link">330 E Coffee St. Suite 5005<br/>Greenville, SC 29601</a></p>
                        <h4 className="footer__contact--header">Phone</h4>
                        <p><a class="footer__contact--link">(864) 527 - 5992</a></p>
                        {/*Social media links go in here*/}
                    </address>
                </div>
            </div>
        </footer>
        <div class="copyright">
            <p>Foothills Property Group &copy; 2023 | All Rights Reserved</p>
            <p class="copyright__site-design">Designed & Developed by Manuel H. Canas</p>
        </div>
    </>
    );
}