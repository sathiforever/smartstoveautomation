import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./../assect/styles/additionalMenu.css";

interface MoreMenuProps {
  setPanel?: (panel: string) => void;
}

const MoreMenu: React.FC<MoreMenuProps> = () => {
  const [isSettingEnable, setIsSettingEnable] = useState(false);
  const onChangeMenuClick = () => {
    setIsSettingEnable(true)
  }
  return (
    <div className="MoreMenu-container" onClick={(e) => e.stopPropagation()}>
      {!isSettingEnable?<Link to="/StoveSetting" className="settingMenu" onClick={onChangeMenuClick}>Settings</Link>:
        <Link to="/home" className="settingMenu" onClick={() => setIsSettingEnable(false)}>Home</Link>
      }
    </div>
  );
};

export default MoreMenu;
