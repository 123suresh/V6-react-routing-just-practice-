import React, { useState } from "react";
import { MDBBtn } from "mdb-react-ui-kit";

function HooksCounterFour() {
  const userInfo = [
    {
      name: "suresh",
      age: 20,
    },
    {
      name: "rasil",
      age: 25,
    },
  ];
  const [items, setItems] = useState([]);

  const addNumber = () => {
    setItems([
      ...items,
      {
        id: items.length,
        value: Math.floor(Math.random() * 10) + 1,
      },
    ]);
  };

  return (
    <div>
      <MDBBtn onClick={addNumber} color="success">
        add number
      </MDBBtn>
      <div>
        <ul className="add-number">
          {items.map((item) => (
            <li key={item.id}>{item.value}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default HooksCounterFour;
