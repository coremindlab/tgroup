import React from "react";
import "./Contact.scss";

const VENUES = [
  {
    key: "thay",
    title: "THAY EKAMAI",
    address: ["Sukhumvit 63, Phra Khanong Nuea,", "Watthana, Bangkok 10110"],
    tel: "081 666 9969",
    lineUrl: "https://lin.ee/dxP4pHQ",
    mapUrl: "https://maps.app.goo.gl/GhSFikof3dfZcR1X7",
  },
  {
    key: "tderm",
    title: "TDERM",
    address: ["455 Sukhumvit 63, Khlong Tan Nuea,", "Watthana, Bangkok 10110"],
    tel: "084 455 6663",
    lineUrl: "https://lin.ee/sqjSqPg",
    mapUrl: "https://maps.app.goo.gl/JLeEM5o8p13xHtW4A",
  },
  {
    key: "got",
    title: "GOT (GOOD OLD TIMES)",
    address: ["97 Sukhumvit 24 Alley, Khlong Tan,", "Khlong Toei, Bangkok 10110"],
    tel: "080 626 6999",
    lineUrl: "https://lin.ee/DisGbsQ",
    mapUrl: "https://maps.app.goo.gl/6SuF4CTqx3qkGkXc6",
  },
  {
    key: "rec",
    title: "REC. (RECORD ROOM)",
    address: ["63 Wireless Road (Witthayu),", "Lumphini Pathumwan, Bangkok, Thailand 10330"],
    tel: "096 539 6696",
    lineUrl: "https://lin.ee/UNZicP7",
    mapUrl: "https://maps.app.goo.gl/XmT6YnAQsC3vjt4k9",
  },
  {
    key: "xim",
    title: "XIM",
    address: ["The 49 Terrace, 3rd Floor, Sukhumvit 49 Road,", "Khlong Tan Nuea, Watthana, Bangkok 10110"],
    tel: "095 509 9996",
    lineUrl: "https://lin.ee/WKXrNpy",
    mapUrl: null,
  },
  {
    key: "charter",
    title: "CHARTER",
    address: ["72 Sukhumvit 55, Khlong Tan Nuea,", "Watthana, Bangkok 10110"],
    tel: "095 383 6996",
    lineUrl: "https://lin.ee/Xa8wS0r",
    mapUrl: null,
  },
];

const RightChevron = () => <span className="contact__chevron" aria-hidden>&nbsp;&gt;</span>;

function sanitizeTel(str) {
  return str.replace(/[^\d+]/g, "");
}

export default function Contact() {
  return (
    <section className="contact section">
      <div className="container">
        <h1 className="contact__title">CONTACT&nbsp;US</h1>

        <div className="contact__list">
          {VENUES.map((v) => (
            <div className="contact__card" key={v.key}>
              <h3 className="contact__name">{v.title}</h3>

              {/* Location → Google Maps (exact link) */}
              <p className="contact__row contact__row--link">
                <span className="contact__label">Location</span>
                {v.mapUrl ? (
                  <a className="contact__value" href={v.mapUrl} target="_blank" rel="noreferrer">
                    <span className="contact__text">: {v.address.join(" ")}</span>
                  </a>
                ) : (
                  <span className="contact__value">
                    <span className="contact__text">: {v.address.join(" ")}</span>
                  </span>
                )}
              </p>

              {/* Tel → click to call */}
              <p className="contact__row contact__row--link">
                <span className="contact__label">Tel</span>
                <a className="contact__value" href={`tel:${sanitizeTel(v.tel)}`}>
                  <span className="contact__text">: {v.tel}</span>
                </a>
              </p>

              {/* Line OA */}
              {v.lineUrl && (
                <p className="contact__row contact__row--link">
                  <span className="contact__label">Line OA</span>
                  <a className="contact__value" href={v.lineUrl} target="_blank" rel="noreferrer">
                    <span className="contact__text">: {v.lineUrl.replace("https://", "")}</span>
                  </a>
                </p>
              )}

              <div className="contact__rule" aria-hidden />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
