import React from 'react'
import { Chart } from "react-google-charts";


export const data = {
    ActiveWorkers: [
        ["Days", "Active Workers"],
        ["3 Jun", 100,],
        ["4 Jun", 120,],
        ["5 Jun", 120,],
        ["6 Jun", 250,],
        ["7 Jun", 280,],
        ["8 Jun", 200,],
        ["9 Jun", 220,],
        ["10 Jun", 100,],
        ["11 Jun", 300,],
        ["12 Jun", 350,],
        ["13 Jun", 380,],
        ["14 Jun", 400,],
    ],
    TrainingCompletions: [
        ["Days", "Training Completions"],
        ["M", 100,],
        ["T", 120,],
        ["W", 120,],
        ["T", 250,],
        ["F", 280,],
        ["S", 200,],
        ["s", 220,],
    ]
}
export function Columnchart1() {
    return (
        <Chart chartType="ColumnChart"
            //  width="100%" height="400px" 
            data={data.ActiveWorkers} />

    )
}
export function Columnchart2() {
    return (
        <Chart chartType="ColumnChart"
            //  width="100%" height="400px" 
            data={data.TrainingCompletions} />

    )
}

