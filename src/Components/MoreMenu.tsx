import React from "react";
import {
  Routes,
  Route,
  Link,
} from "react-router-dom";
import "./../assect/styles/additionalMenu.css";
import StoveSetting from "./StoveSetting";

const MoreMenu = () => {
  return (
    <div className="MoreMenu-container">
      <button className="more-btn">
        <span className="more-dot"></span>
        <span className="more-dot"></span>
        <span className="more-dot"></span>
      </button>
      <div className="more-menu">
        <ul>
            <li>
              <Link to="/StoveSetting">Settings</Link>
            </li>
        </ul>
      </div>
    </div>
  );
};

export default MoreMenu;
