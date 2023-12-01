"use client"

import { useState } from "react"
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function InsightsPieChart() {
    const [check, setCheck] = useState([1, 2, 3, 4])
    const data = {
        labels: ["Mon", "Tue", "Wed", "man", "Fri", "Sat"],
        datasets: [
            {
                label: "369",
                data: check,
                backgroundColor: "#6a8ee9",
                borderColor: "white",
                borderWidth: 1,
            }
        ]
    }

    const options = {

    }
    return (
        <section className="w-[48%] ml-auto flex justify-center items-center h-[20rem] border rounded-md border-gray-300">
            <Pie
                style={
                    {paddingBlock: "20px", height: "80%", width: "60%" }
                }
                data={data}
                options={options}
            />
        </section>
    )
}