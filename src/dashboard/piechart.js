import React from "react";
import Chart from "chart.js/auto";
import { Pie } from "react-chartjs-2";
import { category } from "../settings";



const PieChart = (props) => {

    var data = {
        labels: [],
        datasets: [
            {
                label: "My First dataset",
                backgroundColor: ["rgb(255, 99, 132)", "red", "yellow", "green", "blue", "black"],
                data: [],
            },
        ],
    };

    if (props.data) {
        for (let item in props.data) {
            data.labels.push(category[props.data[item]?._id] ?? props.data[item]?._id)
            data.datasets[0].data.push(props.data[item].amount)
        }
    }
    return (
        <>
            <Pie data={data} />
        </>
    );
};
export default PieChart;