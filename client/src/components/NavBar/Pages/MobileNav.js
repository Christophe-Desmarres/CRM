import React from 'react'
import { Link, useLocation  } from "react-router-dom";
import { FcHome, FcFaq, FcContacts, FcBusinessContact, FcMultipleCameras, FcViewDetails, FcServices } from "react-icons/fc";


export default function MobileNav() {

    const params = useLocation ();
    console.log(params.hash); 


  return (
    <nav className="bm-item-list" >
        <h1>Menu</h1>

{/*         
        <a href='/#app' className={params.hash==="#app"?"menu-item active":"menu-item"}><FcHome size="1.5em" /> Accueil</a>
        <a href='/#project' className={params.hash==="#project"?"menu-item active":"menu-item"}><FcMultipleCameras size="1.5em" /> Projets</a>
        <a href='/#contactForm' className={params.hash==="#contactForm"?"menu-item active":"menu-item"}><FcContacts size="1.5em" /> Contact</a> */}



        <Link  to={`/#app`} 
            className={params.hash==="#app"?"menu-item active":"menu-item"} >
            <FcHome size="1.5em" />
            <span>Accueil</span>
        </Link>

        <Link  to={`/#project`} 
            className={params.hash==="#project"?"menu-item active":"menu-item"} >
            <FcMultipleCameras size="1.5em" />
            <span>Projets</span>
        </Link>
        <Link  to={`/#contactForm`}
            className={params.hash==="#contactForm"?"menu-item active":"menu-item"} >
            <FcContacts size="1.5em" />
            <span>Contact</span>
        </Link> 



        {/* <Link  to={`/`} 
            className={document.title==="Accueil"?"menu-item active":"menu-item"} >
            <FcHome size="1.5em" />
            <span>Accueil</span>
        </Link>

        <Link  to={`projet`} 
            className={document.title==="Projets"?"menu-item active":"menu-item"} >
            <FcMultipleCameras size="1.5em" />
            <span>Projets</span>
        </Link>

        <Link to={`todo`}  
            className={document.title==="LE Todo"?"menu-item active":"menu-item"} >
            <FcViewDetails size="1.5em" />
            <span>Todo</span>
        </Link>

        <Link  to={`contact`}
            className={document.title==="Contact"?"menu-item active":"menu-item"} >
            <FcContacts size="1.5em" />
            <span>Contact</span>
        </Link> */}

        {/* <Link to={`profil`}  
            className={document.title==="Profil"?"menu-item active":"menu-item"} >
            <FcBusinessContact size="1.5em" />
            <span>Mon Profil</span>
        </Link>

        <Link to={`faq`}
            className={document.title==="FAQ"?"menu-item active":"menu-item"} >
            <FcFaq size="1.5em" />
            <span>FAQ</span>
        </Link> */}

        {/* <Link  to={`admin`}
            className={document.title==="Administration"?"menu-item active":"menu-item"} >
            <FcServices size="1.5em" />
            <span>Admin</span>
        </Link> */}
</nav>
  )
}
