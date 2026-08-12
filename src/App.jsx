import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

import Home from "./pages/Home";
import Countries from "./pages/Countries";
import CountryDetails from "./pages/CountryDetails";
import Courses from "./pages/Courses";
import Universities from "./pages/Universities";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ApplyNow from "./pages/ApplyNow";
import MBBSBulgaria from "./pages/MBBSBulgaria";


function ScrollToHash() {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) {
      return;
    }

    const id = location.hash.substring(1);

    setTimeout(() => {
      const element = document.getElementById(id);

      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 100);
  }, [location.pathname, location.hash]);

  return null;
}


export default function App() {
  return (
    <>
      <ScrollToHash />

      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/countries" element={<Countries />} />
          <Route path="/countries/:code" element={<CountryDetails />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/universities" element={<Universities />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/apply" element={<ApplyNow />} />
          <Route path="/mbbs-in-bulgaria" element={<MBBSBulgaria />} />
        </Routes>
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  );
}