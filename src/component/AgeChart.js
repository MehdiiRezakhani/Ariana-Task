import React from "react";
import { Bar } from "react-chartjs-2";

const AgeChart = ({ageData}) => {
    // create labels and counts from this object
    const ageLabels = [];
    const ageCounts = []
    for(let x in ageData) {
        ageLabels.push(x)
        ageCounts.push(ageData[x])
    }
    //create data for chart
    const data = {
      labels: ageLabels,
      datasets: [
        {
          label: "Age Chart",
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