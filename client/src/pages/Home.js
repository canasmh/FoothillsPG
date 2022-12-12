import React from "react";
import Welcome from "./Home/Welcome";
import About from "./Home/About";
import Community from "./Home/Community";
import Listings from "./Home/Listings";

export default function Home(props) {

    return (
        <>
            <Welcome />
            <main>
                <About />
                <Community />
                <Listings />
            </main>
        </>
    )

}