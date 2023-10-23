import React from 'react'
import CharBar from './ChartBar.jsx'
import './Chart.css'
function Chart(props) {
    const dataPointValues = props.datapoints.map(datapoint => datapoint.value )
    const totalMaximum=Math.max(...dataPointValues)
    return (
        <div className='chart' >

            {props.datapoints.map(datapoint => <CharBar
                key={datapoint.label}
                value={datapoint.value}
                maxValue={totalMaximum}
                label={datapoint.label} />)}
        </div>
    )
}

export default Chart