import Navbar from "./components/homepage/navbar";
import Header from "./components/homepage/header";
import Homepage from "./components/homepage/homepage";
import Footer from "./components/homepage/footer";

export default function Home() {
  return (
    <main className="font-sans bg-[#f5f2f1]">
      <Navbar />
      <Header />
      <Homepage />
      <Footer />
    </main>
  );
};
