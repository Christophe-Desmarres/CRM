// Navbar on desktop
import React , { useState, useEffect, useRef } from 'react'
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
  right: 0rem;
  font-size: 0.8rem;
}`;

export default function Pages() {

      const [cookiesUser, setCookieUser] = useCookies(['user']);
      const [connectedMenu, setConnectedMenu] = useState(false);
      //const connectedMenuStyle = { display: (connectedMenu? 'none': 'block') }; 
      const [dropdown, setDropdown] = useState(false);
      let ref = useRef();

      // to open/close dropdown menu on click in or outside icon
      useEffect(() => {
        const handler = (event) => {
         if (dropdown && ref.current) {
          // add timout for go to the Link before close the menu
          setTimeout(() => {
            setDropdown(false);
          }, 200);
         } else if (ref.current.contains(event.target)){
            setDropdown(true);
        }
        };
        document.addEventListener("mousedown", handler);
        document.addEventListener("touchstart", handler);
        return () => {
         // Cleanup the event listener
         document.removeEventListener("mousedown", handler);
         document.removeEventListener("touchstart", handler);
        };
       }, [dropdown]);
       
       //! not used
       // to open dropdown menu for profil or sign in/up menu
       const onMouseEnter = () => {
        window.innerWidth > 960 && setDropdown(true);
        console.log('mouse enter > 960');
       };
       
       //! not used
       // to close dropdown menu for profil or sign in/up menu
       const onMouseLeave = () => {
        window.innerWidth > 960 && setDropdown(false);
        console.log('mouse leave > 960');
       };




    return (
          <Nav className="top-navbar">

            <img src={logo} className="App-logo navbar-logo" alt="logo" />

            <div className="navbar-pages" >

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

                  <div
                  ref={ref}
                  >
                    <GoPerson size="1.5em" className='navbar-pages-profil-icon'
                      /> 
                    <div 
                      className='navbar-pages-profil'
                      >
                      {/* 
                        si menu ouvert et cookiesUser.name alors afficher menu connecté
                        sinon afficher menu déconnecté
                      */}
                      { dropdown ? 
                        (cookiesUser.name ? <ConnectedNavbar /> : <DisconectNavbar />) :
                        '' }
                    </div>
                  </div>

            </div>
          </Nav>
    );
  }
  