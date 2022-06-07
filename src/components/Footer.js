import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookSquare,faTwitterSquare, faInstagramSquare, faGithubSquare } from "@fortawesome/free-brands-svg-icons";

export default function Footer(){
    return(
        <footer>
                <FontAwesomeIcon className="icons" href="www.google.com" icon={faTwitterSquare} />
                <FontAwesomeIcon className="icons" icon={faFacebookSquare} />
                <FontAwesomeIcon className="icons" icon={faInstagramSquare} />
                <FontAwesomeIcon className="last-icon" icon={faGithubSquare} />
        </footer>
    )
}