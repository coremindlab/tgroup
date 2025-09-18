import React from "react";
import "./VenueGrid.scss";

// ✅ Import images so bundler resolves paths reliably
import imgThay from "../../assets/venues/thay.jpg";
import imgTderm from "../../assets/venues/tderm.jpg";
import imgGot from "../../assets/venues/got.jpg";
import imgRec from "../../assets/venues/rec.jpg";
import imgXim from "../../assets/venues/xim.jpg";
import { Link } from "react-router-dom";

const VENUES = [
  {
    year: "2015",
    title: "The First chapter",
    desc: "Located in Ekkamai-Thonglor, blends relaxation and entertainment for the new generation, featuring a distinctive character and an inviting atmosphere for social gathering.",
    img: imgThay,
    slug: "thay",
  },
  {
    year: "2017",
    title: "The next stage of growth",
    desc: "A modern nightlife venue with state-of-the-art light and sound, attentive service, and exclusive perks—making TDERM the go-to spot for college and international students, young professionals, and nightlife lovers.",
    img: imgTderm,
    slug: "tderm",
  },
  {
    year: "2024",
    title: "Classic with a Modern Touch",
    desc: "Inspired by the timeless charm of the 1980s, Good Old Times blends vintage elegance with modern style, offering nostalgic décor, warm lighting, and signature cocktails in an atmosphere that connects past and present.",
    img: imgGot,
    slug: "got",
  },
  {
    year: "2025",
    title: "Where Rhythm Meets Refinement",
    desc: "REC offers a blend of luxury and musical energy. Its central DJ corner, designed like a recording studio, is complemented by modern-classic interiors, serving creative cocktails that enhance the rhythm and energy of the night.",
    img: imgRec,
    slug: "rec",
  },
  {
    year: "2025",
    title: "(Coming Soon)",
    desc: "XIM celebrates the vibrant colors of life through the harmonious blend of flavors, cultures, and creativity. With uncompromising standards and a dedication to innovation, it aims to set a new benchmark for quality and experience in the cocktail bar scene.",
    img: imgXim,
    slug: "xim",
  },
];

export default function VenueGrid() {
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
            return (
              <div key={v.slug} className={`venue-grid__item ${side}`}>
                {/* Opposite-side big year */}
                <span className="venue-grid__year-opposite"
  aria-hidden
  data-aos="fade-up"        // 👈 scroll animation
  data-aos-duration="1000"  // speed (ms)
  data-aos-offset="200">
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
                    <Link to={`/${v.slug}`} className="venue-grid__btn">
                      Read More &gt;
                    </Link>
                  </div>
                </div>

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
