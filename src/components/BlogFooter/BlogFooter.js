import React from "react";
import "./blogpageFooter.css"
import line1 from "../../images/line1.png"
import logo2 from "../../images/logo2.png"
import line from "../../images/line2.png"

export const BlogFooter = () => (
    <div className="blog_footer">
        <div className="blog_footer_container">
            <div className="blog_footer_row">

                <div className="blog_footer_col">
                    <h1 className="blog_footer_title">Intersted to woek with our team?</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>

                </div>

                <div className="blog_footer_col">
                    <button className="blog_footer_button">Let’s Talk</button>
                </div>

            </div>

            <div className="blog_footer_row"> 
                <img src={line}/>
            </div>

            <div className="blog_footer_row">
                <div className="blog_footer_col col1">

                    <div className="blog_footer_box">
                        <div className="blog_footer_box_col">
                            <img className="blog_footer_logo" src={logo2} />
                        </div>

                        <div className="blog_footer_box_col">
                            <h1 className="blog_footer_title"> Afrianska</h1>
                        </div>

                    </div>

                    <div className="blog_footer_box">
                        <div className="blog_footer_box_col">
                            <p className="blog_footer_title">A.</p>
                        </div>

                        <div className="blog_footer_box_col">
                            <p >Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
                        </div>
                    </div>

                    <div className="blog_footer_box">
                        <div className="blog_footer_box_col">
                        <p className="blog_footer_title">T.</p>
                        </div>

                        <div className="blog_footer_box_col">
                        <p >+62-812-7313-4321</p>
                        </div>
                    </div>

                    <div className="blog_footer_box">
                        <div className="blog_footer_box_col">
                        <p className="blog_footer_title">E.</p>
                        </div>

                        <div className="blog_footer_box_col">
                        <p> hello.afrian@gmail.com </p>
                        </div>
                    </div>

                </div>
                
                <div className="blog_footer_col col2">
                    <ul>
                        <li><strong>About Us</strong></li><br />
                        <li>About</li>
                        <li>What We Do</li>
                        <li>Project</li>
                        <li>How It  Work With Us</li>
                    </ul>

                </div>
                <div className="blog_footer_col col3">

                    <ul>
                        <li><strong>Follow Us</strong></li><br />
                        <li>Instagram</li>
                        <li>Facebook</li>
                        <li>LinkedIn</li>
                        <li>YouTube</li>
                    </ul>

                </div>
            </div>

            <div className="blog_footer_row">
                <span> 2019 © Afrianska. All rights reserved.</span>
            </div>
        </div>

    </div>
)