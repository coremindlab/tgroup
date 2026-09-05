import React from "react";
import VenueLayout from "../../components/VenueLayout/VenueLayout";
import { venueData } from "../../data/venueData";

export default function Charter() {
  return (
    <VenueLayout
      {...venueData.charter}
      inserts={[
        {
          afterIndex: 2,
          key: "charter-quote-right",
          node: (
            <div
              className="venue-layout__quote-icon venue-layout__quote-icon--bottom"
              aria-hidden="true"
            >
              <span className="venue-layout__quote-mark">”</span>
            </div>
          ),
        },
        {
          afterIndex: 2,
          key: "charter-vline",
          node: <div className="venue-layout__vline" aria-hidden="true" />,
        },
      ]}
    />
  );
}
