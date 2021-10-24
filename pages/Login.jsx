import React, { useState } from "react";
import Toolbar from "../component/Toolbar/Toolbar";
import SideDrawer from "../component/SideDrawer/SideDrawer";
import Backdrop from "../component/Backdrop/Backdrop";

function Login() {
  const [sideOpen, setSideOpen] = useState(false);

  const drawerToggleClickHandler = () => {
    setSideOpen(!sideOpen);
  };

  const backdropClickHandler = () => {
    setSideOpen(false);
  };
  let backdrop;
  if (sideOpen) {
    backdrop = <Backdrop click={backdropClickHandler} />;
  }

  return (
    <div>
      <Toolbar drawerClickHandler={drawerToggleClickHandler} />
      <SideDrawer show={sideOpen} />
      {backdrop}
      <div
        style={{
          height: "100vh",
          width: "100vw",
          position: "fixed",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex:"-1",
        }}
      >
        Login
      </div>
    </div>
  );
}
export default Login;
