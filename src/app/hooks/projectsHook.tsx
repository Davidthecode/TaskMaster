"use client";

import { collection, doc, onSnapshot } from "firebase/firestore";
import { useState, useEffect } from "react";
import { db } from "../firebase/firebase-config";
import CurrentUserHook from "./currentUserHook";
import { useParams } from "next/navigation";

export default function ProjectsHook() {
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
            const unsubscribe = onSnapshot(collectionRef, (snapshot) => {
                setTodoProjects([]);
                const tempArray: any[] = []
                snapshot.docs.forEach((doc) => {
                    const data = doc.data();
                    const id = (doc.id);
                    if (data.taskData && data.taskData.taskId == paramsId) {
                        tempArray.push({...data, id});
                    };

                });
                setProjects(tempArray);
            });

            return () => unsubscribe();
        } catch (error) {
            console.log(error);
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
        }

    }, [projects]);

    return { projects, setProjects, todoProjects, setTodoProjects, inprogressProjects, setInprogressProjects, completedProjects, setCompletedProjects, loading, setLoading, checkFilter, setCheckFilter, filteredTodoProjects, setFilteredTodoProjects, filteredInprogressProjects, setFilteredInprogressProjects, filteredCompletedProjects, setFilteredCompletedProjects, checkIncompleteFilter, setCheckIncompleteFilter, sortedTasks, setSortedTasks, checkSort, setCheckSort };
};