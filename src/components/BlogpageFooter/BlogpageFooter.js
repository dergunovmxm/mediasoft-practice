import React from "react";
import "./blogpageFooter.css"
import line1 from "../../images/line1.png"
import logo2 from "../../images/logo2.png"

export const BlogpageFooter = () => (
    <div className="footer">
        <h1 className="footer_title">Intersted to woek with our team?</h1>
        <p className="first_par">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
        <button className="footer_button">Let’s Talk</button>
        <h2 className="footer_start_title">Afrianska</h2>
        <img src={line1} className="line1" />
        <img src={logo2} className="footer_logo" />
        <h2 className="footer_first_title" id="title_1">About Us</h2>
        <h2 className="footer_second_title" id="title_2">Follow Us</h2>
        {/* <span className="span_1" id="span_1">About</span>
        <span className="span_2"  id="span_2">What We Do</span>
        <span className="span_3"  id="span_3">Project</span>
        <span className="span_4" id="span_4" >How It Work With Us</span>

        <span className="span_5" id="span_5">Instagram</span>
        <span className="span_6" id="span_6">Facebook</span>
        <span className="span_7" id="span_7">LinkedIn</span>
        <span className="span_8" id="span_8">Youtube</span> */}

      

        <span className="finish_span"> 2019 © Afrianska. All rights reserved.</span>
    </div>
)