import React from "react";
import "./line.css"
import line from "../../images/line2.png"


export const Line = () => (
    <div className="line_container">
        <div className="line_row">
            <div className="line_col">
                <span className="popular_second_span">SEE ALL POPULAR ARTICLE</span>
            </div>
            <div className="line_col">
                <img className="line" src={line} />
            </div>
        </div>


    </div>
)