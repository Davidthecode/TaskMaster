"use client";

import { useState, useEffect } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import { useTasks } from "@/app/context/tasksContext";
import Image from "next/image";
import spinner from "../../../../public/icons8-spinner.gif";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function InsightsPieChart() {
    const { tasks, loading } = useTasks();
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
        labels: ["Completed", "Overdue"],
        datasets: [
            {
                data: check,
                backgroundColor: "#6a8ee9",
                borderColor: "white",
                borderWidth: 1,
            }
        ]
    };

    const options = {
        maintainAspectRatio: false,
    };
    return (
        <section className="border rounded-md border-gray-300 w-[48%] h-[20rem] ml-auto flex flex-col justify-center items-center smallTablet:ml-0 smallTablet:mt-10 smallTablet:w-[85%] mobile:ml-0 mobile:mt-10 mobile:w-[100%]">
            <h1 className="mt-4 font-medium">Tasks by completion status</h1>
            <div className="w-[100%] h-[80%]">
                {loading ? (
                    <div className="flex justify-center items-center mt-32">
                        <Image src={spinner} alt="image" width={20} height={20} />
                    </div>
                ) : (
                    <Pie
                        style={
                            { paddingBlock: "20px" }
                        }
                        data={data}
                        options={options}
                    />
                )}
            </div>
        </section>
    )
};