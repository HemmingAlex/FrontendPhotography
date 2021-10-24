import React from "react";

import style from "./SideDrawer.module.css";

const SideDrawer = props => {
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
          <a href="/">Login</a>
        </li>
      </ul>
    </nav>
  );
};

export default SideDrawer;
