import React, { useState, useEffect } from "react";
import "./EffectHook.css";

function SetInterval() {
  const [count, setCount] = useState(0);

  const tick = () => {
    setCount((prevCount) => prevCount + 1);
  };

  useEffect(() => {
    function SetInterval() {
      console.log(someProps);
    }
    const interval = setInterval(tick, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="setInterval">
      <h1>{count}</h1>
    </div>
  );
}

export default SetInterval;
