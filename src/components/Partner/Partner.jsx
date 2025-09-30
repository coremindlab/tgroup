// src/components/Partner/Partner.jsx
import React from "react";
import "./Partner.scss";

import partner1 from "../../assets/partners/partner1.png";
import partner2 from "../../assets/partners/partner2.jpg";
import partner3 from "../../assets/partners/partner3.png";
import partner4 from "../../assets/partners/partner4.png";
import partner5 from "../../assets/partners/partner5.png";
import partner6 from "../../assets/partners/partner6.png";
import partner7 from "../../assets/partners/partner7.png";
import partner8 from "../../assets/partners/partner8.png";

const logos = [
  { id: 1, src: partner1, alt: "Partner 1" },
  { id: 2, src: partner2, alt: "Partner 2" },
  { id: 3, src: partner3, alt: "Partner 3" },
  { id: 4, src: partner4, alt: "Partner 4" },
  { id: 5, src: partner5, alt: "Partner 5" },
  { id: 6, src: partner6, alt: "Partner 6" },
  { id: 7, src: partner7, alt: "Partner 7" },
  { id: 8, src: partner8, alt: "Partner 8" },
];

const Partner = () => {
  const loopLogos = logos.concat(logos); // for marquee

  return (
    <section className="partner section">
      <div className="container">
        <h2 className="partner__title">Partners</h2>

        {/* Desktop/Tablet: two rows */}
        <div className="partner__grid partner__grid--static">
          <div className="partner__row partner__row--top">
            {logos.slice(0, 3).map((logo, i) => (
              <div
                key={logo.id}
                className={`partner__item ${
                  i === 0 ? "partner__item--wide" : ""
                }`}
              >
                <img src={logo.src} alt={logo.alt} />
              </div>
            ))}
          </div>

          <div className="partner__row partner__row--bottom">
            {logos.slice(3).map((logo) => (
              <div key={logo.id} className="partner__item">
                <img src={logo.src} alt={logo.alt} />
              </div>
            ))}
          </div>
        </div>

        {/* Mobile: single marquee */}
        <div className="partner__slider">
          <div className="partner__track">
            {loopLogos.map((logo, i) => (
              <div
                key={`slide-${i}`}
                className="partner__item partner__item--slide"
              >
                <img src={logo.src} alt={logo.alt} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partner;
