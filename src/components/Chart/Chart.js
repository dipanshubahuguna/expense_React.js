import React from 'react';
import ChartBar from './ChartBar';
import './Chart.css'
const Chart = (props) => {
    const dataPointValues = props.dataPoints.map((dataPoint)=> dataPoint.value)
    let totalMaximum = 0
    for (const i of dataPointValues){
        totalMaximum = Math.max(totalMaximum,i)
    } 
    // console.log(totalMaximum)
    return (
        <div className="chart">
            {props.dataPoints.map((dataPoint) =>(
                <ChartBar
                    key = {dataPoint.label}
                    value = {dataPoint.value}
                    maxValue = {totalMaximum}
                    label = {dataPoint.label}
                />
            ))}
        </div>
    )
}

export default Chart