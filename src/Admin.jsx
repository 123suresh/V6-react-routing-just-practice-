import React from "react";
import {
  MDBNavbar,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBBtn,
  MDBCol,
  MDBRow,
  MDBContainer,
  MDBIcon,
} from "mdb-react-ui-kit";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Routes,
  Outlet,
  Navigate,
} from "react-router-dom";
import "./App.css";

export default function Admin() {
  const token = localStorage.getItem("token");

  let loggedIn = true;

  if (token == null) {
    loggedIn = false;
  }

  if (loggedIn === false) {
    return <Navigate form="/Admin" to="/" />;
  }

  return (
    <>
      <div className="side-nav">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <div class="container-fluid">
            <div id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <Link
                    to="ComponentRender"
                    className="link text-dark admin-nav-item"
                  >
                    useState hook examples
                  </Link>
                </li>
                <li class="nav-item">
                  <Link
                    to="EffectHookRender"
                    className="link text-dark admin-nav-item"
                  >
                    useEffect hook Examples
                  </Link>
                </li>
                <li class="nav-item">
                  <Link
                    to="APIRender"
                    className="link text-dark admin-nav-item"
                  >
                    API Examples
                  </Link>
                </li>
              </ul>
            </div>
            <div class="d-flex align-items-center">
              <MDBBtn className="mx-2" color="danger">
                <Link to="/logout" className="link link-color" type="button">
                  Logout
                </Link>
              </MDBBtn>
            </div>
          </div>
        </nav>
      </div>
      <div className="main-routes">
        <Outlet />
      </div>
    </>
  );
}
