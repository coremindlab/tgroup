import React from "react";

export default function TypewriterText({
  text,
  speed = 45,         // ms per character
  startDelay = 300,    // ms before typing begins
  showCaret = true,
}) {
  const [out, setOut] = React.useState("");
  const timerRef = React.useRef(null);

  React.useEffect(() => {
    // reset each mount or when `text` changes
    setOut("");
    let i = 0;
    const run = () => {
      timerRef.current = setInterval(() => {
        i += 1;
        setOut(text.slice(0, i));
        if (i >= text.length) {
          clearInterval(timerRef.current);
          timerRef.current = null;
        }
      }, speed);
    };
    const delay = setTimeout(run, startDelay);

    return () => {
      clearTimeout(delay);
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [text, speed, startDelay]);

  return (
    <span className="typewriter" aria-live="polite">
      {out}
      {showCaret && <span className="typewriter__caret" aria-hidden="true" />}
    </span>
  );
}
