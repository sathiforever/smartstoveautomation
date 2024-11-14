import React, { ChangeEvent, useEffect, useState } from "react";
import BluetoothComponent from "./ConnectionIndicator";
import MoreMenu from "./MoreMenu";
import Temperature from "./Temperature";
import landingPage from "./../assect/images/landing-page.jpg";

interface TempLevel {
  min: string;
  max: string;
}

const AppLeftPanel = () => {
  const [tempLevel, setTempLevel] = useState<TempLevel>({ min: "", max: "" });
  const [isTempSet, setIsTempSet] = useState<boolean>(false);
  const [loadPage, setLoadPage] = useState<boolean | null>(null);
  //   const [panel, setPanel] = useState<string | null>(null);

  useEffect(() => {
    const lstate = localStorage.getItem("landingPageStatus");
    if (lstate) {
      setLoadPage(lstate === "true");
    } else {
      localStorage.setItem("landingPageStatus", "true");
      setLoadPage(true);
    }
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
    <section className="leftPanel">
      <div className="leftPanelHead">
        <BluetoothComponent />
        <div className="additionalMenu">
          <MoreMenu />
        </div>
      </div>
      <div className="mainWorkArea">
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
          <div className="form-row form-button">
            <button
              type="button"
              className={isTempSet ? "on-button" : "off-button"}
            >
              {isTempSet ? "On" : "Off"}
            </button>
            <button
              type="button"
              className={isTempSet ? "on-button" : "off-button"}
            >
              {isTempSet ? "On" : "Off"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default AppLeftPanel;
