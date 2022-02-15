import React, { useState, useEffect } from "react";
import { MDBBtn } from "mdb-react-ui-kit";

function EffectHookEX1() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  useEffect(() => {
    console.log("updating document title");
    document.title = `clicked ${count} times`;
  }, [count]);

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <MDBBtn
        className="mx-2"
        color="danger"
        onClick={() => setCount(count + 1)}
      >
        click {count} times
      </MDBBtn>
    </div>
  );
}

export default EffectHookEX1;
