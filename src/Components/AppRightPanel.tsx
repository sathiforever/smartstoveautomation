import React from "react";
import { useLocation } from "react-router-dom";
import AddOrEditContent from "./AddOrEditContent";
import MembersList from "./MembersList";
import StoveSetting from "./StoveSetting";

const AppRightPanel = () => {
  const location = useLocation();
  const isStoveSetting = location.pathname === "/StoveSetting";
  const isAddOrEditContent = location.pathname === "/content/addoredit";

  return (
    <section className="rightPanel">
      <div className="rightPanel-container">
        {isStoveSetting ? (
          <section className="settingPanel">
            <div className="settingPanelHead">
              <h3>Stove setting</h3>
            </div>
            <div className="setting-container">
              <StoveSetting />
            </div>
          </section>
        ) : (
          <>
            <section className="memberPanel">
              <div className="memberPanelHead">
                <h3>Lovely Team Member</h3>
              </div>
              <div className="teamMember-container">
                <MembersList />
              </div>
            </section>
            <section className="aboutusPanel">
              <div className="aboutusPanelHead">
                <h3>About project</h3>
              </div>
              <div className="aboutus-container">
                {isAddOrEditContent ? (
                  <AddOrEditContent />
                ) : (
                  "Project explanation content here"
                )}
              </div>
            </section>
          </>
        )}
      </div>
    </section>
  );
};

export default AppRightPanel;
