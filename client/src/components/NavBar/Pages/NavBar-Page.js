import { NavLink } from "react-router-dom";

export default function Pages() {

    return (
      <div className="navbar-pages">
            <NavLink to="/"     
            >Accueil</NavLink>

            <NavLink to="projet"      
            >Projets</NavLink>

            <NavLink to="todo"     
            >Todo</NavLink>

            <NavLink to="contact"
            >Contact</NavLink>

            {/* <NavLink to="profil/Maurice"
            >Mon Profil</NavLink> */}

            <NavLink to="faq"
            >FAQ</NavLink>

            {/* <NavLink to="/admin"
            >Admin</NavLink> */}
      </div>
    );
  }
  