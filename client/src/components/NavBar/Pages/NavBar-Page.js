import React from 'react'
import { Link } from "react-router-dom";
import { useCookies } from 'react-cookie';
import { GoPerson } from "react-icons/go";
import DisconectNavbar from './ProfilDisConnected';
import ConnectedNavbar from './ProfilConnected';
import logo from '../../../logo.png';
import styledNav from 'styled-components';

const Nav = styledNav.nav`

.navbar-pages-profil{
  position: absolute;
  right: -0.1rem;
  border: 1px solid #ff3372;
}`;

export default function Pages() {

      const [cookiesUser, setCookieUser] = useCookies(['user']);
      const [connectedMenu, setConnectedMenu] = React.useState(false);

      const openSubMenu = () => {
        setConnectedMenu(!connectedMenu);
      }


    return (
          <Nav className="top-navbar">

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

                  <div>
                    <GoPerson size="1.5em" className='navbar-pages-profil-icon'
                    onClick={openSubMenu}
                    /> 
                  {/* {
                  (cookiesUser.name === undefined) ? 
                    <GoPerson size="1.5em" className='navbar-pages-profil-icon'/> : 
                    <span className='navbar-pages-profil-name'>{cookiesUser.name}</span>
                  } */}
                  <div 
                    className='navbar-pages-profil'>
                  {/* menu fermé
                    si menu ouvert et cookiesUser.name alors afficher menu connecté
                    sinon afficher menu déconnecté
                   */}
                    { connectedMenu ? 
                      (cookiesUser.name ? <ConnectedNavbar /> : <DisconectNavbar />) :
                      '' }
                  </div>

                  </div>

            </div>
          </Nav>
    );
  }
  