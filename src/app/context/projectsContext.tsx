"use client";

import { createContext, useContext, ReactNode, Dispatch, SetStateAction } from 'react';
import ProjectsHook from '../hooks/projectsHook';

type ProjectsContextType = {
    projects: any[],
    setProjects: Dispatch<SetStateAction<any[]>>,
    todoProjects: any[],
    setTodoProjects: Dispatch<SetStateAction<any[]>>,
    inprogressProjects: any[],
    setInprogressProjects: Dispatch<SetStateAction<any[]>>,
    complatedProjects: any[],
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

export const ProjectsContext = createContext<ProjectsContextType | undefined>(undefined);

export const UseProjectsContext: React.FC<{ children: ReactNode }> = ({ children }) => {
    const { projects, setProjects, todoProjects, setTodoProjects, inprogressProjects, setInprogressProjects, complatedProjects, setCompletedProjects, loading, setLoading, checkFilter, setCheckFilter, filteredTodoProjects, setFilteredTodoProjects, filteredInprogressProjects, setFilteredInprogressProjects, filteredCompletedProjects, setFilteredCompletedProjects, checkIncompleteFilter, setCheckIncompleteFilter, sortedTasks, setSortedTasks, checkSort, setCheckSort } = ProjectsHook();
    return (
        <ProjectsContext.Provider value={{ projects, setProjects, todoProjects, setTodoProjects, inprogressProjects, setInprogressProjects, complatedProjects, setCompletedProjects, loading, setLoading, checkFilter, setCheckFilter, filteredTodoProjects, setFilteredTodoProjects, filteredInprogressProjects, setFilteredInprogressProjects, filteredCompletedProjects, setFilteredCompletedProjects, checkIncompleteFilter, setCheckIncompleteFilter, sortedTasks, setSortedTasks, checkSort, setCheckSort }}>
            {children}
        </ProjectsContext.Provider>
    )
};

export function useProjects() {
    const context = useContext(ProjectsContext);
    if (!context) {
        throw new Error('useProjects must be used within an ProjectsContextProvider');
    }
    return context;
};