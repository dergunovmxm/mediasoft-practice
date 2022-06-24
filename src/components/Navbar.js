import React from "react";
import "./components.css"
import logo from "../images/logo.png"
import vector from "../images/Vector.png"

export const Navbar = () => (
    <navbar>
        <div className="navbar">
            <div className="navbar_images">
                <img className="logo_image" src={logo}/>
                <img className="menu_image" src={vector}/>
            </div>
        </div>
    </navbar>
)