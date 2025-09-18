import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import FooterNav from "./FooterNav";
import "./Footer.scss";

const VENUE_SLUGS = ["thay", "tderm", "got", "rec", "xim"];

const PAGE_META = {
  home: {
    key: "home",
    title: "T-HOSPITALITY",
    subtitle: "Where People & Places Connect.",
    location: "Bangkok, Thailand",
    tel: null,
    socials: null, // ✅ hidden on home
    accent: "white",  // no color bar on home
  },
  thay: {
    key: "thay",
    title: "THAY",
    subtitle: null,
    location: "Sukhumvit 63, Phra Khanong Nuea.",
    tel: "081 666 9969",
    socials: {
      instagram: "https://www.instagram.com/thayekamai_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
      facebook: "https://www.facebook.com/thaygroup",
    },
    accent: "thay",
  },
  tderm: {
    key: "tderm",
    title: "TDERM",
    subtitle: null,
    location: "455 Sukhumvit 63, Khlong Tan Nuea.",
    tel: "084 455 6663",
    socials: {
      instagram: "https://www.instagram.com/tderm.bangkok?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
      facebook: "https://www.facebook.com/tdermx455",
    },
    accent: "tderm",
  },
  got: {
    key: "got",
    title: "GOT",
    subtitle: null,
    location: "97 Sukhumvit 24 Alley, Khlong Tan, Khlong Toei, Bangkok 10110",
    tel: "080 626 6999",
    socials: {
      instagram: "https://www.instagram.com/gotbangkok/",
      facebook: "https://www.facebook.com/goodoldtimesbkk",
    },
    accent: "got",
  },
  rec: {
    key: "rec",
    title: "REC",
    subtitle: null,
    location: "63 Wireless Road (Witthayu), Lumphini Pathumwan, Bangkok, Thailand 10300",
    tel: "096 539 6696",
    socials: {
      instagram: "https://www.instagram.com/rec.bangkok/",
      facebook: "https://www.facebook.com/profile.php?id=61577228738918",
    },
    accent: "rec",
  },
  xim: {
    key: "xim",
    title: "XIM",
    subtitle: "(Coming Soon)",
    location: null,
    tel: null,
    socials: null, // add later if you get links
    accent: "xim", // uses neutral styling unless you add a color
  },
};

export default function Footer() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const first = pathname.split("/")[1] || "";
  const pageKey = first === "" ? "home" : VENUE_SLUGS.includes(first) ? first : "home";
  const meta = PAGE_META[pageKey];

  return (
    <footer className={`footer ${meta.accent ? `footer--${meta.accent}` : "footer--home"}`}>
      <div className="footer__container">
        {/* Left: dynamic identity */}
        <div className="footer__left">
          <h3 className="footer__title">{meta.title}</h3>
          {meta.subtitle && <p className="footer__subtitle">{meta.subtitle}</p>}
          {meta.location && (
            <p className="footer__row">
              <span className="footer__label">Location :</span> {meta.location}
            </p>
          )}
          {meta.tel && (
            <p className="footer__row">
              <span className="footer__label">Tel :</span> {meta.tel}
            </p>
          )}
        </div>

        {/* Middle: social (hidden on home) */}
        {meta.socials ? (
          <div className="footer__middle">
            <a
              href={meta.socials.instagram}
              target="_blank"
              rel="noreferrer"
              className="footer__social"
            >
              INSTAGRAM
            </a>
            <a
              href={meta.socials.facebook}
              target="_blank"
              rel="noreferrer"
              className="footer__social"
            >
              FACEBOOK
            </a>
          </div>
        ) : (
          <div className="footer__middle footer__middle--empty" />
        )}

        {/* Right: vertical navigation with Venues+ dropdown */}
        <div className="footer__right">
          <FooterNav onNavigate={(to) => navigate(to)} />
        </div>
      </div>

      <div className="footer__bottom">
        <div className="footer__hr" />
        <p className="footer__copyright">
          © {new Date().getFullYear()} T-Hospitality. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
