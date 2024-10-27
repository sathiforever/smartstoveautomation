import React, { useState, useEffect } from "react";

const BluetoothComponent: React.FC = (status: any) => {
  const [isConnected, setIsConnected] = useState<boolean>(false);

  useEffect(() => {
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

    checkBluetoothConnection();
  }, []);

  return (
    <div className="connectionIndicator">
      {isConnected ? (
        <div className="dot active"></div>
      ) : (
        <div className="dot inactive"></div>
      )}
    </div>
  );
};

export default BluetoothComponent;
