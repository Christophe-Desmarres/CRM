import React, { useState } from 'react'
import MobileNav from './MobileNav';

export default function NavBarSide() {

    const [isOpen, setIsOpen] = useState(false);
    const Menu = isOpen ? { width: '50vw',display: 'block' } : { width: '0vw'}; 
    const CrossButton = isOpen ? { display: 'block' } : { display: 'none' }; 
    const BurgerButton = isOpen ? { display: 'none' } : { display: 'block' }; 

  return (

  <div className={isOpen ? "bm-overlay" : ""} >
    <div>
      <div   
        style={BurgerButton}
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
        
      <div className="bm-cross-button"  style={CrossButton}>
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
