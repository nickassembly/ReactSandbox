import React from "react";
import heroImg from "./images/heroImg";

export default function Contact () {
    return (
       <div className="contact-card">
         <img src={heroImg}  className="hero--photo" />
         <h3>Mr. Whiskerson</h3>
         <div className="info-group">
            <p>(212) 555-1234</p>
         </div>
         <div className="info-group">
            <p>mr.whiskaz@catnip.meow</p>
         </div>
       </div>
    );
}