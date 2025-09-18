// pages/VenueDetails/Thay.jsx
import React from "react";
import VenueLayout from "../../components/VenueLayout/VenueLayout";
import { venueData } from "../../data/venueData";

// import the 3 icons (place them in src/assets/thay/)
import iconHappy from "../../assets/thay/thayicon1.png";
import iconHeart from "../../assets/thay/thayicon2.png";
import iconSad   from "../../assets/thay/thayicon3.png";

export default function Thay() {
  const data = venueData.thay;

  return (
    <VenueLayout
      {...data}
      inserts={[
        {
          afterIndex: 0, // after the first paragraph
          key: "icons",
          node: (
            <div className="venue-layout__icon-row" data-aos="fade-up">
              <img src={iconHappy} alt="Happy" />
              <img src={iconHeart} alt="Heart" />
              <img src={iconSad} alt="Sad" />
            </div>
          ),
        },
        {
          afterIndex: 1, // between second and third paragraph
          key: "vline",
          node: <div className="venue-layout__vline" aria-hidden="true" />,
        },
      ]}
    />
  );
}
