import React, { useState } from "react";
import "./styles.css";
import { MDBInput } from "mdb-react-ui-kit";
import { MDBBtn } from "mdb-react-ui-kit";

function HookCounterThree() {
  const [data, setData] = useState({
    username: "",
    password: "",
  });
  const [form, setForm] = useState({
    username: "",
    password: "",
  });
  const [submit, submitted] = useState(false);

  const printValues = (e) => {
    e.preventDefault();
    setForm({
      username: data.username,
      password: data.password,
    });
    submitted(true);
  };

  const updateField = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <form onSubmit={printValues}>
        <div className="insideForm">
          <MDBInput
            label="User Name"
            id="name"
            type="text"
            value={data.username}
            name="username"
            onChange={updateField}
          />
        </div>
        <br />
        <div className="insideForm">
          <MDBInput
            label="Password"
            type="password"
            value={data.password}
            name="password"
            onChange={updateField}
          />
        </div>
        <br />
        <MDBBtn className="mx-2" color="success" type="submit">
          submit
        </MDBBtn>
      </form>

      <p>{submit ? form.username : null}</p>

      <p>{submit ? form.password : null}</p>
    </div>
  );
}

export default HookCounterThree;
