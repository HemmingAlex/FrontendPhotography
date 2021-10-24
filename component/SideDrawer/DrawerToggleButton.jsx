import React from "react";
import style from "./DrawerToggleButton.module.css";

const DrawerToggleButton = (props) => (
  <button className={style.toggleButton} onClick={props.click}>
    <div className={style.toggleButtonLine} />

    <div className={style.toggleButtonLine} />
    <div className={style.toggleButtonLine} />
  </button>
);

export default DrawerToggleButton;
