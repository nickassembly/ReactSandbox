import React from "react";
import contactImg from "./images/katie-zaferes.png";

export default function Contact () {
    return (
       <div className="contact-card">
         <img src={contactImg}  className="hero--photo" />
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