// components/VenueGrid/VenueGrid.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./VenueGrid.scss";
import ComingSoonPopup from "../ComingSoonPopup/ComingSoonPopup"; // ⬅️ modal

// Images
import imgThay from "../../assets/venues/thay.jpg";
import imgTderm from "../../assets/venues/tderm.jpg";
import imgGot from "../../assets/venues/got.jpg";
import imgRec from "../../assets/venues/rec.jpg";
import imgXim from "../../assets/venues/xim.jpg";

const VENUES = [
  {
    year: "2015",
    title: "The First chapter",
    desc:
      "Located in Ekkamai-Thonglor, blends relaxation and entertainment for the new generation, featuring a distinctive character and an inviting atmosphere for social gathering.",
    img: imgThay,
    slug: "thay",
  },
  {
    year: "2017",
    title: "The next stage of growth",
    desc:
      "A modern nightlife venue with state-of-the-art light and sound, attentive service, and exclusive perks—making TDERM the go-to spot for college and international students, young professionals, and nightlife lovers.",
    img: imgTderm,
    slug: "tderm",
  },
  {
    year: "2024",
    title: "Classic with a Modern Touch",
    desc:
      "Inspired by the timeless charm of the 1980s, Good Old Times blends vintage elegance with modern style, offering nostalgic décor, warm lighting, and signature cocktails in an atmosphere that connects past and present.",
    img: imgGot,
    slug: "got",
  },
  {
    year: "2025",
    title: "Where Rhythm Meets Refinement",
    desc:
      "REC offers a blend of luxury and musical energy. Its central DJ corner, designed like a recording studio, is complemented by modern-classic interiors, serving creative cocktails that enhance the rhythm and energy of the night.",
    img: imgRec,
    slug: "rec",
  },
  {
    year: "2025",
    title: "(Coming Soon)",
    desc:
      "XIM celebrates the vibrant colors of life through the harmonious blend of flavors, cultures, and creativity. With uncompromising standards and a dedication to innovation, it aims to set a new benchmark for quality and experience in the cocktail bar scene.",
    img: imgXim,
    slug: "xim",
  },
];

export default function VenueGrid() {
  const [ximOpen, setXimOpen] = useState(false); // ⬅️ modal state

  return (
    <section className="venue-grid section">
      <div className="container">
        <p className="venue-grid__kicker">Timeline</p>
        <h2 className="venue-grid__title">Our Journey Through Time</h2>

        <div className="venue-grid__timeline">
          {/* center line */}
          <div className="venue-grid__line" aria-hidden />

          {VENUES.map((v, i) => {
            const side = i % 2 ? "right" : "left";
            const isComingSoon = v.slug === "xim";

            return (
              <div key={v.slug} className={`venue-grid__item ${side}`}>
                {/* Opposite-side big year */}
                <span
                  className="venue-grid__year-opposite"
                  aria-hidden
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-offset="200"
                >
                  {v.year}
                </span>

                {/* Card */}
                <div className="venue-grid__card">
                  <img src={v.img} alt={v.title} className="venue-grid__img" />
                  <div className="venue-grid__content">
                    <h3>
                      {v.year} <br />
                      <span>{v.title}</span>
                    </h3>
                    <p>{v.desc}</p>

                    {/* CTA: link for live venues, modal trigger for XIM */}
                    {isComingSoon ? (
                      <button
                        type="button"
                        className="venue-grid__btn"
                        onClick={() => setXimOpen(true)}
                        aria-haspopup="dialog"
                        aria-controls="xim-coming-soon"
                      >
                        Coming Soon
                      </button>
                    ) : (
                      <Link to={`/${v.slug}`} className="venue-grid__btn">
                        Read More &gt;
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Coming Soon modal (shared instance) */}
      <ComingSoonPopup
        open={ximOpen}
        onClose={() => setXimOpen(false)}
        title="Coming Soon"
        id="xim-coming-soon"
      />
    </section>
  );
}
