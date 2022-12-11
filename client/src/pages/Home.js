import React from "react";
import Welcome from "./Home/Welcome";
import About from "./Home/About";

export default function Home(props) {

    return (
        <>
            <Welcome />
            <main>
                <About />
            </main>
        </>
    )

}