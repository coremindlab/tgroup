import React from "react";

const Rec = () => {
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
          REC — Coming Soon...
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
          Inspired by the golden era of analog, REC is a hybrid cocktail bar
          designed like a record room — where sound, mood, and mixology play in
          perfect harmony. <br />
          Come for the vibe, stay for the story.
        </p>
      </div>
    </div>
  );
};

export default Rec;
