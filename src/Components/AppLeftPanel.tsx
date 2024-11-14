import React, { ChangeEvent, useEffect, useState } from "react";
import BluetoothComponent from "./ConnectionIndicator";
import MoreMenu from "./MoreMenu";
import Temperature from "./Temperature";
import data from "./../assect/data.json";

interface TempLevel {
  min: string;
  max: string;
}

interface PinState {
  pin: string;
  tempLevel: TempLevel;
  isTempSet: boolean;
}

const AppLeftPanel = () => {
  const [pins, setPins] = useState<PinState[]>([]);
  const [selectedPin, setSelectedPin] = useState<string>("");
  const [availablePins, setAvailablePins] = useState<string[]>([]);
  const [temperatureLevels, setTemperatureLevels] = useState<string[]>([]);

  useEffect(() => {
    // Load data from JSON file (simulated with local storage)
    const savedData = localStorage.getItem("data");
    if (savedData) {
      const parsedData = JSON.parse(savedData);
      if (
        parsedData.pins.length === 0 &&
        parsedData.temperatureLevels.length === 0 &&
        parsedData.pinStates.length === 0
      ) {
        // If savedData is empty, initialize with data.json
        setAvailablePins(data.pins);
        setTemperatureLevels(data.temperatureLevels);
        setPins(data.pinStates);
      } else {
        setAvailablePins(parsedData.pins);
        setTemperatureLevels(parsedData.temperatureLevels);
        setPins(parsedData.pinStates);
      }
    } else {
      setAvailablePins(data.pins);
      setTemperatureLevels(data.temperatureLevels);
      setPins(data.pinStates);
    }
  }, []);

  useEffect(() => {
    // Save data to local storage (simulating writing to JSON file)

    const dataToSave = {
      pins: availablePins.sort(),
      temperatureLevels,
      pinStates: pins,
    };
    localStorage.setItem("data", JSON.stringify(dataToSave));
  }, [pins, availablePins, temperatureLevels]);

  const handlePinChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;
    setSelectedPin(value);
  };

  const setTemperature = (
    event: ChangeEvent<HTMLSelectElement>,
    pin: string
  ) => {
    const { value } = event.target;
    const [min, max] = value.split("-");
    const updatedPins = pins.map((p) =>
      p.pin === pin ? { ...p, tempLevel: { min, max }, isTempSet: true } : p
    );
    setPins(updatedPins);
  };

  const handleTurnOff = (pin: string) => {
    const updatedPins = pins.filter(p => p.pin !== pin);
    setPins(updatedPins);
    setAvailablePins([...availablePins, pin]);
  };

  const addPin = () => {
    if (selectedPin && !pins.some((pin) => pin.pin === selectedPin)) {
      const defaultTempLevel = temperatureLevels[0].split("-");
      setPins([
        ...pins,
        { pin: selectedPin, tempLevel: { min: defaultTempLevel[0], max: defaultTempLevel[1] }, isTempSet: true },
      ]);
      setAvailablePins(availablePins.filter(pin => pin !== selectedPin));
      setSelectedPin(""); // Reset selected pin after adding
    }
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
          <div className="form-row initialSelection">
            <span>Enter Stove Pin:</span>
            <select
              name="stovePin"
              onChange={handlePinChange}
              value={selectedPin}
            >
              <option value="">--</option>
              {availablePins.map((pin) => (
                <option
                  key={pin}
                  value={pin}
                  disabled={pins.some((p) => p.pin === pin)}
                >
                  {pin}
                </option>
              ))}
            </select>
            <button
              type="button"
              className="on-button"
              onClick={addPin}
              disabled={
                !selectedPin || pins.some((pin) => pin.pin === selectedPin)
              }
            >
              On Burner
            </button>
          </div>
          <div className="burnerContainer">
            {pins.map((pin) => (
              <div key={pin.pin} className="form-row burnerList">
                <span>Temperature Level for {pin.pin}</span>
                <div className="turnOffBtn">
                  <select
                    name="temp"
                    onChange={(e) => setTemperature(e, pin.pin)}
                    value={`${pin.tempLevel.min}-${pin.tempLevel.max}`}
                  >
                    <option value="">---</option>
                    {temperatureLevels.map((level) => (
                      <option key={level} value={level}>
                        {level}
                      </option>
                    ))}
                  </select>
                  {pin.isTempSet && (
                    <button
                      type="button"
                      onClick={() => handleTurnOff(pin.pin)}
                    >
                      Turn Off
                    </button>
                  )}
                </div>
                <Temperature
                  tempVal={pin.tempLevel}
                  isVisible={pin.isTempSet}
                />
              </div>
            ))}
          </div>
        </form>
      </div>
    </section>
  );
};

export default AppLeftPanel;
