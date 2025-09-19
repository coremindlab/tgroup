import React from "react";
import "./Contact.scss";

const VENUES = [
  {
    key: "thay",
    title: "THAY EKAMAI",
    address: ["Sukhumvit 63, Phra Khanong Nuea,", "Watthana, Bangkok 10110"],
    tel: "081 666 9969",
    email: "contact@thay.co.th",
    mapUrl: "https://maps.app.goo.gl/GhSFikof3dfZcR1X7",
  },
  {
    key: "tderm",
    title: "TDERM",
    address: ["455 Sukhumvit 63, Khlong Tan Nuea,", "Watthana, Bangkok 10110"],
    tel: "084 455 6663",
    email: "contact@tderm.co.th",
    mapUrl: "https://maps.app.goo.gl/JLeEM5o8p13xHtW4A",
  },
  {
    key: "got",
    title: "GOT (GOOD OLD TIMES)",
    address: ["97 Sukhumvit 24 Alley, Khlong Tan,", "Khlong Toei, Bangkok 10110"],
    tel: "080 626 6999",
    email: "contact@got.co.th",
    mapUrl: "https://maps.app.goo.gl/6SuF4CTqx3qkGkXc6",
  },
  {
    key: "rec",
    title: "REC (RECORD ROOM)",
    address: ["63 Wireless Road (Witthayu),", "Lumphini Pathumwan, Bangkok, Thailand 10330"],
    tel: "096 539 6696",
    email: "contact@got.co.th",
    mapUrl: "https://maps.app.goo.gl/XmT6YnAQsC3vjt4k9",
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
                <a className="contact__value" href={v.mapUrl} target="_blank" rel="noreferrer">
                  <span className="contact__text">{v.address.join(" ")}</span>
                </a>
              </p>

              {/* Tel → click to call */}
              <p className="contact__row contact__row--link">
                <span className="contact__label">Tel</span>
                <a className="contact__value" href={`tel:${sanitizeTel(v.tel)}`}>
                  <span className="contact__text">{v.tel}</span>
                </a>
              </p>

              {/* Email → mailto */}
              <p className="contact__row contact__row--link">
                <span className="contact__label">Email</span>
                <a className="contact__value" href={`mailto:${v.email}`}>
                  <span className="contact__text">{v.email}</span>
                </a>
              </p>

              <div className="contact__rule" aria-hidden />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
