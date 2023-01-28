import { Outlet, Link } from "react-router-dom";
import logo from '../../logo.png';
import styledNavBar from 'styled-components';

 // styled components
 const Wrapper = styledNavBar.nav`
    width: 100%;
    background-color: papayawhip;
    border-radius: 5px;
    padding: 0.5rem;
    display: flex;
    justify-content: center;

    .logo {
    }

    div ul{
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        align-items: center;
        
          & li {
            display: inline-block;
            text-decoration: none;
            padding: 0.3rem;
            margin: 0.3rem;
            color: black;
            transition: 0.5s;

            a{
              color: black;
              text-decoration: none;
            }

          }
          
          & li:hover {
            text-shadow: 0 7px 7px black;
            font-weight: bold;
            padding-bottom: 0.5rem;
          }

          @media (min-width: 425px) {
            flex-direction: row;
            justify-content: center;
          }
        }`;





const NavBar = () => {
  return (
    <div>
      <nav>
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
        </ul>
      </div>
      </nav>

      {/* <Outlet /> */}
    </div>
  )
};

export default NavBar;