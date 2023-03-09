import React, { useState } from 'react'
import MobileNav from './MobileNav';
import { Link } from 'react-router-dom';

export default function NavBarSide() {

    const [isOpen, setIsOpen] = useState(false);
    const Menu = isOpen ? { width: '50vw',display: 'block' } : { width: '0vw'}; 
    const CrossButton = isOpen ? { display: 'block' } : { display: 'none' }; 
    const BurgerButton = isOpen ? { display: 'none' } : { display: 'block' }; 

  return (

  <div id="burger-menu" className={isOpen ? "bm-overlay" : ""} onClick={()=>{(document.getElementById("burger-menu").className ==="bm-overlay") && setIsOpen(false)}}>
    <div>
      <div   
        style={BurgerButton}
        onClick={()=>{
          setIsOpen(true);
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
      }}
        >X</button>
      </div>

    <div className='bm-menu' style={Menu} onClick={()=>{setIsOpen(false);}}>
      <MobileNav />
    </div>
    <div className='down__bar'>
      <div><Link className='link' to="/admin/utilisateur"></Link></div>
    </div>
    </div>


  </div>


  )
}
