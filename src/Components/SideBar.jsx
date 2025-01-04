import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { list } from "../utils/constants.js";

export default function SideBar({ showSidebar}) {
  console.log(showSidebar);
  return (
    <div
    className={` z-[70] fixed top-0 left-0 h-screen bg-[#F3F4F6] p-7 transition-transform duration-700 w-64 ${
      showSidebar ? "translate-x-0" : "-translate-x-full"
    }`}
    >
      <div className=" flex  items-center  gap-3 ">
        <img src={logo} />
        <h6 className="font-bold text-2xl">Didiyos</h6>
      </div>
      <div className=" flex flex-col gap-5 mt-16 ">
        {list.map((item, i) => (
          <Link
            key={i}
            className="flex gap-2 items-center  text-sm  text-[#9B9895]"
          >
            <span className="text-2xl">{item.icon}</span>
            <span className="text-nowrap">{item.title}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
