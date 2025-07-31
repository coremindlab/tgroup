import React from "react";
import "./Contact.scss";
import thayCover from "../../assets/thay_cover.jpg";
import tdermCover from "../../assets/tderm_cover.jpg";
import gotCover from "../../assets/got_cover.jpg";
import comingsoon from "../../assets/comingsoon.png";

const venues = [
  {
    name: "THAY",
    img: thayCover,
    address: "123 Sukhumvit 55, Bangkok 10110",
    hours: ["Mon–Thu: 6PM – 1AM", "Fri–Sat: 6PM – 2AM", "Sun: Closed"],
    contact: ["02-xxx-xxxx", "thay@tgroup.com"],
    map: "https://goo.gl/maps/thay123",
  },
  {
    name: "TDERM",
    img: tdermCover,
    address: "455 Sukhumvit 63, Bangkok 10110",
    hours: ["Everyday: 6PM – 2AM"],
    contact: ["02-xxx-xxxx", "tderm@tgroup.com"],
    map: "https://goo.gl/maps/tderm123",
  },
  {
    name: "GOT",
    img: gotCover,
    address: "97 Sukhumvit 24 Alley, Khlong Tan, Khlong Toei, Bangkok 10110",
    hours: ["Wed–Sun: 7PM – 3AM", "Mon–Tue: Closed"],
    contact: ["02-xxx-xxxx", "got@tgroup.com"],
    map: "https://goo.gl/maps/got123",
  },
  {
    name: "REC",
    img: comingsoon,
    address: "Coming soon...",
    hours: ["Everyday: 6PM – 2AM"],
    contact: ["02-xxx-xxxx", "rec@tgroup.com"],
    map: "https://goo.gl/maps/rec123",
  },
  {
    name: "XIM",
    img: comingsoon,
    address: "Coming soon...",
    hours: ["Thu–Sun: 8PM – 3AM"],
    contact: ["02-xxx-xxxx", "xim@tgroup.com"],
    map: "https://goo.gl/maps/xim123",
  },
];

const Contact = () => {
  return (
    <div className="contact-page container">
      <h1>Contact Us</h1>

      <div className="venue-list">
        {venues.map((venue, index) => (
          <div className="venue-card" key={index}>
            <img src={venue.img} alt={venue.name} />

            {/* Card Header */}
            <h2>{venue.name}</h2>

            {/* Card Body (grows to fill height) */}
            <div className="venue-info">
              <div className="info-item">
                <strong>Address</strong>
                <p>{venue.address}</p>
              </div>

              <div className="info-item">
                <strong>Opening Hours</strong>
                <p>{venue.hours.join(" | ")}</p>
              </div>

              <div className="info-item">
                <strong>Contact</strong>
                <p>{venue.contact.join(" | ")}</p>
              </div>
            </div>

            {/* Card Footer (button/link pinned bottom) */}
            <div className="venue-footer">
              <a href={venue.map} target="_blank" rel="noopener noreferrer">
                Google Maps →
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Contact Form */}
      <div className="contact-form">
        <h2>General Inquiry</h2>
        <form>
          <input type="text" name="name" placeholder="Your name" required />
          <input type="email" name="email" placeholder="Your email" required />
          <textarea
            name="message"
            rows="5"
            placeholder="Your message"
            required
          ></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
