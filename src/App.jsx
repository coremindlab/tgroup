// App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import LanguageSwitcher from "./components/LanguageSwitcher/LanguageSwitcher";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import Home from "./pages/Home/Home";
import Contact from "./pages/Contact/Contact";
import Footer from "./components/Footer/Footer";
import NotFound from "./pages/NotFound/NotFound";
// ✅ New: data-driven venue pages
import VenueDetails from "./pages/VenueDetails/VenueDetails";
import VenueHighlights from "./pages/VenueHighlights/VenueHighlights";

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <LanguageSwitcher />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/venue/:slug/highlight" element={<VenueHighlights />} />
        <Route path="/venue/:slug" element={<VenueDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
