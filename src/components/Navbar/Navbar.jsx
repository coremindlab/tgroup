import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";
import "./Navbar.scss";

const Navbar = () => {
  const { t, language, setLanguage } = useLanguage();
  const [showVenueDropdown, setShowVenueDropdown] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleMouseEnter = () => {
    if (window.innerWidth > 768) setShowVenueDropdown(true);
  };
  const handleMouseLeave = () => {
    if (window.innerWidth > 768) setShowVenueDropdown(false);
  };

  const toggleDropdownMobile = () => {
    if (window.innerWidth <= 768) {
      setShowVenueDropdown((prev) => !prev);
    }
  };

  const goToVenue = (path) => {
    navigate(path);
    setShowVenueDropdown(false);
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar__container">
        <Link to="/" className="navbar__logo">
          T-GROUP
        </Link>

        <div className={`navbar__links ${menuOpen ? "active" : ""}`}>
          <div
            className="navbar__dropdown"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={toggleDropdownMobile}
          >
            <span>{t("nav.venue")}</span>
            {showVenueDropdown && (
              <div className="dropdown-menu">
                {["thay", "tderm", "got", "rec", "xim"].map((slug) => (
                  <div
                    key={slug}
                    className="dropdown-item"
                    onClick={() => goToVenue(`/${slug}`)}
                  >
                    {slug.toUpperCase()}
                  </div>
                ))}
              </div>
            )}
          </div>

          <Link to="/about" onClick={() => setMenuOpen(false)}>
            {t("nav.about")}
          </Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)}>
            {t("nav.contact")}
          </Link>
          <Link to="/" onClick={() => setMenuOpen(false)}>
            {t("nav.events")}
          </Link>
          <Link to="/career" onClick={() => setMenuOpen(false)}>
            {t("nav.career")}
          </Link>

          <div className="navbar__lang">
            <button
              onClick={() => setLanguage("en")}
              className={language === "en" ? "active" : ""}
            >
              EN
            </button>
            <button
              onClick={() => setLanguage("th")}
              className={language === "th" ? "active" : ""}
            >
              TH
            </button>
          </div>
        </div>

        <button
          className="navbar__toggle"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          ☰
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
