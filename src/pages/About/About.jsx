import React, { useEffect } from "react";
import "./About.scss";

import AOS from "aos";
import "aos/dist/aos.css";
import Milestone from "../../components/Milestone/Milestone";
import thayImg from "../../assets/thay.jpg";
import tdermImg from "../../assets/tderm.jpg";
import gotImg from "../../assets/got.jpg";
import recImg from "../../assets/rec.jpg";
import comingsoon from "../../assets/comingsoon.png";

const About = () => {
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

  return (
    <div className="about-page container">
      <div className="about-title">
        <h5 className="signature-font">Crafted Through Time</h5>
        <h1>Our Journey</h1>
      </div>
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
  );
};

export default About;
