import React, { useState, useEffect } from "react";

function CursorPosition() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const logMousePosition = (e) => {
    console.log("mouse event");
    setX(e.clientX);
    setY(e.clienty);
  };

  useEffect(() => {
    console.log("calling event listener");
    window.addEventListener("mouseHover", logMousePosition);
  }, []);

  return (
    <div className="cursorposition">
      <h1>
        the position of cursor are {x} and {y}
      </h1>
    </div>
  );
}

export default CursorPosition;
