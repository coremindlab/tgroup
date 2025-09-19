// components/Footer/FooterNav.jsx
import React, { useEffect, useState, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import ComingSoonPopup from "../../components/ComingSoonPopup/ComingSoonPopup"; // ⬅️ add this

const VENUES = ["thay", "tderm", "got", "rec", "xim"];

export default function FooterNav({ onNavigate }) {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);
  const [ximOpen, setXimOpen] = useState(false);           // ⬅️ modal state
  const isVenuePage = VENUES.some((v) => pathname.startsWith(`/${v}`));
  const menuRef = useRef(null);

  // Close on any route change
  useEffect(() => { setOpen(false); }, [pathname]);

  // Close when clicking outside
  useEffect(() => {
    if (!open) return;
    const onDocClick = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("click", onDocClick);
    return () => document.removeEventListener("click", onDocClick);
  }, [open]);

  const handleVenueClick = (slug) => {
    if (slug === "xim") {       // ⬅️ intercept XIM
      setXimOpen(true);
      setOpen(false);
      return;
    }
    onNavigate(`/${slug}`);
    setOpen(false);
  };

  const isActive = (path) => (pathname === path ? "is-active" : "");

  return (
    <>
      <nav className="footer-nav">
        {/* HOME */}
        <div className="footer-nav__row">
          <Link to="/" className={`footer-nav__link ${isActive("/")}`}>
            <span className="footer-nav__text">HOME</span>
          </Link>
        </div>

        {/* VENUES */}
        <div
          ref={menuRef}
          className={`footer-nav__dropdown ${open ? "is-open" : ""} ${isVenuePage ? "is-active" : ""}`}
        >
          <button
            type="button"
            className={`footer-nav__trigger ${isVenuePage ? "is-active" : ""}`}
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-haspopup="menu"
            aria-controls="footer-venues-menu"
          >
            <span className="footer-nav__text">VENUES</span>
            <span className="footer-nav__caret" aria-hidden>{open ? "−" : "+"}</span>
          </button>

          {open && (
            <div id="footer-venues-menu" role="menu" className="footer-nav__menu">
              {VENUES.map((slug) => {
                const active = pathname.startsWith(`/${slug}`) ? "is-active" : "";
                return (
                  <button
                    key={slug}
                    type="button"
                    onClick={() => handleVenueClick(slug)}
                    className={`footer-nav__item ${active}`}
                    role="menuitem"
                  >
                    {slug.toUpperCase()}
                  </button>
                );
              })}
            </div>
          )}
        </div>

        {/* CONTACT */}
        <div className="footer-nav__row">
          <Link to="/contact" className={`footer-nav__link ${isActive("/contact")}`}>
            <span className="footer-nav__text">CONTACT US</span>
          </Link>
        </div>
      </nav>

      {/* Coming Soon modal for XIM */}
      <ComingSoonPopup
        open={ximOpen}
        onClose={() => setXimOpen(false)}
        title="Coming Soon"
      />
    </>
  );
}
