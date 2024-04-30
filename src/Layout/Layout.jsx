// import { useState } from "react";

import { Outlet } from "react-router-dom";
import Sidebar from "../Pages/Sidebar/Sidebar";

const Layout = () => {
  //   const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

  //   const OpenSidebar = () => {
  //     setOpenSidebarToggle(!openSidebarToggle);
  //   };

  return (
    <div className='grid-container'>
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default Layout;
