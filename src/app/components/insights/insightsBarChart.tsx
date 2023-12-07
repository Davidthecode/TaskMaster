"use client"

import { useState } from "react"
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from "chart.js";
ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);
import { Bar } from "react-chartjs-2";

export default function InsightsBarChart() {
    const [check, setCheck] = useState([1, 2, 3, 4])
    const data = {
        labels: ["Mon", "Tue", "Wed", "man"],
        datasets: [
            {
                label: "369",
                data: check,
                backgroundColor: "#d98659",
                borderColor: "#d98659",
                borderWidth: 1,
            }
        ]
    }

    const options = {
        maintainAspectRatio: false,
    }
    return (
        <section className="w-[48%] h-[20rem] flex flex-col justify-center items-center border rounded-md border-gray-300 px-3">
            <h1 className="mt-4 font-medium">Tasks by completion status</h1>
            <div className="w-[90%] flex justify-center items-center h-[80%]">
                <Bar
                    style={
                        { paddingBlock: "20px", height: "75%", width: "75%" }
                    }
                    data={data}
                    options={options}
                >
                </Bar>
            </div>
        </section>
    )
}