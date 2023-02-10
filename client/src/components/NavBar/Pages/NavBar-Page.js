import { NavLink } from "react-router-dom";
import logo from '../../../logo.png';


export default function Pages() {

    return (
          <nav className="top-navbar">

            <img src={logo} className="App-logo navbar-logo" alt="logo" />

            <div className="navbar-pages">

                <NavLink to="/"     
                >Accueil</NavLink>

                <NavLink to="projet"      
                >Projets</NavLink>

                <NavLink to="todo"     
                >Todo</NavLink>

                <NavLink to="contact"
                >Contact</NavLink>

                <NavLink to="faq"
                >FAQ</NavLink>

                <NavLink  to="profil" 
                >Mon Profil</NavLink>

            </div>
          </nav>
    );
  }
  