import React from "react";

export default function Welcome(props) {
    return (
        <section className="welcome">
            <div className="welcome__container">
                <h1 className="welcome__heading">
                    <span className="welcome__heading--span-1">Foothills </span>
                    <span className="welcome__heading--span-2">Property Group</span>
                </h1>
                <p className="welcome__description">
                    <span className="welcome__description--span-1">Real Estate </span>
                    <span className="welcome__description--span-2">Experts</span>
                </p>
                <input type="search" placeholder="Search by zip code, city, or neighborhood" className="welcome__search" />
            </div>
        </section>
    )
}