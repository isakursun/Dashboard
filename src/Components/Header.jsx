import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <div className=" bg-blue-700 w-50">
        <GiHamburgerMenu className="text-xl" onClick={()=>{setIsOpen(true)}} />
    </div>
  );
}
