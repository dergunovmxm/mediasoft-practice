import React from "react";
import './popular.css'
import img1 from "../../images/popular_img1.png"
import img2 from "../../images/popular_img2.png"
import img3 from "../../images/popular_img3.png"
import img4 from "../../images/popular_img4.png"
import icon1 from "../../images/icon1.png"
import icon2 from "../../images/icon2.png"
import line from "../../images/line2.png"

export const Popular = () => {
    return (
        <div className="popular_container">
            <div className="popular_box1">
                <span className="popular_first_span">POPULAR</span>
                <h1 className="popular_first_title">Feugiat sodales at nullam tellus.</h1>
                <p className="popular_main_paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mi posuere nibh tempor fringilla porta pellentesque ipsum.</p>
                <img className="popula_main_image" src={img1} />
                <span className="popula_main_span" >Samatha Leuthex</span>
                <span className="popular_first_date">May 5, 3 min read</span>
                <img className="popular_main_icon1" src={icon1} />
                <img className="popular_main_icon2" src={icon2} />
            </div>

            <div className="popular_box2">
                <h1 className="popular_box2_title">Porta proin tellus sed pulvinar odio eu pulvinar</h1>
                <p className="popular_box2_paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <img className="popula_box2_image" src={img2} />
                <span className="popula_box2_span" >Samatha Leuthex</span>
                <span className="popular_fbox2_date">May 5, 3 min read</span>
                <img className="popular_box2_icon1" src={icon1} />
                <img className="popular_box2_icon2" src={icon2} />
            </div>

            <div className="popular_box3">
                <h1 className="popular_box3_title">Non quam tortor, proin eu egestas scelerisque purus.</h1>
                <p className="popular_box3_paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <img className="popula_box3_image" src={img3} />
                <span className="popula_box3_span" >Samatha Leuthex</span>
                <span className="popular_fbox3_date">May 5, 3 min read</span>
                <img className="popular_box3_icon1" src={icon1} />
                <img className="popular_box3_icon2" src={icon2} />
            </div>

            <div className="popular_box4">
                <h1 className="popular_box4_title">Amet amet sed pharetra risus sit eget interdum.</h1>
                <p className="popular_box4_paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <img className="popula_box4_image" src={img4} />
                <span className="popula_box4_span" >Samatha Leuthex</span>
                <span className="popular_fbox4_date">May 5, 3 min read</span>
                <img className="popular_box4_icon1" src={icon1} />
                <img className="popular_box4_icon2" src={icon2} />
            </div>

            <span className="popular_last_span">See All Popular Article</span>
            <img className="popular_last_line" src={line}/>
        </div>
    )
}