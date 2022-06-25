import React from "react";
import "./menu.css"
import vector from "../../images/Vector.png"
import { myFunction } from "../../scripts/menu";

export const Menu = () => (

  <div className="dropdown">
      <img className="dropbtn" src={vector} onClick={myFunction} />

    <div id="myDropdown" className="dropdown-content">
      <a href="#">Главная</a>
      <a href="#">О Нас</a>
      <a href="#">Контакты</a>
    </div>
  </div>
)