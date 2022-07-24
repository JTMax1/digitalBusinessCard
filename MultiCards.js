import React from "react"
import App from "./App"
// import App2 from "./App"

export default function MultiCards() {
    return (
        <div>
            <div className="multi-cards">
                <App />
                <App />
            </div>
            <div className="multi-cards">
                <App />
                <App />
            </div>
        </div>

    )
}
// ReactDOM.render(<App/>