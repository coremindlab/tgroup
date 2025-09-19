// App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import LanguageSwitcher from "./components/LanguageSwitcher/LanguageSwitcher";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import Home from "./pages/Home/Home";
import Contact from "./pages/Contact/Contact";
import Footer from "./components/Footer/Footer";



// ✅ New: data-driven venue pages
import VenueDetails from "./pages/VenueDetails/VenueDetails";
// import VenueHighlight from "./pages/VenueHighlight/VenueHighlight";

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <LanguageSwitcher />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />

        {/* ✅ Highlights must come before the generic slug route
        <Route path="/:slug/highlight" element={<VenueHighlight />} /> */}
        <Route path="/:slug" element={<VenueDetails />} />
      </Routes>

      <Footer />
    </Router>
  );
};

export default App;
