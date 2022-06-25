import React from "react";
import "./components.css"
import logo from "../images/logo.png"
import vector from "../images/Vector.png"
import {Menu} from '../components/Menu/Menu'
import { myFunction } from "../scripts/menu";

export const Navbar = () => (
    <navbar>
        <div className="navbar">

            <div className="navbar_images">
                <img className="logo_image" src={logo}/>
                <Menu/>
            </div>
            
        </div>      
    </navbar>
)