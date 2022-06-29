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
import right from "../../images/right.png"
import left from "../../images/left.png"

export const AllArticles = () => {
    return (
        <div className="articles_container">
            <span className="articles_first_span">ALL ARTICLE</span>

            <div className="articles_box1">
                <h1 className="articles_box1_title">Massa eu in laoreet enim augue vulputate nunc</h1>
                <p className="articles_box1_paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lectus quisque magna in nisl nibh bibendum ipsum, elit duis. Donec.</p>
                <img className="articles_box1_image" src={art1} />
                <span className="articles_box1_span" >Samatha Leuthex</span>
                <span className="articles_box1_date">May 5, 3 min read</span>
                <img className="articles_box1_icon1" src={icon1} />
                <img className="articles_box1_icon2" src={icon2} />
            </div>

            <div className="articles_box2">
                <h1 className="articles_box2_title">Feugiat sodales at nullam tellus.</h1>
                <p className="articles_box2_paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lectus quisque magna in nisl nibh bibendum ipsum, elit duis. Donec.</p>
                <img className="articles_box2_image" src={art2} />
                <span className="articles_box2_span" >Samatha Leuthex</span>
                <span className="articles_box2_date">May 5, 3 min read</span>
                <img className="articles_box2_icon1" src={icon1} />
                <img className="articles_box2_icon2" src={icon2} />
            </div>

            <div className="articles_box3">
                <h1 className="articles_box3_title">Feugiat sodales at nullam tellus.</h1>
                <p className="articles_box3_paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lectus quisque magna in nisl nibh bibendum ipsum, elit duis. Donec.</p>
                <img className="articles_box3_image" src={art3} />
                <span className="articles_box3_span" >Samatha Leuthex</span>
                <span className="articles_box3_date">May 5, 3 min read</span>
                <img className="articles_box3_icon1" src={icon1} />
                <img className="articles_box3_icon2" src={icon2} />
            </div>

            <div className="articles_box4">
                <h1 className="articles_box4_title">Feugiat sodales at nullam tellus.</h1>
                <p className="articles_box4_paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lectus quisque magna in nisl nibh bibendum ipsum, elit duis. Donec.</p>
                <img className="articles_box4_image" src={art4} />
                <span className="articles_box4_span" >Samatha Leuthex</span>
                <span className="articles_box4_date">May 5, 3 min read</span>
                <img className="articles_box4_icon1" src={icon1} />
                <img className="articles_box4_icon2" src={icon2} />
            </div>

            <div className="articles_box5">
                <h1 className="articles_box5_title">Feugiat sodales at nullam tellus.</h1>
                <p className="articles_box5_paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lectus quisque magna in nisl nibh bibendum ipsum, elit duis. Donec.</p>
                <img className="articles_box5_image" src={art5} />
                <span className="articles_box5_span" >Samatha Leuthex</span>
                <span className="articles_box5_date">May 5, 3 min read</span>
                <img className="articles_box5_icon1" src={icon1} />
                <img className="articles_box5_icon2" src={icon2} />
            </div>

            

            <span className="popular_last_span">See All Popular Article</span>
            <img className="popular_last_line" src={line}/>

            <img className="articles_left" src={left}/>
            <img className="articles_right" src={right}/>

            <span className="articles_new">New post</span>
            <span className="articles_old">Old post</span>


        </div>
    )
}