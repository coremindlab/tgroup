import React from "react";
import { FaInstagram, FaFacebookF, FaTiktok } from "react-icons/fa";
import thayCover from "../../assets/thay_cover.jpg";
import "./VenueDetails.scss";
import GalleryGrid from "../../components/GalleryGrid/GalleryGrid";
import img1 from "../../assets/thay/thay_1.jpg";
import img2 from "../../assets/thay/thay_2.jpg";
import img3 from "../../assets/thay/thay_3.jpg";
import img4 from "../../assets/thay/thay_4.jpg";
import img5 from "../../assets/thay/thay_5.jpg";
import img6 from "../../assets/thay/thay_6.jpg";
import img7 from "../../assets/thay/thay_7.jpg";
import img8 from "../../assets/thay/thay_8.jpg";
import img9 from "../../assets/thay/thay_9.jpg";
import img10 from "../../assets/thay/thay_10.jpg";

const Thay = () => {
  const thayImages = [
    img1, img2, img3, img4, img5,
    img6, img7, img8, img9, img10,
  ];

  return (
    <div className="venue-details">
      {/* Hero Banner */}
      <div
        className="venue-details__hero"
        style={{ backgroundImage: `url(${thayCover})` }}
      />

      {/* Section 1 */}
      <div className="venue-details__content container">
        <h2 className="venue-heading">Where Bangkok’s Beat Begins</h2>
        <p className="venue-description">
          Located in the heart of Ekkamai, THAY is where beats meet Bangkok’s bold spirit.
          <br />
          A vibrant music hub where good vibes, local sounds, and unforgettable nights come together in perfect rhythm.
        </p>
      </div>

      {/* Gallery */}
      <GalleryGrid images={thayImages} />

      

      {/* Section 2 */}
      <div className="venue-details__content container">
        <h2 className="venue-heading">Sound Meets Soul</h2>
        <p className="venue-description">
          Discover a space where deep beats meet rich heritage.
          <br />
          THAY reimagines classic Thai essence through immersive lighting,
          sultry soundscapes, and curated cocktails that awaken all senses.
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
            href="https://www.instagram.com/thayekamai_"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon instagram"
          >
            <FaInstagram size={20} />
            <span>Instagram</span>
          </a>

          <a
            href="https://www.facebook.com/thayekamai"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon facebook"
          >
            <FaFacebookF size={20} />
            <span>Facebook</span>
          </a>

          <a
            href="https://www.tiktok.com/@thayviral"
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
            <li><strong>Mon – Thu:</strong> 6 PM – 1 AM</li>
            <li><strong>Fri – Sat:</strong> 6 PM – 2 AM</li>
            <li><strong>Sun:</strong> Closed</li>
          </ul>
        </div>

        <div className="info-section">
          <h3>📍 Contact & Location</h3>
          <p>Soi Sukhumvit 63, Phra Khanong Nuea, Watthana, Bangkok 10110</p>
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
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.782395270135!2d100.58431901187514!3d13.731620297702289!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29fb2b0c1658d%3A0x14b8bf6f298e7199!2sThay%20Ekkamai!5e0!3m2!1sen!2sth!4v1753848341845!5m2!1sen!2sth"
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

export default Thay;
