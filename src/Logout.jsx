import React from "react";
import { Link, Navigate } from "react-router-dom";

function Logout() {
  localStorage.removeItem("token");

  return <Navigate form="/Admin" to="/" />;
}

export default Logout;
