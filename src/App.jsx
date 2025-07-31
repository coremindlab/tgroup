import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import LanguageSwitcher from "./components/LanguageSwitcher/LanguageSwitcher";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import Thay from "./pages/VenueDetails/Thay";
import Tderm from "./pages/VenueDetails/Tderm";
import Got from "./pages/VenueDetails/Got";
import Rec from "./pages/VenueDetails/Rec";
import Xim from "./pages/VenueDetails/Xim";

import Home from "./pages/Home/Home";
import About from "./pages/About/About";
// import Venue from "./pages/Venue/Venue";
import Contact from "./pages/Contact/Contact";
import Footer from "./components/Footer/Footer";



const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <LanguageSwitcher />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/venue" element={<Venue />} /> */}
        <Route path="/thay" element={<Thay />} />
        <Route path="/tderm" element={<Tderm />} />
        <Route path="/got" element={<Got />} />
        <Route path="/rec" element={<Rec />} />
        <Route path="/xim" element={<Xim />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </Router>
  );
};

export default App;
