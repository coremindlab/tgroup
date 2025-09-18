import React, { useEffect } from "react";
import Hero from "../../components/Hero/Hero";
import VenueGrid from "../../components/VenueGrid/VenueGrid";
import Partner from "../../components/Partner/Partner";
import "./Home.scss";

import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div className="home-page">
      <Hero />

      <div className="venue-grid">
        <VenueGrid />
      </div>

      <Partner/>

      {/* Full-bleed grey band */}
      <section className="home-band">
  <div className="home-band__inner">
    <div className="home-band__left" data-aos="fade-up">
      <p>
        We craft vibrant spaces where music moves you, lights draw you in,
        and every drink and dish turns moments into memories.
      </p>
    </div>
    <div className="home-band__right" data-aos="fade-left">
      <h2>
        When night falls,<br />
        the city comes alive —<br />
        and so do we.
      </h2>
    </div>
  </div>
</section>

    </div>
  );
};

export default Home;

