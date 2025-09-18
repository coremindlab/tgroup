// components/VenueLayout/VenueLayout.jsx
import React from "react";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import "./VenueLayout.scss";
import iconHappy from "../../assets/icons/thayicon1.png";
import iconHeart from "../../assets/icons/thayicon2.png";
import iconSad   from "../../assets/icons/thayicon3.png";

function escapeRegExp(str){ return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); }
function renderWithHighlights(text, phrases = []) {
  if (!phrases.length) return text;
  const pattern = phrases.map(escapeRegExp).join("|");
  const re = new RegExp(`(${pattern})`, "gi");
  return text.split(re).map((part, i) =>
    re.test(part) ? <span key={i} className="accent">{part}</span> : <React.Fragment key={i}>{part}</React.Fragment>
  );
}

export default function VenueLayout({
  year, title, accent, heroImage,
  quotes = [], paragraphs = [], buttons = [], gallery = [],
  highlights = [], paraAlign = [],
  themeVars = {}, classNameExtra = "",
  slots = {},
  /** NEW: [{ afterIndex: number, node: ReactNode, key?: string }] */
  inserts = [],
}) {
  return (
    <div className={`venue-layout venue-layout--${accent} ${classNameExtra}`} style={themeVars}>
      <header className="venue-layout__hero" style={{ backgroundImage: `url(${heroImage})` }}>
        <div className="venue-layout__overlay" />
      </header>

      {quotes[0] && (
        <section className="venue-layout__quote">
          <div className="venue-layout__meta">
            <span className="venue-layout__year">{year}</span>
            <span className="venue-layout__name">{title}</span>
          </div>
          <blockquote className="venue-layout__blockquote">{quotes[0]}</blockquote>
        </section>
      )}

      {paragraphs.length > 0 && (
        <section className="venue-layout__paragraph">
          <div className="venue-layout__quote-icon venue-layout__quote-icon--top venue-layout__quote-icon--left">
            <FormatQuoteIcon />
          </div>

        
          {paragraphs.map((p, i) => (
            <React.Fragment key={i}>
                {/* THAY inserts */}
        {accent === "thay" && i === 1 && (
          <div className="venue-layout__insert">
            <div className="venue-layout__icon-row">
              <img src={iconHappy} alt="Happy" />
              <img src={iconHeart} alt="Heart" />
              <img src={iconSad}   alt="Sad" />
            </div>
          </div>
        )}

        {accent === "thay" && i === 2 && (
          <div className="venue-layout__insert">
            <div className="venue-layout__vline" />
          </div>
        )}



              <p className={`venue-layout__p venue-layout__p--${paraAlign[i] || "center"}`}>
                {renderWithHighlights(p, highlights[i] || [])}
              </p>
        

              {/* 🔽 render any inserts scheduled after this paragraph */}
              {inserts.filter(ins => ins.afterIndex === i).map((ins, k) => (
                <div key={ins.key || `${i}-${k}`} className="venue-layout__insert">
                  {ins.node}
                </div>
              ))}

              {/* ✅ GOT: add lines after specific paragraphs */}
        {accent === "got" && i === 0 && (
          <div className="venue-layout__hline venue-layout__hline--left" />
        )}
        {accent === "got" && i === 1 && (
          <div className="venue-layout__hline venue-layout__hline--right" />
        )}

              
            </React.Fragment>
    
          ))}

          <div className="venue-layout__quote-icon venue-layout__quote-icon--bottom venue-layout__quote-icon--right">
            <FormatQuoteIcon />
          </div>
        </section>
      )}

      {quotes[1] && (
        <section className="venue-layout__quote venue-layout__quote--cta">
           {accent === "tderm" && (
    <div className="venue-layout__hline venue-layout__hline--center" />
  )}
          <blockquote className="venue-layout__blockquote">{quotes[1]}</blockquote>
          {!!buttons.length && (
            <div className="venue-layout__buttons">
              {buttons.map((btn) => (
                <a key={btn.label} href={btn.href} target={btn.external ? "_blank" : "_self"} rel={btn.external ? "noreferrer" : undefined} className="venue-layout__btn">
                  {btn.label}
                </a>
              ))}
            </div>
          )}
        </section>
      )}

      {!!gallery.length && (
        <section className="venue-layout__gallery">
          <div className="venue-layout__gallery-grid">
            {gallery.slice(0, 3).map((img, i) => <img key={i} src={img} alt={`${title} ${i+1}`} />)}
          </div>
          {gallery[3] && (
            <div className="venue-layout__gallery-highlight">
              <img src={gallery[3]} alt={`${title} highlight`} />
            </div>
          )}
        </section>
      )}
      {slots.afterGallery}
    </div>
  );
}
