import React from "react";

export default function Listings(props) {

    return (
        <section className="listings">
            <h2 className="u-margin-bottom-l">View Current Listings</h2>
            <div className="slider">
                <svg class="slider__arrow slider__arrow--left">
                    <use xlinkHref="images/sprite.svg#icon-chevron-thin-left"></use>
                </svg>
                <div className="slider__container">
                    <div className="slider__card">

                        <h4 class="slider__heading">103 Ripton Ct</h4>
                        <h5 class="slider__subheading">Greer, SC 29650</h5>

                        <div className="slider__image-container">
                            <img src="./images/home-1.jpeg" className="slider__image"/>
                            <div className="slider__text">
                                <div className="slider__text-container">
                                    <h5 className="slider__text--heading">Beds</h5>
                                    <p className="slider__text--subheading">4</p>
                                </div>
                                <div className="slider__text-container">
                                    <h5 className="slider__text--heading">Baths</h5>
                                    <p className="slider__image--subheading">3.5</p>
                                </div>
                                <div className="slider__text-container">
                                    <h5 className="slider__text--heading">sqft</h5>
                                    <p className="slider__text--subheading">1,800</p>
                                </div>
                            </div>
                            <div className="slider__price-container">
                                <h4 className="slider__price">$320,000</h4>
                            </div>
                        </div>
                        
                    </div>

                    <div className="slider__card">

                        <h4 class="slider__heading">406 Grafton Ct</h4>
                        <h5 class="slider__subheading">Greer, SC 29650</h5>

                        <div className="slider__image-container">
                            <img src="./images/home-2.jpeg" className="slider__image"/>
                            <div className="slider__text">
                                <div className="slider__text-container">
                                    <h5 className="slider__text--heading">Beds</h5>
                                    <p className="slider__text--subheading">3</p>
                                </div>
                                <div className="slider__text-container">
                                    <h5 className="slider__text--heading">Baths</h5>
                                    <p className="slider__text--subheading">2.5</p>
                                </div>
                                <div className="slider__text-container">
                                    <h5 className="slider__text--heading">sqft</h5>
                                    <p className="slider__text--subheading">1,500</p>
                                </div>
                            </div>
                            <div className="slider__price-container">
                                <h4 className="slider__price">$280,000</h4>
                            </div>
                            
                        </div>
                        
                    </div>

                    <div className="slider__card">

                        <h4 class="slider__heading">4 Little Fox Rd</h4>
                        <h5 class="slider__subheading">Greer, SC 29650</h5>

                        <div className="slider__image-container">
                            <img src="./images/home-3.jpeg" className="slider__image"/>
                            <div className="slider__text">
                                <div className="slider__text-container">
                                    <h5 className="slider__text--heading">Beds</h5>
                                    <p className="slider__text--subheading">3</p>
                                </div>
                                <div className="slider__text-container">
                                    <h5 className="slider__text--heading">Baths</h5>
                                    <p className="slider__text--subheading">2</p>
                                </div>
                                <div className="slider__text-container">
                                    <h5 className="slider__text--heading">sqft</h5>
                                    <p className="slider__text--subheading">1,200</p>
                                </div>
                                </div>
                            <div className="slider__price-container">
                                <h4 className="slider__price">$250,000</h4>
                            </div>          
                        </div>
                        
                    </div>
                </div>
                <svg class="slider__arrow slider__arrow--right">
                    <use xlinkHref="images/sprite.svg#icon-chevron-thin-right"></use>
                </svg>
            </div>


            <a className="btn-outline">View all listings</a>
        </section>
    )
}