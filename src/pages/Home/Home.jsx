import React, { useEffect } from "react";
import Hero from "../../components/Hero/Hero";
import AboutTeaser from "../../components/AboutTeaser/AboutTeaser";
import VenueGrid from "../../components/VenueGrid/VenueGrid";
import GalleryPreview from "../../components/GalleryPreview/GalleryPreview";
import "./Home.scss";

import AOS from "aos";
import "aos/dist/aos.css";
import Milestone from "../../components/Milestone/Milestone";
import thayImg from "../../assets/thay.jpg";
import tdermImg from "../../assets/tderm.jpg";
import gotImg from "../../assets/got.jpg";
import recImg from "../../assets/rec.jpg";
import comingsoon from "../../assets/comingsoon.png";
import GalleryGrid from "../../components/GalleryGrid/GalleryGrid";
import gallery1 from "../../assets/got/got_4.jpg";
import tderm_2 from "../../assets/tderm/tderm_2.jpg";
import gallery3 from "../../assets/got/got_7.jpg";
import gallery4 from "../../assets/thay/thay_4.jpg";
import tderm_5 from "../../assets/tderm/tderm_5.jpg";
import gallery6 from "../../assets/thay/thay_6.jpg";
import gallery7 from "../../assets/thay/thay_8.jpg";
import tderm_8 from "../../assets/tderm/tderm_8.jpg";
import gallery9 from "../../assets/got/got_8.jpg";
import gallery10 from "../../assets/tderm/tderm_7.jpg";

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  const milestones = [
    {
      year: "2015",
      title: "The Beginning",
      description:
        "THAY marked the start of our journey — a venue that redefined Thai nightlife with elegance, cultural roots, and a beat that moved with the city. Where tradition met the turntable for the very first time.",
      image: thayImg,
      slug: "thay",
    },
    {
      year: "2017",
      title: "Street Soul Reimagined",
      description:
        "TDERM brought the sound of the street to center stage. Neon lights, hip-hop grooves, and Bangkok’s raw spirit collided in a space that felt iconic.",
      image: tdermImg,
      slug: "tderm",
    },
    {
      year: "2024",
      title: "Techno, Deep & Dark",
      description:
        "GOT took things deeper — into rhythm-driven soundscapes and immersive lighting. It became the heartbeat of the after-hours, for those who crave intensity over hype.",
      image: gotImg,
      slug: "got",
    },
    {
      year: "2025",
      title: "Nostalgia Amplified",
      description:
        "REC brought back the charm of analog, vintage textures, and dancefloor unity. A retro-futuristic bar where every night feels like a mixtape made just for you.",
      image: recImg,
      slug: "rec",
    },
    {
      year: "2025",
      title: "XIM",
      description: "Coming soon...",
      image: comingsoon,
      slug: "xim",
    },
  ];

    const homeGrid = [
      gallery1,
      tderm_2,
      gallery3,
      gallery4,
      tderm_5,
      gallery6,
      gallery7,
      tderm_8,
      gallery9,
      gallery10,
    ];

  return (
    <div className="home-page">
      <Hero />
      <div className="venue-grid">
        <VenueGrid />
      </div>
      {/* Milestone Section */}
      <div className="milestone-section">
        <h2 className="signature-font milestone-title">Crafted Through Time</h2>

        <div className="timeline-wrapper">
          {milestones.map((m, index) => (
            <div
              key={index}
              data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
            >
              <Milestone {...m} index={index} />
            </div>
          ))}
        </div>
      </div>
      <AboutTeaser />
      <div className="gallery-section">
        <GalleryGrid images={homeGrid} />
      </div>
      {/* <GalleryPreview /> */}
    </div>
  );
};

export default Home;
