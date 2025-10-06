import React, { useEffect } from "react";
import "./VenueLayout.scss";
import iconHappy from "../../assets/icons/thayicon1.png";
import iconHeart from "../../assets/icons/thayicon2.png";
import iconSad   from "../../assets/icons/thayicon3.png";

import AOS from "aos";
import "aos/dist/aos.css";

/** Escape a string for use in RegExp */
function escapeRegExp(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

/** Split + wrap matched phrases in <span class="accent">…</span> */
function renderWithHighlights(text, phrases = []) {
  if (!phrases || phrases.length === 0) return text;
  const pattern = phrases.map(escapeRegExp).join("|");
  const re = new RegExp(`(${pattern})`, "gi");
  return text.split(re).map((part, i) => {
    re.lastIndex = 0; // avoid /g statefulness causing skips
    return re.test(part)
      ? <span key={`hl-${i}`} className="accent">{part}</span>
      : <React.Fragment key={`tx-${i}`}>{part}</React.Fragment>;
  });
}

export default function VenueLayout({
  year, title, accent, heroImage,
  quotes = [], paragraphs = [], buttons = [], gallery = [],
  highlights = [], paraAlign = [],
  themeVars = {}, classNameExtra = "",
  slots = {},
  inserts = [],
}) {
  // Allow only CSS vars, but explicitly block --quote-size to prevent venue overrides
  const safeThemeVars = {};
  Object.keys(themeVars || {}).forEach((k) => {
    if (k.startsWith("--") && k !== "--quote-size") {
      safeThemeVars[k] = themeVars[k];
    }
  });

    useEffect(() => {
      AOS.init({ duration: 800, once: true });
    }, []);

  
  return (
    <div
      className={`venue-layout venue-layout--${accent || "default"} ${classNameExtra}`}
      style={safeThemeVars}
    >
      {/* HERO */}
      <header
        className="venue-layout__hero"
        style={{ backgroundImage: heroImage ? `url(${heroImage})` : undefined }}
        role="banner"
      >
        <div className="venue-layout__overlay" />
      </header>

      {/* TOP QUOTE */}
      {quotes[0] && (
        <section className="venue-layout__quote">
          <div className="venue-layout__meta">
            <span className="venue-layout__year">{year}</span>
            <span className="venue-layout__name">{title}</span>
          </div>
          {/* Inline fontSize ensures var(--quote-size) wins absolutely */}
          <blockquote
  className="venue-layout__blockquote"
  style={{ fontSize: "var(--quote-size)" }}
  data-aos="fade-down"
  data-aos-duration="5000"
>
 {accent === "got" ? (
        (() => {
          const parts = String(quotes[0]).split(/\s*\n\s*/);
          return (
            <>
              {/* line 1 = RIGHT */}
              <span className="got-line" style={{ display: "block", textAlign: "right" }}>
                {parts[0] || ""}
              </span>

              {/* line 2 = LEFT */}
              {parts[1] && (
                <span className="got-line" style={{ display: "block", textAlign: "left" }}>
                  {parts[1]}
                </span>
              )}

              {/* line 3 = LEFT */}
              {parts[2] && (
                <span className="got-line" style={{ display: "block", textAlign: "left" }}>
                  {parts[2]}
                </span>
              )}
            </>
          );
        })()
      ) : (
        quotes[0]
      )}

</blockquote>

          <div
            className="venue-layout__quote-icon venue-layout__quote-icon--top"
            aria-hidden="true"
          >
           <span className="venue-layout__quote-mark">“</span>
          </div>
        </section>
      )}

      {/* PARAGRAPHS + INSERTS */}
      {paragraphs.length > 0 && (
        <section className="venue-layout__paragraph">
            

          {paragraphs.map((p, i) => (
            <React.Fragment key={`para-${i}`}>
              {/* THAY inserts */}
              {accent === "thay" && i === 1 && (
                <div className="venue-layout__insert">
                  <div className="venue-layout__icon-row">
                    <img src={iconHappy} alt="Happy" loading="lazy" decoding="async" />
                    <img
      src={iconHeart}
      alt="Heart"
      loading="lazy"
      decoding="async"
      className="venue-layout__icon--heart"
      data-allow-motion="true"
    />
                    <img src={iconSad}   alt="Sad"   loading="lazy" decoding="async" />
                  </div>
                </div>
              )}

              {accent === "thay" && i === 2 && (
                <div className="venue-layout__insert">
                  <div className="venue-layout__vline" aria-hidden="true" />
                </div>
              )}

              <p className={`venue-layout__p venue-layout__p--${paraAlign[i] || "center"}`}>
                {renderWithHighlights(p, highlights[i] || [])}
              </p>

              {/* Custom inserts scheduled after this paragraph */}
              {inserts
                .filter((ins) => ins && typeof ins.afterIndex === "number" && ins.afterIndex === i)
                .map((ins, k) => (
                  <div key={ins.key || `ins-${i}-${k}`} className="venue-layout__insert">
                    {ins.node}
                  </div>
                ))}

              {/* GOT lines after specific paragraphs */}
              {accent === "got" && i === 0 && (
                <div className="venue-layout__hline venue-layout__hline--left" />
              )}
              {accent === "got" && i === 1 && (
                <div className="venue-layout__hline venue-layout__hline--right" />
              )}
            </React.Fragment>
          ))}
        </section>
      )}

      {/* CTA QUOTE + BUTTONS */}
      {quotes[1] && (
        <section className="venue-layout__quote venue-layout__quote--cta">
           <div
            className="venue-layout__quote-icon venue-layout__quote-icon--bottom"
            aria-hidden="true"
          >
           <span className="venue-layout__quote-mark">”</span>
          </div>
          {accent === "tderm" && (
            <div className="venue-layout__hline venue-layout__hline--center" />
          )}
          <blockquote
            className="venue-layout__blockquote venue-layout__blockquote--cta"
            style={{ fontSize: "var(--quote-size)" }}
          > 
            {quotes[1]}
          </blockquote>

          {!!buttons.length && (
            <div className="venue-layout__buttons">
              {buttons.map((btn) => (
                <a
                  key={btn.label}
                  href={btn.href}
                  target={btn.external ? "_blank" : "_self"}
                  rel={btn.external ? "noreferrer" : undefined}
                  className="venue-layout__btn"
                >
                  {btn.label}
                </a>
              ))}
            </div>
          )}
        </section>
      )}

      {/* GALLERY */}
      {!!gallery.length && (
        <section className="venue-layout__gallery">
          <div className="venue-layout__gallery-grid">
            {gallery.slice(0, 3).map((img, i) => (
              <img
                key={`gal-${i}`}
                src={img}
                alt={`${title} ${i + 1}`}
                loading="lazy"
                decoding="async"
              />
            ))}
          </div>

          {gallery[3] && (
            <div className="venue-layout__gallery-highlight">
              <img
                src={gallery[3]}
                alt={`${title} highlight`}
                loading="lazy"
                decoding="async"
              />
            </div>
          )}
        </section>
      )}

      {slots?.afterGallery || null}
    </div>
  );
}
