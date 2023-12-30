"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Navbar from "./components/homepage/navbar";
import Header from "./components/homepage/header";
import TaskmasterImg from "./components/homepage/taskmasterImg";
import CurrentUserHook from "./hooks/currentUserHook";

export default function Home() {
  const router = useRouter();
  const { currentUser } = CurrentUserHook();

  useEffect(() => {
    if (currentUser) {
      router.push('/home');
    } else router.push('/');
  }, [currentUser]);

  return (
    <main className="font-sans h-screen bg-[#EEEBEA]">
      <Navbar />
      <Header />
      <TaskmasterImg />
    </main>
  );
}
