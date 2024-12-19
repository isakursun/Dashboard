import React from 'react'
import logo from "../assets/logo.png";
import { Link } from 'react-router-dom';


export default function SideBar() {

  const list = ["Starter Pages", "Dashboard", "User Management", "Report Management", "Event Management"]

  return (
    <div className={' h-screen bg-[#F3F4F6] p-3 '}>
      <div className=" flex  items-center  gap-3 ">

        <img src={logo} />
        <h6 className="font-bold text-2xl">Didiyos</h6>

      </div>
      <div className=' flex flex-col gap-5 mt-16 '   >
        {list.map((item, i) => (
          <Link key={i} className=' text-sm  text-[#9B9895]'>
            {item}

          </Link>
        ))}
      </div>
    </div>
  )
}
