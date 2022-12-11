import React from "react";

export default function About(props) {

    return (
        <section className="about">
            <h2 className="u-margin-bottom-l">What makes us different</h2>
            <div className="about__container about__container--1 u-margin-bottom-xl">
                <div className="about__image--container about__image--container-1">
                    &nbsp;
                </div>
                <div className="about__description">
                    <h3 className="about__sub-heading u-margin-bottom-xs">Trusted by <span>your</span> community</h3>
                    <p className="about__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo sed egestas egestas fringilla phasellus faucibus. Cursus turpis massa tincidunt dui.</p>
                </div>
            </div>
            <div className="about__container about__container--2 u-margin-bottom-xl">
                <div className="about__image--container about__image--container-2">
                    &nbsp;
                </div>
                <div className="about__description">
                    <h3 className="about__sub-heading u-margin-bottom-xs">Serving the upstate since <span>'96</span></h3>
                    <p className="about__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo sed egestas egestas fringilla phasellus faucibus. Cursus turpis massa tincidunt dui.</p>
                </div>
            </div>
            <a className="btn-text">Learn more &rarr;</a>
        
        </section>
    );
}