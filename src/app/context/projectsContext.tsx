"use client";

import { createContext, useContext, ReactNode, Dispatch, SetStateAction } from 'react';
import { collection, onSnapshot } from "firebase/firestore";
import { useState, useEffect } from "react";
import { db } from "../firebase/firebase-config";
import CurrentUserHook from '../hooks/currentUserHook';
import { useParams } from "next/navigation";

type ProjectsContextType = {
    projects: any[],
    setProjects: Dispatch<SetStateAction<any[]>>,
    todoProjects: any[],
    setTodoProjects: Dispatch<SetStateAction<any[]>>,
    inprogressProjects: any[],
    setInprogressProjects: Dispatch<SetStateAction<any[]>>,
    completedProjects: any[],
    setCompletedProjects: Dispatch<SetStateAction<any[]>>,
    loading: boolean,
    setLoading: Dispatch<SetStateAction<boolean>>,
    checkFilter: boolean,
    setCheckFilter: Dispatch<SetStateAction<boolean>>,
    filteredTodoProjects: any[],
    setFilteredTodoProjects: Dispatch<SetStateAction<any[]>>,
    filteredInprogressProjects: any[],
    setFilteredInprogressProjects: Dispatch<SetStateAction<any[]>>,
    filteredCompletedProjects: any[],
    setFilteredCompletedProjects: Dispatch<SetStateAction<any[]>>,
    checkIncompleteFilter: boolean,
    setCheckIncompleteFilter: Dispatch<SetStateAction<boolean>>,
    sortedTasks: any[],
    setSortedTasks: Dispatch<SetStateAction<any[]>>,
    checkSort: boolean,
    setCheckSort: Dispatch<SetStateAction<boolean>>
};

export const ProjectsContext = createContext<ProjectsContextType | null>(null);

export const UseProjectsContext: React.FC<{ children: ReactNode }> = ({ children }) => {
    const params = useParams();
    const paramsId = params.id;
    const { currentUser } = CurrentUserHook();
    const collectionRef = collection(db, "projectsTasks");
    const [projects, setProjects] = useState<any[]>([]);
    const [todoProjects, setTodoProjects] = useState<any[]>([]);
    const [inprogressProjects, setInprogressProjects] = useState<any[]>([]);
    const [completedProjects, setCompletedProjects] = useState<any[]>([]);
    const [filteredTodoProjects, setFilteredTodoProjects] = useState<any[]>([]);
    const [filteredInprogressProjects, setFilteredInprogressProjects] = useState<any[]>([]);
    const [filteredCompletedProjects, setFilteredCompletedProjects] = useState<any[]>([]);
    const [loading, setLoading] = useState(false);
    const [checkFilter, setCheckFilter] = useState(false);
    const [checkIncompleteFilter, setCheckIncompleteFilter] = useState(false);
    const [sortedTasks, setSortedTasks] = useState<any[]>([]);
    const [checkSort, setCheckSort] = useState(false);

    useEffect(() => {
        try {
            setLoading(true);
            const unsubscribe = onSnapshot(collectionRef, (snapshot) => {
                setTodoProjects([]);
                setInprogressProjects([]);
                setCompletedProjects([]);
                const tempArray: any[] = [];
                snapshot.docs.forEach((doc) => {
                    const data = doc.data();
                    const id = (doc.id);
                    if (data.taskData && data.taskData.taskId == paramsId) {
                        tempArray.push({ ...data, id });
                    };

                });
                setProjects(tempArray);
                setLoading(false);
            });

            return () => unsubscribe();
        } catch (error) {
            console.log(error);
            setLoading(false);
        };
    }, [currentUser, paramsId]);

    useEffect(() => {
        if (projects.length) {
            const filteredTodoProjects = projects.filter((project) => project?.taskData?.taskType === "Todo");
            const filteredInprogressProjects = projects.filter((project) => project?.taskData?.taskType === "In progress");
            const filteredCompletedProjects = projects.filter((project) => project?.taskData?.taskType === "Completed");

            setTodoProjects(filteredTodoProjects);
            setInprogressProjects(filteredInprogressProjects);
            setCompletedProjects(filteredCompletedProjects);
        };

    }, [projects]);

    return (
        <ProjectsContext.Provider value={{ projects, setProjects, todoProjects, setTodoProjects, inprogressProjects, setInprogressProjects, completedProjects, setCompletedProjects, loading, setLoading, checkFilter, setCheckFilter, filteredTodoProjects, setFilteredTodoProjects, filteredInprogressProjects, setFilteredInprogressProjects, filteredCompletedProjects, setFilteredCompletedProjects, checkIncompleteFilter, setCheckIncompleteFilter, sortedTasks, setSortedTasks, checkSort, setCheckSort }}>
            {children}
        </ProjectsContext.Provider>
    );
};

export function useProjects() {
    const context = useContext(ProjectsContext);
    if (!context) {
        throw new Error('useProjects must be used within an ProjectsContextProvider');
    };
    return context;
};