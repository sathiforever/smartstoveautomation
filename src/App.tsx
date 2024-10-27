import React, { ChangeEvent, useEffect, useState } from "react";
import MoreMenu from "./Components/MoreMenu";
import "./assect/styles/App.scss";
import BluetoothComponent from "./Components/ConnectionIndicator";
import Temperature from "./Components/Temperature";
import MembersList from "./Components/MembersList";
import landingPage from "./assect/images/landing-page.jpg";
import { Link } from "react-router-dom";

interface TempLevel {
  min: string;
  max: string;
}

function App() {
  const [tempLevel, setTempLevel] = useState<TempLevel>({ min: "", max: "" });
  const [isTempSet, setIsTempSet] = useState<boolean>(false);
  const [loadPage, setLoadPage] = useState<boolean | null>(null);
  // const [btConnection, setBtConnection] = useState<boolean | null>(null);

  useEffect(() => {
    const lstate = localStorage.getItem("landingPageStatus");
    if (lstate) {
      setLoadPage(lstate === "true");
    } else {
      localStorage.setItem("landingPageStatus", "true");
      setLoadPage(true);
    }

    //Blutthooth connection
    // const btStatus = localStorage.getItem("bluethoothStatus");
    // if(btStatus){
    //   setBtConnection(btStatus === 'true')
    // }else{
    //   localStorage.setItem("bluethoothStatus", "true");
    //   setBtConnection(true);
    // }
  }, []);

  const handlePageChange = () => {
    localStorage.setItem("landingPageStatus", "false");
    setLoadPage(false);
  };

  const getStovePin = (event: ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = event.target;
    console.log(name, "===", value);
  };

  const setTemperature = (event: ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;
    const [min, max] = value.split("-");
    setTempLevel({ min, max });
    setIsTempSet(value !== "");
  };

  return (
    <div className="App">
      <div id="MainContainer" className="container">
        <section className="leftPanel">
          <div className="leftPanelHead">
            <BluetoothComponent />
            <div className="additionalMenu">
              <MoreMenu />
            </div>
          </div>
          <div className="mainWorkArea">
            {loadPage === null ? (
              <p>Loading...</p>
            ) : loadPage ? (
              <div className="landingPage-container">
                <button onClick={handlePageChange}>
                  <img
                    src={landingPage}
                    alt="landing btn"
                    className="landingPage-img"
                  />
                </button>
              </div>
            ) : (
              <form>
                <div className="form-row">
                  <span>Enter Stove Pin (Optional):</span>
                  <select name="stovePin" onChange={getStovePin}>
                    <option value={""}>--</option>
                    <option value={"A1"}>A1</option>
                    <option value={"A2"}>A2</option>
                    <option value={"A3"}>A3</option>
                  </select>
                </div>
                <div className="form-row">
                  <span>Temperature Level</span>
                  <select name="temp" onChange={setTemperature}>
                    <option value="">---</option>
                    <option value="275-325">Low</option>
                    <option value="350-375">Medium</option>
                    <option value="400-425">Medium-High</option>
                    <option value="450-500">High</option>
                  </select>
                </div>
                <div className="form-row">
                  <span>Choose Temperature</span>
                  <Temperature tempVal={tempLevel} isVisible={isTempSet} />
                </div>
                <div className="form-row">
                  <button
                    type="button"
                    className={isTempSet ? "on-button" : "off-button"}
                  >
                    {isTempSet ? "On" : "Off"}
                  </button>
                </div>
              </form>
            )}
          </div>
        </section>
        <section className="rightPanel">
          <div className="rightPanel-container">
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
                <h3>about us</h3>
              </div>
              <div className="aboutus-container">content</div>
            </section>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
