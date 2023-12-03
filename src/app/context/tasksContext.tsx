"use client";

import {createContext, useContext, ReactNode} from 'react';
import TasksHook from '../hooks/tasksHook';

type TasksContextType = {
    tasks: any,
    setTasks: React.Dispatch<React.SetStateAction<any>>,
    todoTasks: any,
    setTodoTasks: React.Dispatch<React.SetStateAction<any>>,
    inprogressTasks: any,
    setInprogressTasks: React.Dispatch<React.SetStateAction<any>>,
    completedTasks: any,
    setCompletedTasks: React.Dispatch<React.SetStateAction<any>>,
    loading: boolean,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
}

export const TasksContext = createContext<TasksContextType | undefined>(undefined)

export const UseTasksContext: React.FC<{children: ReactNode}> = ({children}) => {
    const {tasks, setTasks, todoTasks, setTodoTasks, inprogressTasks, setInprogressTasks, completedTasks, setCompletedTasks, loading, setLoading } = TasksHook();
    return (
        <TasksContext.Provider value={{tasks, setTasks, todoTasks, setTodoTasks, inprogressTasks, setInprogressTasks, completedTasks, setCompletedTasks, loading, setLoading}}>
            {children}
        </TasksContext.Provider>
    )
}

export function useTasks () {
    const context = useContext(TasksContext);
    if (!context) {
        throw new Error('useTasks must be used within an TasksContextProvider');
    }
    return context;
} 