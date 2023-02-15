import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { FcHome, FcFaq, FcContacts, FcBusinessContact, FcMultipleCameras, FcViewDetails, FcServices } from "react-icons/fc";
import MobileNav from './MobileNav';

export default function NavBarSide() {

    const [isOpen, setIsOpen] = useState(false);
    const Menu = isOpen ? { display: 'block' } : { display: 'none' }; 
    const Button = isOpen ? { display: 'none' } : { display: 'block' }; 

  return (

    <div className="bm-overlay" >
<div>
  <div id="react-burger-menu-btn"   style={Button}>
    <button 
    type="button" 
    
    className="bm-burger-button"
    onClick={()=>{
      setIsOpen(true);
      console.log("click it");
      }}>
      Menu
      <span className="bm-burger-bars" ></span>
      <span className="bm-burger-bars" ></span>
      <span className="bm-burger-bars" ></span>
    </button>
  </div>
</div>
  <div className="bm-menu-wrap" >
       
          <div className='bm-menu' style={Menu}>
            <MobileNav />
            </div>

        
        
        

      <div className="bm-cross-button"  style={Menu}>
        <button 
        type="button" 
        id="react-burger-cross-btn"
        onClick={()=>{
      setIsOpen(false);
      console.log("click it");
      }}
        >Close Menu</button>
      </div>
  </div>
  </div>


  )
}
