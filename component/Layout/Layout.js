import React from "react"; // { useEffect, useState }
// import Toolbar from "../Toolbar/Toolbar";
// import SideDrawer from "../SideDrawer/SideDrawer";
// import Backdrop from "../Backdrop/Backdrop";

function Layout({ children }) {
  //   const [sideOpen, setSideOpen] = useState(false);
  //   let backdrop;
  //   useEffect(() => {
  //     if (sideOpen) {
  //       backdrop = <Backdrop click={backdropClickHandler} />;
  //     } else {
  //       backdrop = <div className="hidden" />;
  //     }
  //   }, []);

  return <content>{children}</content>;
}

export default Layout;
