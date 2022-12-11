import React from "react";

export default function Navigation(props) {

    return (
        <nav className="nav">
            <div className="nav__logo-container">
                <a className="nav__logo-link"><img src="./images/logo.png" className="nav__logo" /></a>
            </div>
            <ul className="nav__list">
                <li className="nav__list-item"><a className="nav__list-link">Buy</a></li>
                <li className="nav__list-item"><a className="nav__list-link">About</a></li>
                <li className="nav__list-item"><a className="nav__list-link">Community</a></li>
                <li className="nav__list-item"><a className="nav__list-link">Listings</a></li>
                <li className="nav__list-item"><a className="nav__list-link">Team</a></li>
                <li className="nav__list-item"><a className="nav__list-link">Testimonials</a></li>
                <li className="nav__list-item"><a className="nav__list-link">Contact</a></li>
            </ul>
        </nav>
    )
}