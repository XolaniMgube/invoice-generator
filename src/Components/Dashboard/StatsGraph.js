import { FaCircle } from "react-icons/fa";
import { LineChart } from "./LineChart";
import { useState } from "react";
import { UserData } from "../../data/chartData";

export function StatsGraph() {
  const [allData, setAllData] = useState({
    labels: UserData.map((yr) => yr.year),
    datasets: [
      {
        // label: "",
        data: UserData.map((data) => data.userGain),
        backgroundColor: "transparent",
        borderColor: "#0096FF",
        borderJoinStyle: "bevel",
        pointBorderColor: "transparent",
        pointBorderWidth: 1,
        tension: 0.5
      },
      {
        // label: "Users Lost",
        data: UserData.map((data) => data.userLost),
        backgroundColor: "transparent",
        borderColor: "#27c643",
        tension: 0.5,
        pointBorderColor: "transparent"
      },
    ],
  });

  const options = {
    plugins: {
        legend: false
    },
    scales: {
        y: {
            grid: {
                display: false
            },
            ticks: {
                stepSize: 200
            }
        },
        x: {
            ticks: {
                stepSize: 2
            }
        }
    }
  }

  return (
    <div className="bg-white ms-3 my-4 rounded drop-shadow-md">
      <div className="flex pt-3 px-3">
        <div className="w-1/2 m-2">
          <div>
            <h6>Visitor Statistics</h6>
            <p className="text-xs">Jan - July 2023</p>
          </div>
        </div>
        <div className="w-1/2 flex m-2 justify-end">
          <div className="mx-3">
            <div className="flex items-center mb-1">
              <FaCircle size={10} className="mx-2 text-logoBlueThree" />
              <p className="text-xs my-0">LAST MONTH</p>
            </div>
            <div className="flex justify-center">
              <h6>476 553</h6>
            </div>
          </div>
          <div className="mx-3">
            <div className="flex items-center mb-1">
              <FaCircle size={10} className="mx-2 text-green" />
              <p className="text-xs my-0">LAST 6 MONTHS</p>
            </div>
            <div className="flex justify-center">
              <h6>76 553</h6>
            </div>
          </div>
        </div>
      </div>
      <div className="px-4 py-3 mx-auto h-1/2">
        <LineChart allData={allData} options={options} />
      </div>
    </div>
  );
}
