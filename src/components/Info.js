import React from "react";
import profile from "../images/profile.jpg"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faLinkedin} from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";


export default function Info(){
    return (
        <>
            <div className="info-box">
                    <img src={profile} alt="Profile pic" className="profile" />
                    <h2>Anmol Bansal</h2>
                    <h3>Frontend Developer</h3>
                    <h4>Anmolbansal.dev</h4>
                    <div className="buttons">
                        <button src="" className="email"><FontAwesomeIcon className="email-img  " icon={faEnvelope} /> Email</button>
                        <button src="" className="linkedin"><FontAwesomeIcon className="linkedin-img" icon={faLinkedin} /> LinkedIn</button>
                    </div>
                
            </div>
        </>
    )
}