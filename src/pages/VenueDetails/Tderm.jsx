import React from "react";
import { FaInstagram, FaFacebookF, FaTiktok } from "react-icons/fa";
// import tdermCover from "../../assets/tderm.jpg";
import "./VenueDetails.scss";
import GalleryGrid from "../../components/GalleryGrid/GalleryGrid";
import tderm_1 from "../../assets/tderm/tderm_1.jpg";
import tderm_2 from "../../assets/tderm/tderm_2.jpg";
import tderm_3 from "../../assets/tderm/tderm_3.jpg";
import tderm_4 from "../../assets/tderm/tderm_4.jpg";
import tderm_5 from "../../assets/tderm/tderm_5.jpg";
import tderm_6 from "../../assets/tderm/tderm_6.jpg";
import tderm_7 from "../../assets/tderm/tderm_7.jpg";
import tderm_8 from "../../assets/tderm/tderm_8.jpg";
import tderm_9 from "../../assets/tderm/tderm_9.jpg";
import tderm_10 from "../../assets/tderm/tderm_10.jpg";

const Tderm = () => {
  const tdermImages = [
    tderm_1, tderm_2, tderm_3, tderm_4, tderm_5,
    tderm_6, tderm_7, tderm_8, tderm_9, tderm_10,
  ];
  return (
    <div className="venue-details">
      {/* Hero Banner */}
      <div
        className="venue-details__hero"
        style={{ backgroundImage: `url(${tderm_1})` }}
      ></div>

      {/* Description */}
      <div className="venue-details__content container">
        <h2 className="venue-heading">Modern Thai Vibes. Timeless Energy.</h2>
        <p className="venue-description">
          Tderm blends traditional Thai flair with contemporary club culture.{" "}
          <br />
          Enjoy signature drinks, live DJs, and unforgettable nights in the
          heart of Bangkok.
        </p>
      </div>

      <GalleryGrid images={tdermImages} />

      {/* Description */}
      <div className="venue-details__content container">
        <h2 className="venue-heading">Bangkok’s Live Pulse</h2>
        <p className="venue-description">
          TDERM is a celebration of live energy.
          <br />
          With powerful bands and a pub-style heart, it’s where friends gather,
          drinks flow, and every night becomes a concert you didn’t expect — but
          won’t forget.
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
            href="https://www.instagram.com/tderm.bangkok"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon instagram"
          >
            <FaInstagram size={20} />
            <span>Instagram</span>
          </a>

          <a
            href="https://www.facebook.com/tdermx455"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon facebook"
          >
            <FaFacebookF size={20} />
            <span>Facebook</span>
          </a>

          <a
            href="https://www.tiktok.com/@tdermx455"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon tiktok"
          >
            <FaTiktok size={20} />
            <span>TikTok</span>
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
          <p>455 Soi Sukhumvit 63, Khlong Tan Nuea, Watthana, Bangkok 10110</p>
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
          title="Tderm Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.778454563553!2d100.58379891187526!3d13.731858697696797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29fb2ae81bec9%3A0xcfcb450b421ee2ab!2sTDERM%20x%20455!5e0!3m2!1sen!2sth!4v1753859990049!5m2!1sen!2sth"
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

export default Tderm;
