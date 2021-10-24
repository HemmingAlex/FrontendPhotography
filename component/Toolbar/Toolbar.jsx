import React from "react";

import DrawerToggleButton from "../SideDrawer/DrawerToggleButton";
import style from "./Toolbar.module.css";
import Link from "next/Link"

const Toolbar = props => (
  <header className={style.toolbar}>
    <nav className={style.toolbarNavigation}>
      <div className={style.toolbarToggleButton}>
        <DrawerToggleButton click={props.drawerClickHandler} />
      </div>
      <div className={style.toolbarLogo}>
      {/* <img height="40" width="40" src="Logo.png" /> */}
        <Link href="/"> Ella Photography</Link>
      </div>
      <div className={style.spacer} />
      <div className={style.toolbarNavigationItems}>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/Login">Login </Link>
          </li>
        </ul>
      </div>
    </nav>
  </header>
);

export default Toolbar;
