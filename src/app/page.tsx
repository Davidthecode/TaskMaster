"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Navbar from "./components/homepage/navbar";
import Header from "./components/homepage/header";
import TaskmasterImg from "./components/homepage/taskmasterImg";
import CurrentUserHook from "./hooks/currentUserHook";
import Homepage from "./components/homepage/homepage";
import Footer from "./components/homepage/footer";

export default function Home() {
  const router = useRouter();
  const { currentUser } = CurrentUserHook();

  useEffect(() => {
    if (currentUser) {
      router.push('/home');
    } else router.push('/');
  }, [currentUser]);

  return (
    <main className="font-sans bg-[#f5f2f1]">
      <Navbar />
      <Header />
      <TaskmasterImg />
      <Homepage />
      <Footer />
    </main>
  );
}
