import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Routes,
  Outlet,
} from "react-router-dom";
import "./EffectHook.css";

function EffectHookRender() {
  return (
    <div className="EffectHookRender">
      <h1>useEffect Hook Examples</h1>

      <div className="effectHookRender-nav">
        <nav class="navbar navbar-light bg-light-col">
          <div class="container-fluid">
            <div class="" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <Link
                    to="EffectHookEX1"
                    className="nav-link component-nav-item"
                  >
                    updateDocumentTitle
                  </Link>
                </li>
                <li class="nav-item">
                  <Link
                    to="CursorPosition"
                    className="nav-link component-nav-item"
                  >
                    cursorPosition
                  </Link>
                </li>
                <li class="nav-item">
                  <Link
                    to="SetInterval"
                    className="nav-link component-nav-item"
                  >
                    setInterval Hook
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <div className="effectHookRender-outlet">
        <Outlet />
      </div>
    </div>
  );
}

export default EffectHookRender;
