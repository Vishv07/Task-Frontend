import React from "react";
import { Line } from "react-chartjs-2";
import Filter from "./Filter";
import  "../assets/main.css";

const data = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
        label: "Monthly Savings",
        data: [33, 25, 35, 51, 54, 76],
        fill: false,
        borderColor: "#8856F3"
    },
    {
      label: "Hourly Commitment",
      data: [33, 45, 35, 40, 44, 86],
      fill: false,
      borderColor: "#742774"
    }
  ]
};

export default function GraphAnalysis() {

  return (
    <div>
       <h4>Monthly Savings vs Hourly Commitment </h4> 
       <Line data={data} />
       <br/>
       <Filter />
    </div>
  );
}
