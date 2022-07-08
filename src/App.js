import "./App.css";
import ProgressBar from "./components/progressBar";
import DonutChart from "./components/donutChart";
import React, { useState } from "react";

function App() {
  const array = [90, 50, 40, 10]; //progress bar values

  // data for donut graph
  //data.name can be rearranged but the string should be the same
  const data = [
    { name: "75 - 100%", value: 10 },
    { name: "50% - 75%", value: 20 },
    { name: "25% - 50%", value: 10 },
    { name: "0% - 25%", value: 10 },
  ];

  return (
    <div className="App">
      {/* Progress Bars mapped */}
      <div className="containerOne">
        {array.map((item, index) => {
          return (
            <div key={index} className="temp_items">
              <ProgressBar key={index} value={item} />
            </div>
          );
        })}
      </div>

      {/* Donut Chart */}
      <div className="containerTwo">
        <DonutChart data={data} />
      </div>
    </div>
  );
}

export default App;
