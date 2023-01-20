import { Outlet, Link } from "react-router-dom";
import logo from '../logo.svg';
import '../styles/NavBar.css';

const NavBar = () => {
  return (
    <>
      <nav>
        <ul className="navbar">
        <img src={logo} className="App-logo" alt="logo" />

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
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default NavBar;