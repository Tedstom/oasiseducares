import { Routes, Route } from "react-router-dom";
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

export default function App() {
  return (
    <>
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