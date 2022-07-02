import React from "react";
import "./mainpopular.css"
import icon1 from "../../images/icon1.png"
import icon2 from "../../images/icon2.png"
import img1 from "../../images/popular_img1.png"



export const MainPopular = () => (
    <div className="main_popular_container">

        <div className="main_popular_row">
    
            <div className="main_popular_col">

                <h1 className="popular_first_title">Feugiat sodales at nullam tellus.</h1>
                <p className="popular_main_paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mi posuere nibh tempor fringilla porta pellentesque ipsum.</p>
                

                <div className="col">
                    <div className="row">
                        <span className="popular_first_date">May 5, 3 min read</span><br/>
                        <span className="popula_main_span" >Samatha Leuthex</span>
                    </div>

                    <div className="row">
                        <img className="popular_main_icon1" src={icon1} />
                        <img className="popular_main_icon2" src={icon2} />
                    </div>
                </div>



            </div>

            <div className="main_popular_col">
                <img className="popula_main_image" src={img1} />
            </div>

        </div>



    </div>


)