import React from "react";

export default function Testimonials(props) {

    return (
        <section className="testimonials">

            <h2 className="u-margin-bottom-l">What our clients have to say</h2>

            <div className="testimonials__container">
                <div className="testimonials__container--individual">
                    <div className="testimonials__container--card">
                        <img src="./images/profile-pic-1.jpeg" className="testimonials__img" />
                        <h3 className="testimonials__heading">Juan was fantastic</h3>
                        <p className="testimonials__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo sed egestas egestas fringilla phasellus faucibus. Cursus turpis massa tincidunt dui.</p>
                    </div>
                    <p className="testimonials__link">View on Zillow</p>
                </div>

                <div className="testimonials__container--individual">
                    <div className="testimonials__container--card">
                        <img src="./images/profile-pic-2.jpeg" className="testimonials__img" />
                        <h3 className="testimonials__heading">Best decision ever</h3>
                        <p className="testimonials__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo sed egestas egestas fringilla phasellus faucibus. Cursus turpis massa tincidunt dui.</p>
                    </div>
                    <p className="testimonials__link">View on Zillow</p>
                </div>

                <div className="testimonials__container--individual">
                    <div className="testimonials__container--card">
                        <img src="./images/profile-pic-3.jpeg" className="testimonials__img" />
                        <h3 className="testimonials__heading"> 100% recommend</h3>
                        <p className="testimonials__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo sed egestas egestas fringilla phasellus faucibus. Cursus turpis massa tincidunt dui.</p>
                    </div>
                    <p className="testimonials__link">View on Zillow</p>
                </div>
            </div>
            <a className="btn">See all reviews</a>
        </section>
    );
}