import React, { useContext, useState } from "react";
import AuthContext from "../context/AuthContext";
import Head from "next/head";
import Toolbar from "../component/Toolbar/Toolbar";
import SideDrawer from "../component/SideDrawer/SideDrawer";
import Backdrop from "../component/Backdrop/Backdrop";

function Account() {
  const [sideOpen, setSideOpen] = useState(false);
  let backdrop;
  if (sideOpen) {
    backdrop = <Backdrop click={backdropClickHandler} />;
  }
  const drawerToggleClickHandler = () => {
    setSideOpen(!sideOpen);
  };

  const backdropClickHandler = () => {
    setSideOpen(false);
  };
  const { user, logoutUser } = useContext(AuthContext);
  console.log(user, "hello");

  return (
    <div>
      <Head>
        <title>Account</title>
        <meta name="description" content="view account and log out" />
      </Head>
      <Toolbar className="z-40" drawerClickHandler={drawerToggleClickHandler} />
      <SideDrawer show={sideOpen} />
      {backdrop}
      {!user ? (
        <div style={{ zIndex: 1 }} className="grid place-content-center">
          login please
          <h1 onClick={() => logoutUser()}>Logout</h1>
        </div>
      ) : (
        <div
          style={{ zIndex: 1 }}
          className="flex h-screen relative mb-10 flex-wrap justify-center items-center text-lg font-bold"
        >
          <div className="text-center">
            Hello there{" "}
            <span className="text-blue-500 inline"> {user?.email}</span>
            <button
            style={{ zIndex: 1 }}
              className="button mx-auto flex justify-center"
              onClick={() => logoutUser()}
            >
              Logout?
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Account;
