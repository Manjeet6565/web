import React from "react";
import { Outlet } from "react-router-dom";
import Heador from "../Heador/Heador";
import Footer from "../Footer/Footer";
function Layout() {
  return (
    <>
      <Heador />
      <Outlet />
      <Footer />
    </>
  );
}
export default Layout;
