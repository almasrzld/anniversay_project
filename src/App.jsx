import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "@/pages/LandingPage";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import GretingPage from "@/pages/GreetingPage";
import { useEffect } from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: true,
      smoothWheel: true,
      duration: 1.2,
      wheelMultiplier: 1,
      touchMultiplier: 1.2,
    });

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/greeting" element={<GretingPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
