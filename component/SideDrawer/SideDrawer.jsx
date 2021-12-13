import React, { useContext } from "react";

import Link from "next/link";
import AuthContext from "../../context/AuthContext";

const SideDrawer = (props) => {
  const { user } = useContext(AuthContext);

  let drawerClasses = "ease-in -translate-x-full duration-150 w-none fixed";
  if (props.show) {
    drawerClasses =
      "bg-Purps z-1 translate-x-0 ease-out duration-150 opacity-100 h-full text-black z-99 shadowed top-0 fixed left-0 w-1/2 m-w-80";
  }

  return (
    <nav className={drawerClasses}>
      <ul className="relative top-20 ml-8 w-max font-bold text-lg text-white">
        <li className="text-left relative p-3 ">
          <a href="/" style={{ zIndex: 2 }}>
            Home
          </a>
        </li>
        <li style={{ zIndex: 2 }} className="text-left mt-8 relative p-3">
          {user ? (
            ""
          ) : (
            <Link href="/Login">
              <a>Login</a>
            </Link>
          )}
          {user && (
            <Link href="/Account">
              <a>Account</a>
            </Link>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default SideDrawer;
