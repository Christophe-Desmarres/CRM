import { Link } from "react-router-dom";

export default function Pages() {
    return (
      <div className="navbar-pages">
            <Link to="/">Accueil</Link>
            <Link to="store">Projets</Link>
            <Link to="todo">Todo</Link>
            <Link to="contact">Contact</Link>
            {/* <Link to="profil/Maurice">Mon Profil</Link> */}
            <Link to="faq">FAQ</Link>
            {/* <Link to="admin">Admin</Link> */}
      </div>
    );
  }
  