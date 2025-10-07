// src/pages/VenueHighlight/VenueHighlight.jsx
import React from "react";
import { useParams, Link } from "react-router-dom";
import { venueData } from "../../data/venueData";
import "./VenueHighlights.scss";


/* venue logos */
import logoThay  from "../../assets/logos/thay_logo.png";
import logoTderm from "../../assets/logos/tderm_logo.png";
import logoGot   from "../../assets/logos/got_logo.png";
import logoRec   from "../../assets/logos/rec_logo.png";
import logoXim   from "../../assets/logos/xim_logo.png";
const LOGOS = { thay: logoThay, tderm: logoTderm, got: logoGot, rec: logoRec, xim: logoXim };

/* Eager import all highlight imgs under /src/assets/highlights */
let highlightAssets = {};
try {
  highlightAssets = import.meta.glob(
    "../../assets/highlights/**/*.{png,jpg,jpeg,webp,avif}",
    { eager: true, import: "default" }
  );
} catch (err) {
  // Shouldn't happen in Vite, but guard anyway
  console.error("[VenueHighlight] glob failed:", err);
  highlightAssets = {};
}

/* Build tail->url map safely */
function buildTailMap() {
  const map = new Map();
  for (const [absPath, url] of Object.entries(highlightAssets || {})) {
    const parts = absPath.split("/assets/highlights/");
    if (parts.length === 2) map.set(parts[1].toLowerCase(), url);
  }
  return map;
}

/* Try variants for hyphen/underscore + ext */
function* candidateKeys(tail) {
  const lower = String(tail || "").toLowerCase();
  const dot = lower.lastIndexOf(".");
  const base = dot >= 0 ? lower.slice(0, dot) : lower;
  const ext  = dot >= 0 ? lower.slice(dot + 1) : "";
  const exts = ext ? [ext, "jpg", "jpeg", "png", "webp", "avif"] : ["jpg", "jpeg", "png", "webp", "avif"];
  const variants = new Set([base, base.replaceAll("_", "-"), base.replaceAll("-", "_")]);
  for (const b of variants) for (const e of exts) yield `${b}.${e}`;
}

/* Resolver (never throws) */
function makeResolver() {
  const tailMap = buildTailMap();
  const DEV = !!import.meta.env.DEV;

  return function resolveImg(p) {
    if (!p || typeof p !== "string") return "";
    const tail = p.replace(/^\/?images\/highlights\//i, "").replace(/^\/+/, "");

    // direct
    const direct = tailMap.get(tail.toLowerCase());
    if (direct) return direct;

    // tolerant
    for (const key of candidateKeys(tail)) {
      const hit = tailMap.get(key);
      if (hit) return hit;
    }

    if (!DEV) {
      // In prod, log once so you can see it in Vercel logs
      console.error(`[VenueHighlight] Missing asset: "${p}" (tail "${tail}")`);
    } else {
      console.warn(`[VenueHighlight] Dev missing asset: "${p}"`);
    }

    // Graceful fallback (won't crash)
    return "";
  };
}

export default function VenueHighlight() {
  const { slug } = useParams();
  const venue = venueData?.[slug];
  const resolveImg = React.useMemo(makeResolver, []);
  const logoSrc = LOGOS[slug];

  if (!venue) {
    return (
      <section className="eh section">
        <div className="container">
          <h1 className="eh__title">Not found</h1>
          <p className="eh__empty"><Link to="/">Go Home</Link></p>
        </div>
      </section>
    );
  }

  const events = Array.isArray(venue.eventHighlights) ? venue.eventHighlights : [];

  return (
    <section className={`eh section eh--${slug}`}>
      <div className="container">
        <header className="eh__header">
          {/* <Link to={`/${slug}`} className="eh__back">← Back to {venue.title}</Link> */}
          {logoSrc ? <img className="eh__logo" src={logoSrc} alt={`${venue.title} logo`} /> : null}
          <div className="eh__subhead"><span className="eh__kicker">Event Highlights</span></div>
        </header>

        {events.length === 0 ? (
          <div className="eh__empty">Coming soon.</div>
        ) : (
          events.map((ev) => {
            const small = Array.isArray(ev.gallery?.small) ? ev.gallery.small.slice(0, 6) : [];
            const first3 = small.slice(0, 3);
            const rest   = small.slice(3);

            return (
              <article key={ev.id} className="eh__event">
                <h2 className="eh__event-title">{ev.title}</h2>

                {/* Desktop grid */}
                <div className="eh__grid">
                  {first3.map((src, i) => {
                    const url = resolveImg(src);
                    return url ? (
                      <img key={`first-${i}`} className="eh__img eh__img--sm" src={url} alt={`${ev.title} ${i + 1}`} loading="lazy" />
                    ) : null;
                  })}

                  {ev.gallery?.highlight ? (() => {
                    const url = resolveImg(ev.gallery.highlight);
                    return url ? (
                      <img className="eh__img eh__img--lg" src={url} alt={`${ev.title} highlight`} loading="lazy" />
                    ) : null;
                  })() : null}

                  {rest.map((src, i) => {
                    const url = resolveImg(src);
                    return url ? (
                      <img key={`rest-${i}`} className="eh__img eh__img--sm" src={url} alt={`${ev.title} ${i + 4}`} loading="lazy" />
                    ) : null;
                  })}
                </div>

                {/* Mobile strip (hidden on desktop via CSS) */}
                <div className="eh__strip" aria-hidden="true">
                  {[...first3, ev.gallery?.highlight, ...rest].filter(Boolean).map((src, i) => {
                    const url = resolveImg(src);
                    return url ? (
                      <img key={`strip-${i}`} className="eh__img eh__img--sm" src={url} alt={`${ev.title} ${i + 1}`} loading="lazy" />
                    ) : null;
                  })}
                </div>
              </article>
            );
          })
        )}
        {/* Footer back link (always shown at the end) */}
        <div className="eh__footer">
          <Link to={`/venue/${slug}`} className="eh__back" aria-label={`Back to ${venue.title}`}>
            ← Back to {venue.title}
          </Link>
        </div>
      </div>
    </section>
  );
}
