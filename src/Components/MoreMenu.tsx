import React, { useState, MouseEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./../assect/styles/additionalMenu.css";

interface MoreMenuProps {
  setPanel: (panel: string) => void;
}

const MoreMenu: React.FC<MoreMenuProps> = ({ setPanel }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = (event: MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    setIsOpen(!isOpen);
  };

  const handleMenuClick = (panel: string, event: MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    setPanel(panel);
    navigate("/StoveSetting");
  };

  return (
    <div className="MoreMenu-container" onClick={(e) => e.stopPropagation()}>
      <Link to="/StoveSetting" className="settingMenu" onClick={() => setPanel("right")}>Settings</Link>
      {/* <button className="more-btn" onClick={toggleMenu}>
        <span className="more-dot"></span>
        <span className="more-dot"></span>
        <span className="more-dot"></span>
      </button>
      {isOpen && (
        <div className="more-menu" onClick={(e) => e.stopPropagation()}>
          <ul>
            <li>
              <Link to="/StoveSetting" onClick={() => setPanel("left")}>Settings (Left)</Link>
            </li>
          </ul>
        </div>
      )} */}
    </div>
  );
};

export default MoreMenu;
