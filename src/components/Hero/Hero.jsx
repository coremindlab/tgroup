import React, { useEffect, useRef, useState } from "react";
import "./Hero.scss";

import slide1 from "../../assets/home/slide1.jpg";
import slide2 from "../../assets/home/slide2.jpg";
import slide3 from "../../assets/home/slide3.jpg";
import slide4 from "../../assets/home/slide4.jpg";

import AOS from "aos";
import "aos/dist/aos.css";
import TypewriterText from "../TypeWriter/TypeWriterText";

const SLIDES = [slide1, slide2, slide3, slide4];
const INTERVAL_MS = 3000; // ⏱️ 3 seconds

export default function Hero() {
  const [idx, setIdx] = useState(0);
  const timerRef = useRef(null);

  const startTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(
      () => setIdx(v => (v + 1) % SLIDES.length),
      INTERVAL_MS
    );
  };

  const stopTimer = () => clearInterval(timerRef.current);

  useEffect(() => {
    startTimer();
    return () => clearInterval(timerRef.current);
  }, []);

  const goTo = (i) => {
    setIdx(i);
    startTimer(); // restart cycle after manual nav
  };

    useEffect(() => {
      AOS.init({ duration: 800, once: true });
    }, []);

  return (
    <section className="hero">
      <div className="hero__inner container">
        {/* Left: copy */}
        <div className="hero__copy">
          <h1 className="hero__title"><TypewriterText
              text="From a personal passion to a beloved music bar."
              speed={45}
              startDelay={400}
            /></h1>
          <p className="hero__line" data-aos="fade-right">
            From different places and institutions, united by a shared love for music, evolving into a team of
            entrepreneurs with music at the heart of their vision.
          </p>
          <p className="hero__line" data-aos="fade-right">
            Bringing the lively vibe of university-town bars to the city center, creating a go-to hangout where
            young people can always have fun, anytime.
          </p>
        </div>

        {/* Right: slider + dots */}
        <div
          className="hero__media"
          onMouseEnter={stopTimer}     // 🛑 pause on hover
          onMouseLeave={startTimer}   // ▶️ resume on leave
        >
          <div
            className="hero__slider"
            aria-roledescription="carousel"
            aria-label="Venue highlights"
            data-aos="fade-left"
          >
            {SLIDES.map((src, i) => (
              <img
                key={src}
                src={src}
                alt={`highlight ${i + 1}`}
                className={`hero__slide ${i === idx ? "is-active" : ""}`}
                loading={i === 0 ? "eager" : "lazy"}
                draggable="false"
              />
            ))}
          </div>

          {/* Dots only (no progress bar) */}
          <div className="hero__dots" role="tablist" aria-label="Slide navigation">
            <span className="hero__dots-rail" aria-hidden />
            <div className="hero__dots-buttons">
              {SLIDES.map((_, i) => (
                <button
                  key={i}
                  role="tab"
                  aria-selected={i === idx}
                  aria-label={`Go to slide ${i + 1}`}
                  className={`hero__dot ${i === idx ? "is-active" : ""}`}
                  onClick={() => goTo(i)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
