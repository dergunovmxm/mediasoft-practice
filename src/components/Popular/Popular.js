import React from "react";
import './popular.css'
import img1 from "../../images/popular_img1.png"
import img2 from "../../images/popular_img2.png"
import img3 from "../../images/popular_img3.png"
import img4 from "../../images/popular_img4.png"
import icon1 from "../../images/icon1.png"
import icon2 from "../../images/icon2.png"


export const Popular = () => {
    return (
        <div className="popular_container">

            <div className="popular_row">

                <div className="popular_col">
                    <img className="popular_col_image" src={img2} />
                    <h1 className="popular_title">Porta proin tellus sed pulvinar odio eu pulvinar</h1>
                    <p className="popular_paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>


                    <div className="col">
                        <div className="row">
                            <span className="popular_first_date">May 5, 3 min read</span><br />
                            <span className="popula_main_span" >Samatha Leuthex</span>
                        </div>

                        <div className="row">
                            <img className="popular_main_icon1" src={icon1} />
                            <img className="popular_main_icon2" src={icon2} />
                        </div>
                    </div>

                </div>

                <div className="popular_col">

                    <img className="popular_col_image" src={img4} />
                    <h1 className="popular_title">Non quam tortor, proin eu egestas scelerisque purus.</h1>
                    <p className="popular_paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>


                    <div className="column">
                        <div className="row">
                            <span className="popular_first_date">May 5, 3 min read</span><br />
                            <span className="popula_main_span" >Samatha Leuthex</span>
                        </div>

                        <div className="row">
                            <img className="popular_main_icon1" src={icon1} />
                            <img className="popular_main_icon2" src={icon2} />
                        </div>
                    </div>

                </div>

                <div className="popular_col">

                    <img className="popular_col_image" src={img3} />
                    <h1 className="popular_title">Amet amet sed pharetra risus sit eget interdum.</h1>
                    <p className="popular_paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>


                    <div className="column">
                        <div className="row">
                            <span className="popular_first_date">May 5, 3 min read</span><br />
                            <span className="popula_main_span" >Samatha Leuthex</span>
                        </div>

                        <div className="row">
                            <img className="popular_main_icon1" src={icon1} />
                            <img className="popular_main_icon2" src={icon2} />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}