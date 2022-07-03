import React from "react";
import "./homePageFooter.css"
import { BlogFooter } from "../../components/BlogFooter/BlogFooter";

export const HomePageFooter = () => (
    <div className="home_footer">

        <div className="home_row_1">
            <div className="home_col">
                <h1>Our Beloved Client</h1>
            </div>
            <div className="home_col">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
            </div>
        </div>


        <div className="home_row_1">
            <div className="home_row_1_box">
                <div className="home_box">
                    <h1>LOGO CLIENT 1</h1>
                </div>

                <div className="home_box">
                    <h1>LOGO CLIENT 2</h1>
                </div>

                <div className="home_box">
                    <h1>LOGO CLIENT 3</h1>
                </div>

                <div className="home_box">
                    <h1>OLOGO CLIENT 4</h1>
                </div>

                <div className="home_box">
                    <h1>LOGO CLIENT 5</h1>
                </div>

                <div className="home_box">
                    <h1>LOGO CLIENT 6</h1>
                </div>

                <div className="home_box">
                    <h1>LOGO CLIENT 7</h1>
                </div>

                <div className="home_box more">
                    <h1>MORE CLIENT</h1>
                </div>
            </div>
        </div>
        <div className="home_row">
            <BlogFooter />
        </div>
    </div>
)