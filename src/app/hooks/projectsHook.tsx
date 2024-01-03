"use client";

import { collection, doc, onSnapshot, query, where } from "firebase/firestore";
import { useState, useEffect } from "react";
import { db } from "../firebase/firebase-config";
import toast from "react-hot-toast";;
import CurrentUserHook from "./currentUserHook";
import { useParams } from "next/navigation";

export default function ProjectsHook() {
    const params = useParams();
    const paramsId = params.id;
    const { currentUser } = CurrentUserHook();
    const collectionRef = collection(db, "projects");
    const [projects, setProjects] = useState<any[]>([]);
    const [todoProjects, setTodoProjects] = useState<any[]>([]);
    const [inprogressProjects, setInprogressProjects] = useState<any[]>([]);
    const [complatedProjects, setCompletedProjects] = useState<any[]>([]);
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
            const docRef = doc(collectionRef, paramsId as string);
            const unsubscribe = onSnapshot(docRef, (snapshot) => {
                const tempArray: any[] = []
                if (snapshot.exists()) {
                    const data = snapshot.data();
                    setProjects([...tempArray, data.taskData])
                }
            })

            return () => unsubscribe();
        } catch (error) {
            console.log(error)
        }
    }, [currentUser])

    useEffect(() => {
        if (projects.length) {
            const filteredTodoProjects = projects.filter((project) => project?.taskData?.taskType === "Todo");
            const filteredInprogressProjects = projects.filter((project) => project?.taskData?.taskType === "In progress");
            const filteredCompletedProjects = projects.filter((project) => project?.taskData?.taskType === "Completed");

            setTodoProjects(filteredTodoProjects);
            setInprogressProjects(filteredInprogressProjects);
            setCompletedProjects(filteredCompletedProjects);
        }

    }, [projects])

    return { projects, setProjects, todoProjects, setTodoProjects, inprogressProjects, setInprogressProjects, complatedProjects, setCompletedProjects, loading, setLoading, checkFilter, setCheckFilter, filteredTodoProjects, setFilteredTodoProjects, filteredInprogressProjects, setFilteredInprogressProjects, filteredCompletedProjects, setFilteredCompletedProjects, checkIncompleteFilter, setCheckIncompleteFilter, sortedTasks, setSortedTasks, checkSort, setCheckSort };
};