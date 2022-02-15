import React, { useState } from "react";
import { MDBBtn } from "mdb-react-ui-kit";

function ResetCount() {
  const initialCount = 0;
  const [count, setCount] = useState(initialCount);

  const increment5 = () => {
    for (let i = 0; i < 5; i++) {
      setCount((previousCount) => previousCount + 1);
    }
  };

  return (
    <>
      <div>
        <h1>count: {count}</h1>
      </div>
      <div>
        <MDBBtn
          onClick={() => setCount(initialCount)}
          className="mx-2"
          color="warning"
        >
          Reset
        </MDBBtn>
        <MDBBtn
          onClick={() => setCount((previousCount) => previousCount + 1)}
          className="mx-2"
          color="success"
        >
          Increment
        </MDBBtn>
        <MDBBtn
          onClick={() => setCount((previousCount) => previousCount - 1)}
          className="mx-2"
          color="danger"
        >
          Decrement
        </MDBBtn>
        <MDBBtn onClick={increment5} className="mx-2" color="dark">
          Increnment by 5
        </MDBBtn>
      </div>
    </>
  );
}

export default ResetCount;
