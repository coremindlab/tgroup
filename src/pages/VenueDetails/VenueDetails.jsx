// pages/VenueDetails/VenueDetails.jsx
import React from "react";
import { useParams } from "react-router-dom";
import VenueLayout from "../../components/VenueLayout/VenueLayout";
import { venueData } from "../../data/venueData";

export default function VenueDetails() {
  const { slug } = useParams();
  const data = venueData[slug];
  if (!data) return null; // or navigate('/')

  return (
    <VenueLayout
      {...data}
      themeVars={data.themeVars}
      classNameExtra={data.classNameExtra}
      slots={data.slots}
    />
  );
}
