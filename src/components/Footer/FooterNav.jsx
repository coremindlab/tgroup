import React, { useEffect, useState, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

const VENUES = ["thay", "tderm", "got", "rec", "xim"];

export default function FooterNav({ onNavigate }) {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);
  const isVenuePage = VENUES.some((v) => pathname.startsWith(`/${v}`));
  const menuRef = useRef(null);

  // Close on any route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Optional: close when clicking outside
  useEffect(() => {
    if (!open) return;
    const onDocClick = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("click", onDocClick);
    return () => document.removeEventListener("click", onDocClick);
  }, [open]);

  const handleVenueClick = (slug) => {
    onNavigate(`/${slug}`);
    setOpen(false);
  };

  const isActive = (path) => (pathname === path ? "is-active" : "");

  return (
    <nav className="footer-nav">
      <Link to="/" className={`footer-nav__link ${isActive("/")}`}>
        HOME
      </Link>

      <div
        ref={menuRef}
        className={`footer-nav__dropdown ${open ? "is-open" : ""}`}
      >
        <button
          type="button"
          className={`footer-nav__trigger ${isVenuePage ? "is-active" : ""}`}
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-haspopup="menu"
        >
          VENUES{open ? "−" : "+"}
        </button>

        {open && (
          <div role="menu" className="footer-nav__menu">
            {VENUES.map((slug) => {
              const active = pathname.startsWith(`/${slug}`) ? "is-active" : "";
              return (
                <button
                  key={slug}
                  type="button"
                  onClick={() => handleVenueClick(slug)}
                  className={`footer-nav__item ${active}`}
                >
                  {slug.toUpperCase()}
                </button>
              );
            })}
          </div>
        )}
      </div>

      <Link to="/contact" className={`footer-nav__link ${isActive("/contact")}`}>
        CONTACT US
      </Link>
    </nav>
  );
}
