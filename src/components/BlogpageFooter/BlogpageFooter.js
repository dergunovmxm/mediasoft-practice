import React from "react";
import "./blogpageFooter.css"
import line1 from "../../images/line1.png"
import logo2 from "../../images/logo2.png"

export const BlogpageFooter = () => (
    <div className="footer">
        <h1 className="footer_title">Intersted to woek with our team?</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
        <button className="footer_button">Let’s Talk</button>
        <h2>Afrianska</h2>
        <img src={line1} className="line1" />
        <img src={logo2} className="footer_logo" />
        <h2 className="footer_first_title">About Us</h2>
        <h2 className="footer_second_title">Follow Us</h2>
       

      

        <span> 2019 © Afrianska. All rights reserved.</span>
    </div>
)