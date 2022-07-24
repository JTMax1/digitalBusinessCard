import React from "react"
// import photo from "../images/profile-picture.jpg"


export default function Info() {
    return (
        <div>
            <div>
                <img src="../images/profile-picture.jpg" alt="id-photo" className="profile-photo" />
            </div>

            <div className="profile-details">
                <h1 className="profile-name">Tochukwu John</h1>
                <h3 className="profile-skill">Full-Stack Developer</h3>
                <p className="profile-site">bit.ly/jtmaxprofile</p>
            </div>
        </div>
    )
}