import { Line } from "react-chartjs-2";
import { dateFormat } from "../utis";
import { monthMapping } from "../settings";

const LineChart = (props) => {

    var data = {
        labels: [],
        datasets: [
            {
                label: "date wise spend",
                data: [],
                fill: false,
                tension: 0.1
            }
        ]
    }
    console.log('data---', props.data)

    if (props.data) {
        for (let item in props.data) {
            let label;
            if (props.type === 'D') label = dateFormat(new Date(props.data[item]?._id))
            else if (props.type === 'M') label = monthMapping[props.data[item]?._id]
            data.labels.push(label)
            data.datasets[0].data.push(props.data[item]?.amount)
        }
    }
    console.log('data---xxxx', data)



    return (
        <>
            <Line data={data}></Line>
        </>
    )
}

export default LineChart;