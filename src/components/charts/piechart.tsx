import React from "react";
import { Chart } from "react-google-charts";

export const data = [
    ["Task", "Hours per Day"],
    ["Finished Training", 22],
    ["Chapter A", 34],
    ["Chapter B", 22],
    ["Chapter C", 220],
    ["Haven't Started Yet", 7],
];

export const options = {
    is3D: true,
};


function Piechart() {
    return (
        <Chart
            chartType="PieChart"
            data={data}
            options={options}
        // width={"100%"}
        // height={"400px"}
        />
    )
}

export default Piechart;