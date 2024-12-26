import React from "react";
import { useState } from "react";
import Header from "../Components/Header";
import SideBar from "../Components/SideBar";

const Layout = ({children}) => {
  const [showSidebar, setShowSidebar] = useState(false);
  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <div className=" flex ">
      <SideBar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
      <div>
        {showSidebar && (
          <div
            onClick={toggleSidebar}
            className="fixed inset-0 bg-black bg-opacity-40
                      z-50 "
          ></div>
        )}
      </div>
      <div className=" w-full">
        <Header toggleSidebar={toggleSidebar} />
      <main>{children}</main>
      </div>
    </div>
  );
};

export default Layout;
