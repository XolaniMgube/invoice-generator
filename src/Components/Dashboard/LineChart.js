
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

export function LineChart( {allData, options} ) {
    return (
        // <div className="h-6/12">
            <Line height={120} data={allData} options={options} />
        // </div>
    )
}