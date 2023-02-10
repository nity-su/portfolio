import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../ui/Nav/Navbar";

export default function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}
