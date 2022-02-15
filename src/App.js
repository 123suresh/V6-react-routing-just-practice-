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
} from "react-router-dom";

import Login from "./Login";
import Admin from "./Admin";
import Logout from "./Logout";
import ComponentRender from "./components/ComponentRender";
import PostForm from "./components/PostForm";
import GetRequest from "./components/GetRequest";
import ResetCount from "./components/ResetCount";
import HookCounterThree from "./components/HookCounterThree";
import HooksCounterFour from "./components/HooksCounterFour";
import EffectHookRender from "./EffectHook/EffectHookRender";
import EffectHookEX1 from "./EffectHook/EffectHookEX1";
import CursorPosition from "./EffectHook/CursorPosition";
import SetInterval from "./EffectHook/SetInterval";
import APIRender from "./API/APIRender";
import GetUsers from "./API/GetUsers";
import POSTMethod from "./API/POSTMethod";
import Error from "./Error";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="*" element={<Error />} />

        <Route path="/Admin" element={<Admin />}>
          <Route path="ComponentRender" element={<ComponentRender />}>
            <Route exact path="PostForm" element={<PostForm />} />
            <Route path="GetRequest" element={<GetRequest />} />
            <Route path="ResetCount" element={<ResetCount />} />
            <Route path="HookCounterThree" element={<HookCounterThree />} />
            <Route path="HooksCounterFour" element={<HooksCounterFour />} />
          </Route>

          <Route path="EffectHookRender" element={<EffectHookRender />}>
            <Route path="EffectHookEX1" element={<EffectHookEX1 />} />
            <Route path="CursorPosition" element={<CursorPosition />} />
            <Route path="SetInterval" element={<SetInterval />} />
          </Route>

          <Route path="APIRender" element={<APIRender />}>
            <Route path="GetUsers" element={<GetUsers />} />
            <Route path="POSTMethod" element={<POSTMethod />} />
          </Route>
        </Route>
        <Route path="/Logout" element={<Logout />} />
      </Routes>
    </Router>
  );
}
