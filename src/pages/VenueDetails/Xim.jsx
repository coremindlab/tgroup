import React from "react";

const Xim = () => {
  return (
    <div
      className="venue-details"
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        className="venue-details__content container"
        style={{
          padding: "100px 20px",
          textAlign: "center",
          maxWidth: "800px",
          margin: "0 auto",
        }}
      >
        <h1
          style={{
            fontSize: "2.5rem",
            fontWeight: "700",
            marginBottom: "1.5rem",
            color: "#eaeaea",
            letterSpacing: "0.5px",
          }}
        >
          XIM — Coming Soon...
        </h1>
        <p
          style={{
            fontSize: "1.1rem",
            color: "#ccc",
            lineHeight: "1.8",
            textShadow: "0 1px 4px rgba(0, 0, 0, 0.4)",
            letterSpacing: "0.3px",
          }}
        >
          Rooted in retro-futurism, XIM is where cocktails, light, and sound
          collide.
          <br />A sensorial lounge that fuses modern rhythms with vintage
          aesthetics — curated for those who crave an experience beyond the
          ordinary. Step into the glow. Stay for the atmosphere.
        </p>
      </div>
    </div>
  );
};

export default Xim;
