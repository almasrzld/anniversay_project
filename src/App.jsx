import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "@/pages/LandingPage";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import GretingPage from "@/pages/GreetingPage";

function App() {
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
