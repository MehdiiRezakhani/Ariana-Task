import React from "react";
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";

const SkillsChart = ({skillsData}) => {
    // create labels and counts from this object
    const skillsLabels = [];
    const skillsCounts = []
    for(let x in skillsData) {
        skillsLabels.push(x)
        skillsCounts.push(skillsData[x])
    }
    //create data for chart
    const data = {
        labels: skillsLabels,
        datasets: [
        {
            label: "Skills Chart",
            backgroundColor: "rgb(255, 99, 132)",
            borderColor: "rgb(255, 99, 132)",
            data: skillsCounts,
        },
        ],
    };

    return (
        <div>
            <Bar data={data} />
        </div>
    );
};

export default SkillsChart;