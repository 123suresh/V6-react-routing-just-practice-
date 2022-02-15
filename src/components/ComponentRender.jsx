import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Routes,
  Outlet,
} from "react-router-dom";

function ComponentRender() {
  return (
    <>
      <div className="ComponentRender">
        <h1>UseState Hook Exapmles</h1>
        <div className="component-nav-width">
          <nav class="navbar navbar-light nav-width">
            <div class="container-fluid">
              <div id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0 component-nav-ul">
                  <li class="nav-item">
                    <Link to="PostForm" className="nav-link component-nav-item">
                      PostForm
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link
                      to="GetRequest"
                      className="nav-link component-nav-item"
                    >
                      GetRequest
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link
                      to="ResetCount"
                      className="nav-link component-nav-item"
                    >
                      ResetCount
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link
                      to="HookCounterThree"
                      className="nav-link component-nav-item"
                    >
                      useStatePrintValue
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link
                      to="HooksCounterFour"
                      className="nav-link component-nav-item"
                    >
                      useStateArray
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
        <div className="component-outlet">
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default ComponentRender;
