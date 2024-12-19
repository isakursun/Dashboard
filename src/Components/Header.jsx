import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import SideBar from "./SideBar";

export default function Header({ toggleSidebar }) {
  return (
    <div className=" p-3 flex items-center justify-between ">
      <GiHamburgerMenu  onClick={toggleSidebar} className="text-xl " />
      <img src="" className=" w-8 h-8 rounded-full border " />
    </div>
  );
}
