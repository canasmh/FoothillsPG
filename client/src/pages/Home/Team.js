import React from "react";

export default function Team(props) {

    return (
        <section className="team">
            <h2 className="u-margin-bottom-l">Your trusted team</h2>
            <div className="slider">
                <svg class="slider__arrow slider__arrow--left">
                    <use xlinkHref="images/sprite.svg#icon-chevron-thin-left"></use>
                </svg>
                <div className="slider__container">
                    <div className="slider__profile-card">
                        <div className="slider__profile-container">
                            <img src="./images/profile-pic-1.jpeg" className="slider__profile-image"/>
                        </div>
                        <p className="slider__profile-name">Jane Doe</p>
                    </div>
                    <div className="slider__profile-card">
                        <div className="slider__profile-container">
                            <img src="./images/profile-pic-2.jpeg" className="slider__profile-image"/>
                        </div>
                        <p className="slider__profile-name">John Smith</p>
                    </div>
                    <div className="slider__profile-card">
                        <div className="slider__profile-container">
                            <img src="./images/profile-pic-3.jpeg" className="slider__profile-image"/>
                        </div>
                        <p className="slider__profile-name">Gary James</p>
                    </div>
                </div>
                <svg class="slider__arrow slider__arrow--right">
                    <use xlinkHref="images/sprite.svg#icon-chevron-thin-right"></use>
                </svg>
            </div>

            <p className="team__cta u-margin-bottom-s">Have a question? <br />Schedule a 15 minute meeting</p>
            <p className="team__cta">No Commitment. <span>No worries.</span></p>
            <a className="btn-text">Get in Touch &rarr;</a>
        </section>
    );
}