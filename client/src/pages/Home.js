import React from "react";
import Welcome from "./Home/Welcome";
import About from "./Home/About";
import Community from "./Home/Community";
import Listings from "./Home/Listings";
import Team from "./Home/Team";
import Testimonials from "./Home/Testimonials";
import Contact from "./Home/Contact";

export default function Home(props) {

    return (
        <>
            <Welcome />
            <main>
                <About />
                <Community />
                <Listings />
                <Team />
                <Testimonials />
            </main>
        </>
    )

}