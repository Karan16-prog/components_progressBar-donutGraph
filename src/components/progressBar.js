import "./progressBar.css";
import React, { useState, useEffect } from "react";

function ProgressBar(props) {
  const [number, setNumber] = useState(props.value);
  const [range, setRange] = useState({});

  const percentRange = (value) => {
    if (value < 25) return { span: "0% - 25%", color: "#EE887E" };
    else if (value >= 25 && value < 50)
      return { span: "25% - 50%", color: "#F1CF7E" };
    else if (value >= 50 && value < 75)
      return { span: "50% - 75%", color: "#7BBFE8" };
    else if (value >= 75 && value <= 100)
      return { span: "75% - 100%", color: "#5AC380" };
  };

  useEffect(() => {
    setRange(percentRange(number));
  }, []);

  return (
    <div className="progressBar_container">
      <div className="progressBar_header">
        <div>{range.span}</div>
        <div>{number}</div>
      </div>
      <div className="progressBar">
        <div
          className="progressFiller"
          style={{ width: `${number}%`, background: `${range.color}` }}
        ></div>
      </div>
    </div>
  );
}

export default ProgressBar;
