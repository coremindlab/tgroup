import React, { useEffect, useState, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

const VENUES = ["thay", "tderm", "got", "rec", "xim", "charter"];

export default function FooterNav() {
  const { pathname } = useLocation();
  // const navigate = useNavigate();

  const [open, setOpen] = useState(false);
  const isVenuePage = pathname === "/venues" || VENUES.some((v) => pathname.startsWith(`/venue/${v}`));
  const menuRef = useRef(null);

  // Close dropdown on route change
  useEffect(() => { setOpen(false); }, [pathname]);

  // Close dropdown on outside click
  useEffect(() => {
    if (!open) return;
    const onDocClick = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("click", onDocClick);
    return () => document.removeEventListener("click", onDocClick);
  }, [open]);

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
              <Link
                to="/venues"
                className={`footer-nav__item ${pathname === "/venues" ? "is-active" : ""}`}
                role="menuitem"
                onClick={() => setOpen(false)}
              >
                ALL
              </Link>
              {VENUES.map((slug) => {
                const active = pathname.startsWith(`/venue/${slug}`) ? "is-active" : "";
                // ✅ Custom label just for REC
                const label = slug === "rec" ? "REC ." : slug.toUpperCase();
                return (
                  <Link
                    key={slug}
                    to={`/venue/${slug}`}
                    onClick={() => setOpen(false)}
                    className={`footer-nav__item ${active}`}
                    role="menuitem"
                  >
                    {label}
                  </Link>
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

    </>
  );
}
