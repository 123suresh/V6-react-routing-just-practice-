import React, { Component, useState } from "react";
import { Navigate } from "react-router-dom";
import { MDBInput } from "mdb-react-ui-kit";
import { MDBBtn } from "mdb-react-ui-kit";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [wrongAuth, setwrongAuth] = useState("");
  const [passErr, setPassErr] = useState(false);

  const submitForm = (e) => {
    e.preventDefault();
    if (username === "Admin" && password === "admin123") {
      localStorage.setItem("token", "abcabcabcabcabc");
      setLoggedIn(true);
    } else {
      setwrongAuth(
        <h5 style={{ color: "red" }}>User Name or Password wrong</h5>
      );
    }
  };

  function passHandler(e) {
    const { value } = e.target;
    e.preventDefault();
    setPassword(value);
    setPassErr(value.length > 5 ? false : true);
  }


  if (loggedIn || localStorage.getItem("token")) {
    return <Navigate form="/" to="/admin/ComponentRender/PostForm" />;
  }
  return (
    <div className="login-form">
      <h1>Login</h1>
      <form onSubmit={submitForm}>
        <div className="insideForm">
          <MDBInput
            label="User Name"
            id="name"
            type="text"
            name={username}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <br />
        <div className="insideForm">
          <MDBInput
            label="Password"
            type="password"
            name={password}
            value={password}
            onChange={passHandler}
          />
        </div>
        <br />
        <MDBBtn className="mx-2" color="success" type="submit">
          submit
        </MDBBtn>

        <div>
          {passErr ? (
            <span style={{ color: "red" }}>'Password Not Valid'</span>
          ) : (
            ""
          )}
        </div>
      </form>
      <h1>{wrongAuth}</h1>
    </div>
  );
}

export default Login;
