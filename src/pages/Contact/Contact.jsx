import React from "react";
import "./Contact.scss";

const VENUES = [
  {
    key: "thay",
    title: "THAY EKAMAI",
    address: [
      "Sukhumvit 63, Phra Khanong Nuea,",
      "Watthana, Bangkok 10110",
    ],
    tel: "081 666 9969",
    email: "contact@thay.co.th",
  },
  {
    key: "tderm",
    title: "TDERM",
    address: [
      "455 Sukhumvit 63, Khlong Tan Nuea,",
      "Watthana, Bangkok 10110",
    ],
    tel: "084 455 6663",
    email: "contact@tderm.co.th",
  },
  {
    key: "got",
    title: "GOT (GOOD OLD TIMES)",
    address: [
      "97 Sukhumvit 24 Alley, Khlong Tan,",
      "Khlong Toei, Bangkok 10110",
    ],
    tel: "080 626 6999",
    email: "contact@got.co.th",
  },
  {
    key: "rec",
    title: "REC (RECORD ROOM)",
    address: [
      "63 Wireless Road (Witthayu),",
      "Lumphini Pathumwan, Bangkok, Thailand 10330",
    ],
    tel: "096 539 6696",
    // Using the email as shown in your reference image
    email: "contact@got.co.th",
  },
];

export default function Contact() {
  return (
    <section className="contact section">
      <div className="container">
        <h1 className="contact__title">CONTACT&nbsp;US</h1>

        <div className="contact__list">
          {VENUES.map((v) => (
            <div className="contact__card" key={v.key}>
              <h3 className="contact__name">{v.title}</h3>

              <p className="contact__row">
  <span className="contact__label">Location</span>
  <span className="contact__text">
    {v.address.join(", ")}
  </span>
</p>

<p className="contact__row">
  <span className="contact__label">Tel</span>
  <span className="contact__text">
    <a href={`tel:${v.tel.replace(/\s+/g, "")}`}>{v.tel}</a>
  </span>
</p>

<p className="contact__row">
  <span className="contact__label">Email</span>
  <span className="contact__text">
    <a href={`mailto:${v.email}`}>{v.email}</a>
  </span>
</p>

              <div className="contact__rule" aria-hidden />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
