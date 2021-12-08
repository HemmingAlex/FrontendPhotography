import React from "react";

import style from "./SideDrawer.module.css";
import Link from "next/link";

const SideDrawer = (props) => {
  let drawerClasses = style.sideDrawer;
  if (props.show) {
    drawerClasses = style.SideDrawer;
  }

  return (
    <nav className={drawerClasses}>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a>
            <Link href="/Login">Login</Link>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default SideDrawer;
