import React from "react";
import "./../assect/styles/memberList.scss";
import member1 from "./../assect/images/member1.png";
import member2 from "./../assect/images/member2.png";

const MembersList = () => {
  return (
    <section className="team-section">
      <div className="team-container">
        <div className="team-member">
          <div className="image-container">
            <img src={member1} alt="Srinath" />
          </div>
          <div className="overlay">
            <div className="text">
              Srinath S<br />
              VI A
            </div>
          </div>
        </div>

        <div className="team-member">
          <div className="image-container">
            <img src={member2} alt="Member 2" />
          </div>
          <div className="overlay">
            <div className="text">
              Jaivanth
              <br />
              VI A
            </div>
          </div>
        </div>

        <div className="team-member">
          <div className="image-container">
            <img src={member1} alt="Member 3" />
          </div>
          <div className="overlay">
            <div className="text">
              Akshith S
              <br />
              VI A
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MembersList;
