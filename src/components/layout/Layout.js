import React from "react";
import MainNavigation from "./MainNavigation";
import dyn from "./Layout.module.css";
function Layout(props) {
  return (
    <div>
      <MainNavigation />
      <main className={dyn.main}>{props.children}</main>
    </div>
  );
}

export default Layout;
