import React from "react";
import Welcome from "./Home/Welcome";
import About from "./Home/About";
import Community from "./Home/Community";
import Listings from "./Home/Listings";
import Team from "./Home/Team";

export default function Home(props) {

    return (
        <>
            <Welcome />
            <main>
                <About />
                <Community />
                <Listings />
                <Team />
            </main>
        </>
    )

}