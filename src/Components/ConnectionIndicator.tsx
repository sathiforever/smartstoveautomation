import React, { useState } from "react";

const BluetoothComponent: React.FC = () => {
  const [isConnected, setIsConnected] = useState<boolean>(false);

  const checkBluetoothConnection = async () => {
    try {
      const device = await navigator.bluetooth.requestDevice({
        acceptAllDevices: true,
      });
      const server = await device.gatt?.connect();
      if (server) {
        setIsConnected(true);
      }
    } catch (error) {
      console.error("Bluetooth connection failed:", error);
      setIsConnected(false);
    }
  };

  return (
    <div className="connectionIndicator">
      <button onClick={checkBluetoothConnection}>Pair Bluetooth</button>
      {isConnected ? (
        <div className="dot active"></div>
      ) : (
        <div className="dot inactive"></div>
      )}
    </div>
  );
};

export default BluetoothComponent;
