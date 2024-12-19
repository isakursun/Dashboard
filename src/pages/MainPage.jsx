import React, { useState } from 'react'
import Header from '../Components/Header'
import SideBar from '../Components/SideBar'
import Main from '../Components/Main'



export default function MainPage() {
  const [showSidebar, setShowSidebar] = useState(false);

  

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  }

  return (
    <div className=' flex '>
      
      
       {showSidebar && <SideBar  />  }   
    <div className=' w-full' >
    
    <Header toggleSidebar={toggleSidebar}/>
    <Main />


    
    </div>
    </div>
  )
}

