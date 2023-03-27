import React from "react";
import { Outlet } from "react-router-dom";

import Sidebar from "../components/Sidebar/Index";

const MainLayout = () => {
  return (
    <div>
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default MainLayout;
