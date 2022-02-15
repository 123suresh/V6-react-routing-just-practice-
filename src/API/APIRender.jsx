import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Routes,
  Outlet,
} from "react-router-dom";
import GetUsers from "./GetUsers";
import POSTMethod from "./POSTMethod";

function APIRender() {
  return (
    <div className="APIRender">
      <h1>Employee Management System</h1>
      <div>
        <div className="apiRender-nav">
          <nav class="navbar navbar-light bg-light-col">
            <div class="container-fluid">
              <div class="" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                  <li class="nav-item">
                    <Link to="GetUsers" className="nav-link component-nav-item">
                      getUserInfo
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link
                      to="POSTMethod"
                      className="nav-link component-nav-item"
                    >
                      POSTMethod
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
        <div className="apiRender-outlet">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default APIRender;
