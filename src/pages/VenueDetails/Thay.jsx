import React from "react";
import VenueLayout from "../../components/VenueLayout/VenueLayout";
import { venueData } from "../../data/venueData";

import iconHappy from "../../assets/thay/thayicon1.png";
import iconHeart from "../../assets/thay/thayicon2.png";
import iconSad   from "../../assets/thay/thayicon3.png";

export default function Thay() {
  const data = venueData.thay;

  return (
    <VenueLayout
      {...data}
      accent="thay"                        // ensure correct theme class
      themeVars={{
        "--accent": "#1fff93",
        "--bg": "#0b0f0c",
        // DO NOT set "--quote-size" here
      }}
      inserts={[
        {
          afterIndex: 0,
          key: "icons",
          node: (
            <div className="venue-layout__icon-row" data-aos="fade-up">
              <img src={iconHappy} alt="Happy" loading="lazy" decoding="async" />
              <img src={iconHeart} alt="Heart" loading="lazy" decoding="async" />
              <img src={iconSad}   alt="Sad"   loading="lazy" decoding="async" />
            </div>
          ),
        },
        {
          afterIndex: 1,
          key: "vline",
          node: <div className="venue-layout__vline" aria-hidden="true" />,
        },
      ]}
    />
  );
}
