import React from "react";
import "../components.css"
import card_image from "../../images/card_image2.png"
import arrow from "../../images/arrow1.png"



export const WhatWeDoCard2 = () => (

    <div className="what_we_do_card_2">
        <div className="what_we_do_card_2_container"></div>
        <img src={card_image} className="what_we_do_card_2_image" />
        <h1 className="what_we_do_card_2_title">Make Your business To Be Better Famous In Internet</h1>
        <p className="what_we_do_card_2_paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <a href="#" className="what_we_do_card_2_lm">Learn More</a>
        <img src={arrow} className="what_we_do_card_2_arrow"/>
    </div>
)