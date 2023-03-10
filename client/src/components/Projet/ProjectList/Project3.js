import React from 'react'
import  cvMobileImg from '../../../assets/images/pages/projet/cv__mobile.jpg' 
import  cvDesktopImg from '../../../assets/images/pages/projet/cv__desktop.jpg' 
import { GoLinkExternal, GoMarkGithub } from "react-icons/go";

export default function Project3() {
  return (
    <section id="project3" className='project__description'>
        {/* <details> */}
        {/* <summary> */}
            <h2>CV en ligne</h2>
            {/* </summary> */}
            <a href='https://christophe-desmarres.github.io/' target="_blank" rel="noreferrer" title='lien vers le site'><GoLinkExternal />Lien CV en ligne</a>
            <a href='https://github.com/Christophe-Desmarres/Christophe-Desmarres.github.io' target="_blank" rel="noreferrer" title='lien vers github'><GoMarkGithub />Lien CV sur github</a>
            <p className='project__techno'>Technologies : </p> 
            <ul className='project__techno--list'>            
            <span className='tag html'>HTML</span> 
            <li className='tag css'>CSS</li> 
            <li className='tag js'>Javascript</li>
            </ul>

            <p>
            But : Définir un CV en ligne pour présenter mes compétences et mes projets
            <br />
            </p>
            <div className='imgDiapo'>
                <p className='imgDiapo__p'>Accueil version desktop</p>
                <img className='imgDiapo__img' src={cvMobileImg} alt="écran d'accueil version bureau du projet cv en ligne" />
                <p className='imgDiapo__p'>Accueil version mobile</p>
                <img className='imgDiapo__img' src={cvDesktopImg} alt="écran d'accueil version mobile du projet cv en ligne" />
            </div>
            {/* </details> */}

</section>  )
}
