import React from "react";
import Style from "./spinner.module.css";

function Spinner() {
  return (
    <div class={Style.spinner}>
      <div class={Style.cube1} />
      <div class={Style.cube2} />
    </div>
  );
}

export default Spinner;
