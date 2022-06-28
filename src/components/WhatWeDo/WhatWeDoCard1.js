
import React from "react";
import "./whatWeDoStyles.css"
import card_image from "../../images/card_image1.png"
import arrow from "../../images/arrow1.png"



export const WhatWeDoCard1 = () => (

    <div className="what_we_do_card_1">
        <div className="what_we_do_card_1_container"></div>
        <img src={card_image} className="what_we_do_card_1_image" />
        <h1 className="what_we_do_card_1_title">Bring Technology To Your Comfrotable Home</h1>
        <p className="what_we_do_card_1_paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <a href="#" className="what_we_do_card_1_lm">Learn More</a>
        <img src={arrow} className="what_we_do_card_1_arrow"/>
    </div>
)