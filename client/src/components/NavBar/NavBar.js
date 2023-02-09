import { Link } from "react-router-dom";
import logo from '../../logo.png';
import { stack as Menu } from 'react-burger-menu'
import Pages from "./Pages/NavBar-Page";
import { FcHome, FcFaq, FcContacts, FcBusinessContact, FcMultipleCameras, FcViewDetails, FcServices } from "react-icons/fc";


const NavBar = () => {

 
  return (
    <>
    <Menu right isOpen={ false }>
      <Link to="/" className="menu-item" onClick={() => this.closeMenu()}>
        <FcHome size="1.5em" />
        <span>Accueil</span>
      </Link>
      <Link to="store" className="menu-item" onClick={() => this.closeMenu()} >
        <FcMultipleCameras size="1.5em" />
        <span>Projets</span>
      </Link>
      <Link to="todo" className="menu-item" onClick={() => this.closeMenu()} >
        <FcViewDetails size="1.5em" />
        <span>Todo</span>
      </Link>
      <Link to="contact" className="menu-item" onClick={() => this.closeMenu()} >
        <FcContacts size="1.5em" />
        <span>Contact</span>
      </Link>
      {/* <Link to="/profil/Maurice" className="menu-item" onClick={() => this.closeMenu()} >
        <FcBusinessContact size="1.5em" />
        <span>Mon Profil</span>
      </Link> */}
      <Link to="faq" className="menu-item" onClick={() => this.closeMenu()} >
        <FcFaq size="1.5em" />
        <span>FAQ</span>
      </Link>
      {/* <Link to="/admin" className="menu-item" onClick={() => this.closeMenu()} >
        <FcServices size="1.5em" />
        <span>Admin</span>
      </Link> */}
    </Menu>
    <nav className="top-navbar">
      <img src={logo} className="App-logo navbar-logo" alt="logo" />
      <Pages />
      {/* <Control /> */}
    </nav>
  </>

  )
};

export default NavBar;