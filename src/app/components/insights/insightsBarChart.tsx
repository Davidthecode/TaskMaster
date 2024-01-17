"use client";

import { useState, useEffect } from "react";
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from "chart.js";
ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);
import { Bar } from "react-chartjs-2";
import { useTasks } from "@/app/context/tasksContext";
import Image from "next/image";
import spinner from "../../../../public/icons8-spinner.gif";

export default function InsightsBarChart() {
    const { tasks } = useTasks();
    const tasksMarkedAsCompleted = tasks.filter((task => task.taskData.completed));
    const overdueTasks = tasks.filter((task) => {
        const dueDate = new Date(task.taskData.dueDate);
        const currentDate = new Date();
        return dueDate < currentDate;
    });
    const [check, setCheck] = useState([tasksMarkedAsCompleted.length, overdueTasks.length]);

    useEffect(() => {
        setCheck([tasksMarkedAsCompleted.length, overdueTasks.length]);
    }, [tasksMarkedAsCompleted.length, overdueTasks.length]);

    const data = {
        labels: ["completed", "Overdue"],
        datasets: [
            {
                data: check,
                backgroundColor: "#d98659",
                borderColor: "#d98659",
                borderWidth: 1,
                barThickness: 20,
            }
        ]
    };

    const options = {
        maintainAspectRatio: false,
    };

    return (
        <section className="w-[48%] h-[20rem] flex flex-col justify-center items-center border rounded-md border-gray-300 px-3">
            <h1 className="mt-4 font-medium">Tasks by completion status</h1>
            <div className="w-[90%] h-[80%]">
                {!tasks.length ? (
                    <div className="flex justify-center items-center mt-32">
                        <Image src={spinner} alt="image" width={20} height={20} />
                    </div>
                ) : (
                    <Bar
                        style={
                            { paddingBlock: "20px", height: "75%", width: "75%" }
                        }
                        data={data}
                        options={options}
                    >
                    </Bar>
                )}
            </div>
        </section>
    );
};