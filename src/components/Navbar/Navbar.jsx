// Navbar.jsx (only diffs that matter)
import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";
import ComingSoonPopup from "../ComingSoonPopup/ComingSoonPopup"; // ⬅️ add this
import "./Navbar.scss";

const VENUE_SLUGS = ["thay", "tderm", "got", "rec", "xim"];

const Navbar = () => {
  const { t } = useLanguage();
  const [showVenueDropdown, setShowVenueDropdown] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [ximOpen, setXimOpen] = useState(false);           // ⬅️ new
  const dropdownRef = useRef(null);

  const navigate = useNavigate();
  const { pathname } = useLocation();
  const first = pathname.split("/")[1] || "";
  const pageKey = first === "" ? "home" : VENUE_SLUGS.includes(first) ? first : "home";

  const isHome = pathname === "/";
  const isContact = pathname.startsWith("/contact");
  const isVenue = VENUE_SLUGS.some(
    (s) => pathname === `/${s}` || pathname.startsWith(`/events/${s}`)
  );

  useEffect(() => setShowVenueDropdown(false), [pathname]);

  useEffect(() => {
    function onDocClick(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setShowVenueDropdown(false);
      }
    }
    if (showVenueDropdown) document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, [showVenueDropdown]);

  const goToVenue = (slug) => {
    if (slug === "xim") {        // ⬅️ intercept XIM
      setXimOpen(true);
      setMenuOpen(false);
      setShowVenueDropdown(false);
      return;
    }
    navigate(`/${slug}`);
    setShowVenueDropdown(false);
    setMenuOpen(false);
  };

  return (
    <nav className={`navbar navbar--${pageKey}`}>
      <div className="navbar__container">
        <Link to="/" className="navbar__logo">T-HOSPITALITY</Link>

        <div className={`navbar__links ${menuOpen ? "active" : ""}`}>
          <Link to="/" className={`navlink ${isHome ? "is-active" : ""}`} onClick={() => setMenuOpen(false)}>
            <span className="navbar__label">{t("nav.home")}</span>
          </Link>

          <div ref={dropdownRef} className={`navbar__dropdown ${isVenue ? "is-active" : ""}`}>
            <button
              type="button"
              className="navbar__dropdown-trigger"
              aria-haspopup="menu"
              aria-expanded={showVenueDropdown}
              onClick={() => setShowVenueDropdown((v) => !v)}
            >
              <span className="navbar__label">{t("nav.venue")}</span>
              <span aria-hidden>{showVenueDropdown ? "−" : "+"}</span>
            </button>

            {showVenueDropdown && (
              <div className="dropdown-menu" role="menu">
                {VENUE_SLUGS.map((slug) => {
  // Display label customization
  const label = slug === "rec" ? "REC ." : slug.toUpperCase();
  return (
    <div
      key={slug}
      className="dropdown-item"
      role="menuitem"
      onClick={() => goToVenue(slug)}  // still navigates to /rec
    >
      {label}
    </div>
  );
})}
              </div>
            )}
          </div>

          <Link
            to="/contact"
            className={`navlink ${isContact ? "is-active" : ""}`}
            onClick={() => setMenuOpen(false)}
          >
            <span className="navbar__label">{t("nav.contact")}</span>
          </Link>
        </div>

        <button className="navbar__toggle" onClick={() => setMenuOpen((p) => !p)}>☰</button>
      </div>

      {/* One tiny popup instance here in Navbar */}
      <ComingSoonPopup open={ximOpen} onClose={() => setXimOpen(false)} title="Coming Soon" />
    </nav>
  );
};

export default Navbar;
