import React from "react";
import './allArticles.css'
import art1 from "../../images/art1.png"
import art2 from "../../images/art2.png"
import art3 from "../../images/art3.png"
import art4 from "../../images/art4.png"
import art5 from "../../images/art5.png"
import icon1 from "../../images/icon1.png"
import icon2 from "../../images/icon2.png"
import line from "../../images/line2.png"


export const AllArticles = () => {
    return (
        <div className="articles_container">
            <div className="article_box">

                <div className="article_row">

                    <div className="articles_col">
                        <img className="articles_image" src={art1} />
                    </div>

                    <div className="articles_col">

                        <h1 className="articles_title">Massa eu in laoreet enim augue vulputate nunc</h1>
                        <p className="articles_paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lectus quisque magna in nisl nibh bibendum ipsum, elit duis. Donec.</p>

                        <div className="art_col">
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

                <div className="article_row">

                    <div className="articles_col">
                        <img className="articles_image" src={art2} />
                    </div>

                    <div className="articles_col">
                        <h1 className="articles_title ">Feugiat sodales at nullam tellus.</h1>
                        <p className="articles_paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lectus quisque magna in nisl nibh bibendum ipsum, elit duis. Donec.</p>
                        <div className="art_col">
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

                <div className="article_row">

                    <div className="articles_col">
                        <img className="articles_image" src={art3} />
                    </div>

                    <div className="articles_col">
                        <h1 className="articles_title">Sociis purus pellentesque faucibus vitae et felis</h1>
                        <p className="articles_paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lectus quisque magna in nisl nibh bibendum ipsum, elit duis. Donec.</p>
                        <div className="art_col">
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


                <div className="article_row">

                    <div className="articles_col">
                        <img className="articles_image" src={art4} />
                    </div>
                    <div className="articles_col">
                        <h1 className="articles_title">Cursus feugiat mi pellentesque mauris sed eu.</h1>
                        <p className="articles_paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lectus quisque magna in nisl nibh bibendum ipsum, elit duis. Donec.</p>
                        <div className="art_col">
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

                <div className="article_row">

                    <div className="articles_col">
                        <img className="articles_image" src={art5} />
                    </div>

                    <div className="articles_col">

                        <h1 className="articles_title"> A morbi arcu curabitur etiam fringilla augue. </h1>
                        <p className="articles_paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lectus quisque magna in nisl nibh bibendum ipsum, elit duis. Donec.</p>
                       
                        <div className="art_col">
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

        </div >
    )
}