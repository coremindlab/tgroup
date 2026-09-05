import React from "react";
import VenueGrid from "../../components/VenueGrid/VenueGrid";

export default function Venues() {
  return (
    <main className="venues-page">
      <VenueGrid headingLevel={1} heading="Our Venues" showAllLink={false} />
    </main>
  );
}
