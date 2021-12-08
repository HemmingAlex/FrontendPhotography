import React, { useContext } from "react";
import AuthContext from "../../context/AuthContext";
import DrawerToggleButton from "../SideDrawer/DrawerToggleButton";
import style from "./Toolbar.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

const Toolbar = (props) => {
  const { pathname } = useRouter();
  const { user } = useContext(AuthContext);
  return (
    <header className={`z-20 ${style.toolbar}`}>
      <nav className={style.toolbarNavigation}>
        <div className={style.toolbarToggleButton}>
          <DrawerToggleButton click={props.drawerClickHandler} />
        </div>
        <div
          onClick={() => {
            if (pathname == "/") {
              window.location.reload(false);
            }
          }}
          className={style.toolbarLogo}
        >
          <Link href="/"> Ella Photography</Link>
        </div>
        <div className={style.spacer} />
        <div className={`cursor-pointer ${style.toolbarNavigationItems}`}>
          <ul>
            <li
              onClick={() => {
                if (pathname == "/") {
                  window.location.reload(false);
                }
              }}
            >
              <Link className="cursor-pointer" href="/">
                Home
              </Link>
            </li>
            <li className="cursor-pointer z-2 mr-2 text-white ">
              {user ? (
                ""
              ) : (
                <a href="/Login">
                  {/* <a> */}
                  Login
                  {/* </a>{" "} */}
                </a>
              )}
              {user && <Link href="/Account"> Account </Link>}
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Toolbar;
