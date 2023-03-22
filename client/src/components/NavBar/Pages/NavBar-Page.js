import React from 'react'
// import { Link } from "react-router-dom";
import logo from '../../../logo.png';


export default function Pages() {

    return (
          <nav className="top-navbar">

            <img src={logo} className="App-logo navbar-logo" alt="logo" />

            <div className="navbar-pages">

                <a href='/#app' >Accueil</a>
                <a href='/#project' >Projets</a>
                <a href='/#contactForm' >Contact</a>

                {/* <Link  to={`/`}  
                >Accueil</Link> */}

                {/* <Link to={`/#project`} 
                >Projets</Link> */}

                {/* <Link to={`todo`} 
                >Todo</Link> */}

                {/* <Link to={`contact`}
                >Contact</Link> */}

                {/* <Link to={`faq`}
                >FAQ</Link> */}

                {/* <Link  to={`profil`} 
                >Mon Profil</Link>  */}

            </div>
          </nav>
    );
  }
  