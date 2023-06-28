import React from 'react'
import { Link } from "react-router-dom";
import { useCookies } from 'react-cookie';
import { GoPerson } from "react-icons/go";
import DisconectNavbar from './ProfilDisConnected';
import ConnectedNavbar from './ProfilConnected';
import logo from '../../../logo.png';


export default function Pages() {

      const [cookiesUser, setCookieUser] = useCookies(['user']);

    return (
          <nav className="top-navbar">

            <img src={logo} className="App-logo navbar-logo" alt="logo" />

            <div className="navbar-pages">

                {/* <a href='/#app' >Accueil</a>
                <a href='/#project' >Projets</a>
                <a href='/#contactForm' >Contact</a> */}

                <Link  to={`/`}  
                >Accueil</Link>

                <Link to={`/projet`} 
                >Projets</Link>

                {/* <Link to={`todo`} 
                >Todo</Link> */}

                <Link to={`contact`}
                >Contact</Link>

                {/* <Link to={`faq`}
                >FAQ</Link> */}

                  <Link to={`profil`} 
                   >
                  {
                  (cookiesUser.name === undefined) ? 
                    <GoPerson size="1.5em" className='navbar-pages-profil-icon'/> : 
                    <span className='navbar-pages-profil-name'>{cookiesUser.name}</span>
                  }
                  </Link>

            </div>
          </nav>
    );
  }
  