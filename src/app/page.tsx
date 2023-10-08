import Navbar from "./components/navbar"
import Header from "./components/header"
import TaskmasterImg from "./components/taskmasterImg"

export default function Home() {
  return (
    <main className="font-sans h-screen bg-[#EEEBEA]">
      <Navbar />
      <Header />
      <TaskmasterImg />
    </main>
  )
}
