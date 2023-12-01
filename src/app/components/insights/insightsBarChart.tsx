"use client"

import { useState } from "react"
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from "chart.js";
ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);
import { Bar } from "react-chartjs-2";

export default function InsightsBarChart() {
    const [check, setCheck] = useState([1, 2, 3, 4])
    const data = {
        labels: ["Mon", "Tue", "Wed", "man", "Fri", "Sat"],
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

    }
    return (
        <section className="w-[48%] flex justify-center items-center h-[20rem] border rounded-md border-gray-300 px-3">
            <Bar
                style={
                    {paddingBlock: "20px", height: "80%", width: "80%"}
                }
                data={data}
                options={options}
            >
            </Bar>
        </section>
    )
}