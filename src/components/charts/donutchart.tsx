import React from 'react'
import { Chart } from "react-google-charts";

export const data = [
    ["Passing", "Result"],
    ["Passed", 1423],
    ["Failed", 134],

];

export const options = {
    title: "My Daily Activities",
    pieHole: 0.4,
    is3D: false,
};

function Donutchart() {
    return (
        <Chart
            chartType="PieChart"

            data={data}
            options={options}
        />
    )
}

export default Donutchart;