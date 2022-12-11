import React from "react";

export default function Community(props) {

    return (
        <section className="community">
            <h2 className="u-margin-bottom-l">Explore your community</h2>
            <div className="community__container">
                <div className="figure-card figure-card-1">
                    <p className="figure-card__text">Greer</p>
                </div>
                <div className="figure-card figure-card-2">
                    <p className="figure-card__text">Greenville</p>
                </div>
                <div className="figure-card figure-card-3">
                    <p className="figure-card__text">Spartanburg</p>
                </div>
                <div className="figure-card figure-card-1">
                    <p className="figure-card__text">Anderson</p>
                </div>
                <div className="figure-card figure-card-2">
                    <p className="figure-card__text">Taylors Rest</p>
                </div>
                <div className="figure-card figure-card-3">
                    <p className="figure-card__text">Simpsonville</p>
                </div>
            </div>
            <a className="btn">Explore all</a>

        </section>
    )
}