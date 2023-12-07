"use client";

import { createContext, useContext, ReactNode, Dispatch, SetStateAction } from 'react';
import TasksHook from '../hooks/tasksHook';

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
    setCheckSort: Dispatch<SetStateAction<boolean>>
};

export const TasksContext = createContext<TasksContextType | undefined>(undefined);

export const UseTasksContext: React.FC<{ children: ReactNode }> = ({ children }) => {
    const { tasks, setTasks, todoTasks, setTodoTasks, inprogressTasks, setInprogressTasks, completedTasks, setCompletedTasks, loading, setLoading, checkFilter, setCheckFilter, filteredTodoTasks, setFilteredTodoTasks, filteredInProgressTasks, setFilteredInProgressTasks, filteredCompletedTasks, setFilteredCompletedTasks, checkIncompleteFilter, setCheckIncompleteFilter, sortedTasks, setSortedTasks, checkSort, setCheckSort } = TasksHook();
    return (
        <TasksContext.Provider value={{ tasks, setTasks, todoTasks, setTodoTasks, inprogressTasks, setInprogressTasks, completedTasks, setCompletedTasks, loading, setLoading, checkFilter, setCheckFilter, filteredTodoTasks, setFilteredTodoTasks, filteredInProgressTasks, setFilteredInProgressTasks, filteredCompletedTasks, setFilteredCompletedTasks, checkIncompleteFilter, setCheckIncompleteFilter, sortedTasks, setSortedTasks, checkSort, setCheckSort }}>
            {children}
        </TasksContext.Provider>
    )
};

export function useTasks() {
    const context = useContext(TasksContext);
    if (!context) {
        throw new Error('useTasks must be used within an TasksContextProvider');
    }
    return context;
};