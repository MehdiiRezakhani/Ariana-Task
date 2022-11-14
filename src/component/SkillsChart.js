import React from "react";
import { Pie } from "react-chartjs-2";

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
            data: skillsCounts,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
              ],
              borderWidth: 1,
        },
        ],
    };

    return (
        <div>
            <Pie data={data} />
        </div>
    );
};

export default SkillsChart;