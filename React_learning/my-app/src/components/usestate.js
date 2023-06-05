import React, { useState } from "react";

export default function Usestate() {
  const [color, setColor] = useState("rgba(172, 255, 47, 0.795)");
  const randomcolor = () => {
    const random = "#" + Math.floor(Math.random() * 16777215).toString(16);
    return random;
  };
  const changecolor = () => {
    console.log("event handler call");
    const randomcolor1 = randomcolor();
    setColor(randomcolor1);
  };
  return (
    <div className="colorizer">
      <h4>this is the usestate hook</h4>
      <div className="box" style={{ backgroundColor: color }}>{color}</div>
      <button onClick={changecolor}>Change colour</button>
    </div>
  );
}
