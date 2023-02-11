import React, { useState } from 'react'
import { NavLink } from "react-router-dom";
import { FcHome, FcFaq, FcContacts, FcBusinessContact, FcMultipleCameras, FcViewDetails, FcServices } from "react-icons/fc";


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
  <div 
  className="bm-menu-wrap" 
  >

       
        <nav className='bm-menu' style={Menu}>
            <h1>Menu</h1>

            <NavLink  to="/"
                className="menu-item bm-item-list" 
                onClick={() => this.closeMenu()}>
                <FcHome size="1.5em" />
                <span>Accueil</span>
            </NavLink>

            <NavLink  to="projet"
                className="menu-item" 
                onClick={() => this.closeMenu()} >
                <FcMultipleCameras size="1.5em" />
                <span>Projets</span>
            </NavLink>

            <NavLink  to="todo"
                className="menu-item" 
                onClick={() => this.closeMenu()} >
                <FcViewDetails size="1.5em" />
                <span>Todo</span>
            </NavLink>

            <NavLink  to="contact"
                className="menu-item" 
                onClick={() => this.closeMenu()} >
                <FcContacts size="1.5em" />
                <span>Contact</span>
            </NavLink>

            <NavLink  to="profil" 
                className="menu-item" 
                onClick={() => this.closeMenu()} >
                <FcBusinessContact size="1.5em" />
                <span>Mon Profil</span>
            </NavLink>

            <NavLink to="faq"
                className="menu-item" 
                onClick={() => this.closeMenu()} >
                <FcFaq size="1.5em" />
                <span>FAQ</span>
            </NavLink>

            {/* <NavLink  to="admin" 
                className="menu-item" 
                onClick={() => this.closeMenu()} >
                <FcServices size="1.5em" />
                <span>Admin</span>
            </NavLink> */}
        </nav>
        
        
        

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
