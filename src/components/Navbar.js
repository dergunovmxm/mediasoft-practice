import React from "react";
import "./components.css"
import logo from "../images/logo.png"
import {Menu} from '../components/Menu/Menu'


export const Navbar = () => (
    <navbar className="navbar_images">
        <img className="logo_image" src={logo}/>
        <Menu/>  
    </navbar>
)