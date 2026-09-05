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
import Xim from "./pages/VenueDetails/Xim";
import Charter from "./pages/VenueDetails/Charter";
import Venues from "./pages/Venues/Venues";
import Seo from "./components/Seo/Seo";
import Analytics from "./components/Analytics/Analytics";

const App = () => {
  return (
    <Router>
      <Seo />
      <Analytics />
      <ScrollToTop />
      <Navbar />
      <LanguageSwitcher />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/venues" element={<Venues />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/venue/:slug/highlight" element={<VenueHighlights />} />
        <Route path="/venue/xim" element={<Xim />} />
        <Route path="/venue/charter" element={<Charter />} />
        <Route path="/venue/:slug" element={<VenueDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
