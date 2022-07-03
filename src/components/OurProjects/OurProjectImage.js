import React from "react";
import "./ourProjectsStyle.css"
import img1 from "../../images/our_project_img1.png"
import img2 from "../../images/our_project_img2.png"
import img3 from "../../images/our_project_img3.png"
import { HomePageFooter } from "../../components/HomePageFooter/HomePageFooter";


export const OurProjectImage = () => (
    <div className="our_project_image">
        <div className="our_project_image1">
            <img src={img1} />
            <h1>Smart Home Installation</h1>
            <span>In Muarakana Housing Estate</span>
        </div>

        <div className="our_project_image2">
            <img src={img2} />
            <h1>Sparklite App</h1>
            <span>Marketplace</span>
        </div>

        <div className="our_project_image3">
            <img src={img3} />
            <h1>Car-Rapetition App</h1>
            <span>Board</span>
        </div>
        <div className="our_project_foot">
        <HomePageFooter/>
        </div>
        
   
    </div>
)
