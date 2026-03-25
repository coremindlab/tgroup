import React from "react";
import VenueLayout from "../../components/VenueLayout/VenueLayout";
import { venueData } from "../../data/venueData";

export default function Xim() {
  return (
    <VenueLayout
      {...venueData.xim}
      inserts={[
        {
          afterIndex: 3,
          key: "xim-quote-right",
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
          afterIndex: 3,
          key: "xim-vline",
          node: <div className="venue-layout__vline" aria-hidden="true" />,
        },
      ]}
    />
  );
}
