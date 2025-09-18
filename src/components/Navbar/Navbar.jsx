// Navbar.jsx
import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";
import "./Navbar.scss";

const VENUE_SLUGS = ["thay", "tderm", "got", "rec", "xim"];

const Navbar = () => {
  const { t, language, setLanguage } = useLanguage();
  const [showVenueDropdown, setShowVenueDropdown] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
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

  // Close Venues menu on route change
  useEffect(() => {
    setShowVenueDropdown(false);
  }, [pathname]);

  // Close when clicking outside
  useEffect(() => {
    function onDocClick(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setShowVenueDropdown(false);
      }
    }
    if (showVenueDropdown) document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, [showVenueDropdown]);

  const goToVenue = (path) => {
    navigate(path);
    setShowVenueDropdown(false);
    setMenuOpen(false);
  };

  return (
    <nav className={`navbar navbar--${pageKey}`}>
      <div className="navbar__container">
        <Link to="/" className="navbar__logo">T-HOSPITALITY</Link>

        <div className={`navbar__links ${menuOpen ? "active" : ""}`}>
          <Link
            to="/"
            className={`navlink ${isHome ? "is-active" : ""}`}
            onClick={() => setMenuOpen(false)}
          >
            {t("nav.home")}
          </Link>

          {/* Venues + / − click-to-toggle */}
          <div
            ref={dropdownRef}
            className={`navbar__dropdown ${isVenue ? "is-active" : ""}`}
          >
            <button
              type="button"
              className="navbar__dropdown-trigger"
              aria-haspopup="menu"
              aria-expanded={showVenueDropdown}
              onClick={() => setShowVenueDropdown((v) => !v)}
            >
              {t("nav.venue")} {showVenueDropdown ? "−" : "+"}
            </button>

            {showVenueDropdown && (
              <div className="dropdown-menu" role="menu">
                {VENUE_SLUGS.map((slug) => (
                  <div
                    key={slug}
                    className="dropdown-item"
                    role="menuitem"
                    onClick={() => goToVenue(`/${slug}`)}
                  >
                    {slug.toUpperCase()}
                  </div>
                ))}
              </div>
            )}
          </div>

          <Link
            to="/contact"
            className={`navlink ${isContact ? "is-active" : ""}`}
            onClick={() => setMenuOpen(false)}
          >
            {t("nav.contact")}
          </Link>

          {/* <div className="navbar__lang">
            <button onClick={() => setLanguage("en")} className={language === "en" ? "active" : ""}>EN</button>
            <button onClick={() => setLanguage("th")} className={language === "th" ? "active" : ""}>TH</button>
          </div> */}
        </div>

        <button className="navbar__toggle" onClick={() => setMenuOpen((p) => !p)}>☰</button>
      </div>
    </nav>
  );
};

export default Navbar;
