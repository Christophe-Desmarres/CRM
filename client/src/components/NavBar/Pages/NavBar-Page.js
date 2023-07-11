// Navbar on desktop
import React , { useState, useEffect, useRef } from 'react'
import { Link } from "react-router-dom";
import { useCookies } from 'react-cookie';
import { GoPerson } from "react-icons/go";
import DisconectNavbar from './ProfilDisConnected';
import ConnectedNavbar from './ProfilConnected';
import logo from '../../../logo.png';
import styledNav from 'styled-components';
import { set } from 'mongoose';

const Nav = styledNav.nav`

.navbar-pages-profil{
  position: absolute;
  right: -0.1rem;
  border: 1px solid #ff3372;
}`;

export default function Pages() {

      const [cookiesUser, setCookieUser] = useCookies(['user']);
      const [connectedMenu, setConnectedMenu] = useState(false);
      //const connectedMenuStyle = { display: (connectedMenu? 'none': 'block') }; 
      const [dropdown, setDropdown] = useState(false);
      let ref = useRef();

      // const openSubMenu = () => {
      //   setDropdown(!dropdown);
      //   console.log('click');
      // }

      useEffect(() => {
        const handler = (event) => {
         if (dropdown && ref.current) {
          setDropdown(false);
          console.log('click outside');
         } else if (ref.current.contains(event.target)){
          setDropdown(true);
          console.log('click inside');
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
       
       const onMouseEnter = () => {
        window.innerWidth > 960 && setDropdown(true);
        console.log('mouse enter > 960');
       };
       
       const onMouseLeave = () => {
        window.innerWidth > 960 && setDropdown(false);
        console.log('mouse leave > 960');
       };




    return (
          <Nav className="top-navbar">

            <img src={logo} className="App-logo navbar-logo" alt="logo" />

            <div className="navbar-pages" >

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

                  <div
                  //onClick={openSubMenu}
                  ref={ref}
                  onMouseEnter={onMouseEnter}
                  onMouseLeave={onMouseLeave}
                  >
                    <GoPerson size="1.5em" className='navbar-pages-profil-icon'
                    //style={connectedMenuStyle}
                      /> 

                    {/* {
                    (cookiesUser.name === undefined) ? 
                      <GoPerson size="1.5em" className='navbar-pages-profil-icon'/> : 
                      <span className='navbar-pages-profil-name'>{cookiesUser.name}</span>
                    } */}

                    <div 
                      className='navbar-pages-profil'
                      >
                      {/* menu fermé
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
  