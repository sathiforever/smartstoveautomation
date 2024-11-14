import React from "react";
import "./assect/styles/App.scss";
import AppRightPanel from "./Components/AppRightPanel";
import AppLeftPanel from "./Components/AppLeftPanel";

function App() {
  return (
    <div className="App">
      <div id="MainContainer" className="container">
        <AppLeftPanel />
        <AppRightPanel />
      </div>
    </div>
  );
}

export default App;
