import React from "react";
import { Link } from "react-router-dom";
import "./VenueGrid.scss";
import recImg from "../../assets/rec.jpg";
import thayImg from "../../assets/thay.jpg";
import gotImg from "../../assets/got.jpg";
import tdermImg from "../../assets/tderm.jpg";
import ximImg from "../../assets/xim.jpg";

const venues = [
  {
    name: "THAY",
    img: thayImg,
    link: "/thay",
    desc: "Retro Thai bar vibes",
  },
  {
    name: "TDERM",
    img: tdermImg,
    link: "/tderm",
    desc: "Retro Thai bar vibes",
  },

  {
    name: "GOT",
    img: gotImg,
    link: "/got",
    desc: "Retro Thai bar vibes",
  },
  {
    name: "REC",
    img: recImg,
    link: "/rec",
    desc: "Retro Thai bar vibes",
  },
  {
    name: "XIM",
    img: ximImg,
    link: "/xim",
    desc: "Retro Thai bar vibes",
  },
];

const VenueGrid = () => {
  return (
    <section className="venue-grid section">
      <div className="container">
        <h2 className="signature-font">Our Story in Sound</h2>
        <div className="venue-grid__list">
          {venues.map((venue, index) => (
            <Link to={venue.link} key={index} className="venue-card">
              <img src={venue.img} alt={venue.name} />
              <h3>{venue.name}</h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VenueGrid;
