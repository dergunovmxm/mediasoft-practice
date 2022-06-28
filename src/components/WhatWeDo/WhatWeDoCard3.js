import React from "react";
import "./whatWeDoStyles.css"
import card_image from "../../images/card_image3.png"
import arrow from "../../images/arrow1.png"



export const WhatWeDoCard3 = () => (

    <div className="what_we_do_card_3">
        <div className="what_we_do_card_3_container"></div>
        <img src={card_image} className="what_we_do_card_3_image" />
        <h1 className="what_we_do_card_3_title">Build Your Digital Product That Suitable For Your Need</h1>
        <p className="what_we_do_card_3_paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <a href="#" className="what_we_do_card_3_lm">Learn More</a>
        <img src={arrow} className="what_we_do_card_3_arrow"/>
    </div>
)