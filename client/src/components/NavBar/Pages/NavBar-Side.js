import React, { useState } from 'react'
import MobileNav from './MobileNav';

export default function NavBarSide() {

    const [isOpen, setIsOpen] = useState(false);
    const Menu = isOpen ? { display: 'block' } : { display: 'none' }; 
    const Button = isOpen ? { display: 'none' } : { display: 'block' }; 

  return (

  <div className={isOpen ? "bm-overlay" : ""} >
    <div>
      <div   
        style={Button}
        onClick={()=>{
          setIsOpen(true);
          console.log("menu button");
        }}
        id="react-burger-menu-btn" 
      >
        <button 
        type="button" 
        className="bm-burger-button" 
        >
          <span className="bm-burger-bars" ></span>
          <span className="bm-burger-bars" ></span>
          <span className="bm-burger-bars" ></span>
        </button>
      </div>
    </div>
    <div className="bm-menu-wrap" >
        
      <div className="bm-cross-button"  style={Menu}>
        <button 
        type="button" 
        onClick={()=>{
      setIsOpen(false);
      console.log("click it");
      }}
        >X</button>
      </div>

    <div className='bm-menu' style={Menu} onClick={()=>{setIsOpen(false);}}>
      <MobileNav />
    </div>

    </div>
  </div>


  )
}
