import React from "react"

export default function Buttons() {
    return (
        <div className="btn-container">
            <button className="btn-email">
                <img src="../images/email-icon.png" alt="email-icon" className="email-icon" />
                Email
            </button>
            <button className="btn-linkdln">
                <img src="../images/linkedin-icon.png" alt="linkedin-icon" className="linkedin-icon" />
                Linkedln
            </button>
        </div>
    )
}