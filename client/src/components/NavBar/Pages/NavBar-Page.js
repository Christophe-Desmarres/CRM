import React, { useState } from 'react'
import { Link } from "react-router-dom";
import logo from '../../../logo.png';
import MobileNav from './MobileNav';


export default function Pages() {

    return (
          <nav className="top-navbar">

            <img src={logo} className="App-logo navbar-logo" alt="logo" />

            <div className="navbar-pages">

                <Link  to={`/`}  
                >Accueil</Link>

                <Link to={`projet`} 
                >Projets</Link>

                <Link to={`todo`} 
                >Todo</Link>

                <Link to={`contact`}
                >Contact</Link>

                {/* <Link to={`faq`}
                >FAQ</Link>

                <Link  to={`profil`} 
                >Mon Profil</Link>  */}


            </div>
          </nav>
    );
  }
  