import React, { ChangeEvent, useEffect, useState } from "react";
import "./../assect/styles/temperature.css";

interface TempLevel {
  min: string;
  max: string;
}

interface TemperatureProps {
  tempVal: TempLevel;
  isVisible: boolean;
}

const Temperature: React.FC<TemperatureProps> = ({ tempVal,isVisible }) => {
  const [fahrenheit, setFahrenheit] = useState<number>(0);

  const updateTemperature = (event: ChangeEvent<HTMLInputElement>) => {
    const inputVal = Number(event.target.value);
    setFahrenheit(inputVal);
  };

  useEffect(() => {
    // Ensure the fahrenheit value is within the min and max range
    if (fahrenheit < Number(tempVal.min)) {
      setFahrenheit(Number(tempVal.min));
    } else if (fahrenheit > Number(tempVal.max)) {
      setFahrenheit(Number(tempVal.max));
    }
  }, [tempVal, fahrenheit]);

  return (
    <>
      <input
        type="range"
        id="temperatureSlider"
        min={tempVal.min}
        max={tempVal.max}
        step="1"
        value={fahrenheit}
        onChange={updateTemperature}
      />
      <output htmlFor="temperatureSlider" id="convertedValue">
        {fahrenheit}°F
      </output>
    </>
  );
};

export default Temperature;
