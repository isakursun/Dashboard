import React from "react";
import { useState } from "react";
import Header from "../Components/Header";
import SideBar from "../Components/SideBar";
import Footer from "./Footer";

const Layout = ({ children }) => {
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
      <div className={`w-full transition-all flex min-h-screen flex-col duration-700 ${showSidebar ? ' sm:ml-64' : ""} ` }>
        <Header toggleSidebar={toggleSidebar} />
        <main className=" flex-grow bg-[#F3F4F6]">{children}</main>
        <Footer/>
      </div>
    </div>
  );
};

export default Layout;
