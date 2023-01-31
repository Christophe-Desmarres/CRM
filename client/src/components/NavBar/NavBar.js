import { Outlet, Link } from "react-router-dom";
import logo from '../../logo.png';
import { stack as Menu } from 'react-burger-menu'


const NavBar = () => {


  return (
    <div>
      <Menu>
      <div className="nav-container">
        <img src={logo} className="App-logo" alt="logo" />
        <ul>
          <h5 className="welcome">Hello</h5>
          <li>
            <Link to="/">Accueil</Link>
          </li>
          <li>
            <Link to="/store">Prestation</Link>
          </li>
          <li>
            <Link to="/todo">Todo</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/profil/Maurice">Mon Profil</Link>
          </li>
          <li>
            <Link to="/admin">Admin</Link>
          </li>
          <li>
            <Link to="/admin">Admin</Link>
          </li>
        </ul>
      </div>
      </Menu>
    </div>
  )
};

export default NavBar;