import React from "react";
import "./arrow.css"
import right from "../../images/right.png"
import left from "../../images/left.png"

export const Arrows = () => {
    return (
        <div className="arrow_container">
            <div className="arrow_col">
                
                <div className="arrow_row">

                    <img className="articles_left" src={left} />
                    <span className="arrow_text">New post</span>

                </div>


                <div className="arrow_row">
                    <span className="arrow_text">Old post</span>
                    <img className="articles_right" src={right} />
                </div>

            </div>
        </div>
    )
}


