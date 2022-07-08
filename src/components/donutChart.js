import "./donutChart.css";
import React from "react";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";

const setColors = (item) => {
  if (item.name === "0% - 25%") return "#F2A71E";
  else if (item.name === "25% - 50%") return "#5AC380";
  else if (item.name === "50% - 75%") return "#4DA1FF";
  else if (item.name === "75 - 100%") return "#BFBFD0";
};

export default function DonutChart({ data }) {
  //sum of all the values
  const totalResumes = (data) => {
    return data.reduce(function (acc, data) {
      return acc + data.value;
    }, 0);
  };

  return (
    <div className="donutChart_container">
      <PieChart width={182} height={182}>
        {/* text inside donut graph */}
        <text
          className="center_text"
          x={91}
          y={80}
          textAnchor="middle"
          dominantBaseline="middle"
        >
          {totalResumes(data)}
        </text>
        <text
          className="center_text_lower"
          x={91}
          y={110}
          textAnchor="middle"
          dominantBaseline="middle"
        >
          Resume Matches
        </text>
        <Pie
          data={data}
          innerRadius={"90%"}
          outerRadius={"100%"}
          fill="#8884d8"
          paddingAngle={1}
          dataKey="value"
          isAnimationActive={false}
        >
          {data.map((item, index) => (
            <Cell key={`cell-${index}`} fill={setColors(item)} />
          ))}
        </Pie>
      </PieChart>

      <div className="donutChart_label">
        {data.map((item, index) => {
          return (
            <div key={item.name} className="label_item">
              <div
                className="label_color"
                style={{ backgroundColor: `${setColors(item)}` }}
              ></div>
              <div className="label_name">
                <spam style={{ fontSize: "1.125em", fontWeight: 400 }}>
                  {item.value} |{" "}
                </spam>
                {item.name}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
