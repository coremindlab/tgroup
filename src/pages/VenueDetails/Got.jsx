import React from "react";
import { FaInstagram, FaFacebookF, FaTiktok, FaYoutube } from "react-icons/fa";
import gotCover from "../../assets/got_cover.jpg";
import "./VenueDetails.scss";
import GalleryGrid from "../../components/GalleryGrid/GalleryGrid";

import got1 from "../../assets/got/got_1.jpg";
import got2 from "../../assets/got/got_2.jpg";
import got3 from "../../assets/got/got_3.jpg";
import got4 from "../../assets/got/got_4.jpg";
import got5 from "../../assets/got/got_5.jpg";
import got6 from "../../assets/got/got_6.jpg";
import got7 from "../../assets/got/got_7.jpg";
import got8 from "../../assets/got/got_8.jpg";
import got9 from "../../assets/got/got_9.jpg";
import got10 from "../../assets/got/got_10.jpg";

const Got = () => {
  const gotImages = [
    got1, got2, got3, got4, got5,
    got6, got7, got8, got9, got10,
  ];

  return (
    <div className="venue-details">
      {/* Hero Banner */}
      <div
        className="venue-details__hero"
        style={{ backgroundImage: `url(${gotCover})` }}
      >
        {/* <h1>THAY</h1> */}
      </div>

      {/* Description */}
      <div className="venue-details__content container">
        <h2 className="venue-heading">Club Culture</h2>
        <p className="venue-description">
          A speakeasy‑style cocktail bar that turns into a late-night playground. <br />Located in Sukhumvit, GOT merges lounge-class cocktails with DJ energy in a retro-modern setting — where nostalgia and nightlife meet.
        </p>
      </div>

      <GalleryGrid images={gotImages} />

      {/* Description */}
      <div className="venue-details__content container">
        <h2 className="venue-heading">Where Tradition Meets Temptation.</h2>
        <p className="venue-description">
          GOT isn’t just a name — it’s a mood.
          <br />
          A hybrid cocktail bar that
          brings the charm of yesteryear into today’s nightlife. Sip on
          nostalgia, vibe to modern grooves, and relive the good old times in a
          whole new light.
        </p>
        <a
            href="https://line.me/R/ti/p/@yourlineid"
            target="_blank"
            rel="noopener noreferrer"
            className="info-button"
          >
          View our menu
          </a>
      </div>

      {/* Social Media Section */}
            <div className="venue-social container">
              <h3 className="venue-social__title">Follow us on social media</h3>
      
              <div className="venue-social__icons">
                <a
                  href="https://www.instagram.com/gotbangkok"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon instagram"
                >
                  <FaInstagram size={20} />
                  <span>Instagram</span>
                </a>
      
                <a
                  href="https://www.facebook.com/goodoldtimesbkk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon facebook"
                >
                  <FaFacebookF size={20} />
                  <span>Facebook</span>
                </a>
      
                <a
                  href="https://www.tiktok.com/@goodoldtimesbangkok"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon tiktok"
                >
                  <FaTiktok size={20} />
                  <span>TikTok</span>
                </a>
                <a
                  href="https://www.youtube.com/@GOTBANGKOK"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon youtube"
                >
                  <FaYoutube size={20} />
                  <span>Youtube</span>
                </a>
              </div>
            </div>

      {/* Info Block */}
      <div className="venue-details__info container">
        <div className="info-section">
          <h3>🕓 Opening Hours</h3>
          <ul>
            <li>
              <strong>Mon – Thu:</strong> 6 PM – 1 AM
            </li>
            <li>
              <strong>Fri – Sat:</strong> 6 PM – 2 AM
            </li>
            <li>
              <strong>Sun:</strong> Closed
            </li>
          </ul>
          
        </div>

        <div className="info-section">
          <h3>📍 Contact & Location</h3>
          <p>97 Sukhumvit 24 Alley, Khlong Tan, Khlong Toei, Bangkok 10110</p>
          <p>📞 02-xxx-xxxx</p>
          <p>📞 02-xxx-xxxx</p>
          <a
            href="https://line.me/R/ti/p/@yourlineid"
            target="_blank"
            rel="noopener noreferrer"
            className="line-button"
          >
            Chat via LINE@
          </a>
        </div>
      </div>

      {/* Google Map */}
      <div className="venue-details__map container">
        <iframe
          title="Thay Ekkamai Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.938458722569!2d100.56374221187517!3d13.72217569792063!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29f0076c25ce9%3A0xfbf50add27c0cb91!2sGOT%20Bangkok!5e0!3m2!1sen!2sth!4v1753898434927!5m2!1sen!2sth"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Got;
