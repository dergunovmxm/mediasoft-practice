import React from "react";
import "./menu.css"
import vector from "../../images/Vector.png"
import { myFunction } from "../../scripts/menu";

export const Menu = () => (

  <div className="dropdown">
    <img className="dropbtn" src={vector} onClick={myFunction} />

    <div id="myDropdown" className="dropdown-content">

      <ul>
        <li><strong><a>About Us</a></strong></li><br />
        <li><a href="#">About</a></li>
        <li><a href="#">What We Do</a></li>
        <li><a href="#">Project</a></li>
        <li><a href="#">How It  Work With Us</a></li>
      </ul>

    </div>
  </div>
)