"use client";

import { createContext, useContext, ReactNode, Dispatch, SetStateAction } from 'react';
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { useState, useEffect } from "react";
import { db } from "../firebase/firebase-config";
import toast from "react-hot-toast";;
import CurrentUserHook from '../hooks/currentUserHook';

type OriginalOrderType = {
    todoTasks: any[];
    inprogressTasks: any[];
    completedTasks: any[];
};

type TasksContextType = {
    tasks: any[],
    setTasks: Dispatch<SetStateAction<any[]>>,
    todoTasks: any[],
    setTodoTasks: Dispatch<SetStateAction<any[]>>,
    inprogressTasks: any[],
    setInprogressTasks: Dispatch<SetStateAction<any[]>>,
    completedTasks: any[],
    setCompletedTasks: Dispatch<SetStateAction<any[]>>,
    loading: boolean,
    setLoading: Dispatch<SetStateAction<boolean>>,
    checkFilter: boolean,
    setCheckFilter: Dispatch<SetStateAction<boolean>>,
    filteredTodoTasks: any[],
    setFilteredTodoTasks: Dispatch<SetStateAction<any[]>>,
    filteredInProgressTasks: any[],
    setFilteredInProgressTasks: Dispatch<SetStateAction<any[]>>,
    filteredCompletedTasks: any[],
    setFilteredCompletedTasks: Dispatch<SetStateAction<any[]>>,
    checkIncompleteFilter: boolean,
    setCheckIncompleteFilter: Dispatch<SetStateAction<boolean>>,
    sortedTasks: any[],
    setSortedTasks: Dispatch<SetStateAction<any[]>>,
    checkSort: boolean,
    setCheckSort: Dispatch<SetStateAction<boolean>>,
    originalOrder: OriginalOrderType | null,
    setOriginalOrder: Dispatch<SetStateAction<OriginalOrderType | null>>,
    disableDueDateButton: boolean,
    setDisableDueDateButton: Dispatch<SetStateAction<boolean>>
};

export const TasksContext = createContext<TasksContextType | null>(null);

export const UseTasksContext: React.FC<{ children: ReactNode }> = ({ children }) => {
    const { currentUser } = CurrentUserHook();
    const collectionRef = collection(db, "tasks");
    const [tasks, setTasks] = useState<any[]>([]);
    const [todoTasks, setTodoTasks] = useState<any[]>([]);
    const [inprogressTasks, setInprogressTasks] = useState<any[]>([]);
    const [completedTasks, setCompletedTasks] = useState<any[]>([]);
    const [filteredTodoTasks, setFilteredTodoTasks] = useState<any[]>([]);
    const [filteredInProgressTasks, setFilteredInProgressTasks] = useState<any[]>([]);
    const [filteredCompletedTasks, setFilteredCompletedTasks] = useState<any[]>([]);
    const [loading, setLoading] = useState(false);
    const [checkFilter, setCheckFilter] = useState(false);
    const [checkIncompleteFilter, setCheckIncompleteFilter] = useState(false);
    const [sortedTasks, setSortedTasks] = useState<any[]>([]);
    const [checkSort, setCheckSort] = useState(false);
    const [originalOrder, setOriginalOrder] = useState<OriginalOrderType | null>(null);
    const [disableDueDateButton, setDisableDueDateButton] = useState(false);

    const showNetworkAlert = () => {
        if (!navigator.onLine) {
            toast.error("Network is bad. Please check your internet connection.");
        };
    };

    useEffect(() => {
        try {
            setLoading(true);
            const queryTasks = query(
                collectionRef,
                where("taskData.userId", "==", currentUser?.uid)
            );
            const unsubscribe = onSnapshot(queryTasks, (snapshot) => {
                let tempTasks: any[] = [];
                snapshot.forEach((doc) => {
                    tempTasks.push({ ...doc.data(), id: doc.id });
                });
                setTasks(tempTasks);
                setLoading(false);
            });

            showNetworkAlert();

            window.addEventListener("online", showNetworkAlert);
            window.addEventListener("offline", showNetworkAlert);

            return () => {
                unsubscribe();
                window.removeEventListener("online", showNetworkAlert);
                window.removeEventListener("offline", showNetworkAlert);
            };
        } catch (error) {
            setLoading(false);
        }
    }, [currentUser]);

    useEffect(() => {
        if (tasks.length) {
            const filteredTodoTasks = tasks.filter((task) => task.taskData.taskType === "Todo");
            const filteredInProgressTasks = tasks.filter((task) => task.taskData.taskType === "In progress");
            const filteredCompletedTasks = tasks.filter((task) => task.taskData.taskType === "Completed");

            setTodoTasks(filteredTodoTasks);
            setInprogressTasks(filteredInProgressTasks);
            setCompletedTasks(filteredCompletedTasks);
        }

    }, [tasks]);
    return (
        <TasksContext.Provider value={{ tasks, setTasks, todoTasks, setTodoTasks, inprogressTasks, setInprogressTasks, completedTasks, setCompletedTasks, loading, setLoading, checkFilter, setCheckFilter, filteredTodoTasks, setFilteredTodoTasks, filteredInProgressTasks, setFilteredInProgressTasks, filteredCompletedTasks, setFilteredCompletedTasks, checkIncompleteFilter, setCheckIncompleteFilter, sortedTasks, setSortedTasks, checkSort, setCheckSort, originalOrder, setOriginalOrder, disableDueDateButton, setDisableDueDateButton }}>
            {children}
        </TasksContext.Provider>
    );
};

export function useTasks() {
    const context = useContext(TasksContext);
    if (!context) {
        throw new Error('useTasks must be used within an TasksContextProvider');
    }
    return context;
};