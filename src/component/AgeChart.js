import React from "react";
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";

const AgeChart = ({ageData}) => {
  const ageLabels = [];
    const ageCounts = []
    for(let x in ageData) {
        ageLabels.push(x)
        ageCounts.push(ageData[x])
    }
  const data = {
    labels: ageLabels,
    datasets: [
      {
        label: "My First dataset",
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgb(255, 99, 132)",
        data: ageCounts,
      },
    ],
  };
  return (
    <div>
      <Bar data={data} />
    </div>
  );
};

export default AgeChart;