import React from 'react'
import logo from "../assets/logo.png";


export default function SideBar() {
  return (
    <div className='bg-red-500 h-screen'>
        <div className="banner flex bold border items-center p-3 gap-3">
      
        <img src={logo} />
        <h6 className="font-bold text-2xl">Didiyos</h6>
      </div>
    </div>
  )
}
