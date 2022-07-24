import React from "react"
import Info from "./components/Info"
import About from "./components/About"
import Interest from "./components/Interest"
import Social from "./components/Social"
import Buttons from "./components/Buttons"

export default function App() {
    return (
        <div className="container">
        <main className="main-card">
            <Info />
            <Buttons />
            <About />
            <Interest />
            <Social />
        </main>
        </div>
    )
}