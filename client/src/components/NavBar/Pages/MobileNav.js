import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { FcHome, FcFaq, FcContacts, FcBusinessContact, FcMultipleCameras, FcViewDetails, FcServices } from "react-icons/fc";


export default function MobileNav() {

  return (
    <nav className="bm-item-list" >
        <h1>Menu</h1>

        <Link  to={`/`} 
            className="menu-item" >
            <FcHome size="1.5em" />
            <span>Accueil</span>
        </Link>

        <Link  to={`projet`} 
            className="menu-item" >
            <FcMultipleCameras size="1.5em" />
            <span>Projets</span>
        </Link>

        <Link to={`todo`}  
            className="menu-item" >
            <FcViewDetails size="1.5em" />
            <span>Todo</span>
        </Link>

        <Link  to={`contact`}
            className="menu-item" >
            <FcContacts size="1.5em" />
            <span>Contact</span>
        </Link>

        <Link to={`profil`}  
            className="menu-item" >
            <FcBusinessContact size="1.5em" />
            <span>Mon Profil</span>
        </Link>

        <Link to={`faq`}
            className="menu-item" >
            <FcFaq size="1.5em" />
            <span>FAQ</span>
        </Link>

        <Link  to={`admin`}
            className="menu-item" >
            <FcServices size="1.5em" />
            <span>Admin</span>
        </Link>
</nav>
  )
}
