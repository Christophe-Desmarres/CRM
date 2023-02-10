import React, { useState } from 'react'
import { NavLink } from "react-router-dom";
import { FcHome, FcFaq, FcContacts, FcBusinessContact, FcMultipleCameras, FcViewDetails, FcServices } from "react-icons/fc";


export default function NavBarSide() {

    const [isOpen, setIsOpen] = useState(false);
    const style = isOpen ? { display: 'block' } : { display: 'none' }; 

  return (

    <div>
    <div class="bm-overlay" ></div>
<div>
  <div class="bm-burger-button">
    <button type="button" id="react-burger-menu-btn"  onClick={()=>setIsOpen(true)}>Open Menu</button>
    <span>
      <span class="bm-burger-bars" ></span>
      <span class="bm-burger-bars" ></span>
      <span class="bm-burger-bars" ></span>
    </span>
  </div>
</div>
  <div 
  class="bm-menu-wrap my--menu" 
  aria-hidden="true"
  hidden="true" >
    <div class="bm-menu">
      <nav class="bm-item-list" >

       
        <nav className='bm-menu' style={style}>
            <h1>Menu</h1>

            <NavLink  to="/"
                className="menu-item" 
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
        
        
        

      </nav>
    </div>
      <div class="bm-cross-button" >
        <button 
        type="button" 
        id="react-burger-cross-btn"
        tabindex="-1" >Close Menu</button>
      </div>
  </div>
</div>
    


  )
}
