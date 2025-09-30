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
  // Desktop/tablet static sets
  const rowA = logos.slice(0, 3); // 3 logos
  const rowB = logos.slice(3, 8); // 5 logos

  // Mobile marquee sets (duplicated for seamless loop)
  const loopA = [...rowA, ...rowA];
  const loopB = [...rowB, ...rowB];

  return (
    <section className="partner section">
      <div className="container">
        <h2 className="partner__title">Partners</h2>

        {/* Desktop/Tablet: two static rows */}
        <div className="partner__grid partner__grid--static">
          <div className="partner__row partner__row--top">
            {rowA.map((logo, i) => (
              <div
                key={logo.id}
                className={`partner__item ${i === 0 ? "partner__item--wide" : ""}`}
              >
                <img src={logo.src} alt={logo.alt} />
              </div>
            ))}
          </div>

          <div className="partner__row partner__row--bottom">
            {rowB.map((logo) => (
              <div key={logo.id} className="partner__item">
                <img src={logo.src} alt={logo.alt} />
              </div>
            ))}
          </div>
        </div>

        {/* Mobile: two-row marquee */}
        <div className="partner__slider" aria-hidden="true">
          {/* Row A: 3 logos, left -> right */}
          <div className="partner__track partner__track--a">
            {loopA.map((logo, i) => (
              <div key={`a-${i}`} className="partner__item partner__item--slide">
                <img src={logo.src} alt={logo.alt} />
              </div>
            ))}
          </div>

          {/* Row B: 5 logos, right -> left */}
          <div className="partner__track partner__track--b">
            {loopB.map((logo, i) => (
              <div key={`b-${i}`} className="partner__item partner__item--slide">
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
