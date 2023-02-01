// import { Outlet, Link } from "react-router-dom";
import logo from '../../logo.png';
import { bubble as Menu } from 'react-burger-menu'
import Pages from "./Pages/NavBar-Page";
import { FcHome, FcFaq, FcContacts, FcBusinessContact, FcMultipleCameras, FcViewDetails, FcStackOfPhotos,FcServices } from "react-icons/fc";


const NavBar = () => {


  return (
    <>
    <Menu>
      <a className="menu-item" href="/">
        <FcHome size="1.5em" />
        <span>Accueil</span>
      </a>
      <a className="menu-item" href="/store">
        <FcMultipleCameras size="1.5em" />
        <span>Prestation</span>
      </a>
      <a className="menu-item" href="/todo">
        <FcViewDetails size="1.5em" />
        <span>Todo</span>
      </a>
      <a className="menu-item" href="/contact">
        <FcContacts size="1.5em" />
        <span>Contact</span>
      </a>
      <a className="menu-item" href="/profil/Maurice">
        <FcBusinessContact size="1.5em" />
        <span>Mon Profil</span>
      </a>
      <a className="menu-item" href="/faq">
        <FcFaq size="1.5em" />
        <span>FAQ</span>
      </a>
      <a className="menu-item" href="/admin">
        <FcServices size="1.5em" />
        <span>Admin</span>
      </a>
    </Menu>
    <nav className="top-navbar">
      <img src={logo} className="App-logo navbar-logo" alt="logo" />
      <Pages />
      {/* <Control /> */}
    </nav>
  </>
    // <div>
    //   <Menu>
    //   <div className="nav-container">
    //     <img src={logo} className="App-logo navbar-logo" alt="logo" />
    //     <ul className="bm-item-list">
    //       <h5 className="bm-item welcome">Hello {"Profil_Name"}</h5>
    //       <li className="bm-item">
    //         <Link to="/">Accueil</Link>
    //       </li>
    //       <li className="bm-item">
    //         <Link to="/store">Prestation</Link>
    //       </li>
    //       <li className="bm-item">
    //         <Link to="/todo">Todo</Link>
    //       </li>
    //       <li className="bm-item">
    //         <Link to="/contact">Contact</Link>
    //       </li>
    //       <li className="bm-item">
    //         <Link to="/profil/Maurice">Mon Profil</Link>
    //       </li>
    //       <li className="bm-item">
    //         <Link to="/admin">Admin</Link>
    //       </li>
    //     </ul>
    //   </div>
    //   </Menu>
    // </div>
  )
};

export default NavBar;