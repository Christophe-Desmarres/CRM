import React from 'react'
// import  skyinvadersImg from '../../../assets/images/pages/projet/skyinvader.jpg' 
import { GoLinkExternal, GoMarkGithub } from "react-icons/go";

export default function Project5() {
  return (
    <section id="project4" className='project__description'>
        {/* <details> */}
        {/* <summary> */}
            <h2>portfolio</h2>
            {/* </summary> */}
            <a href='https://chrisdmar.fr' target="_blank" rel="noreferrer" title='lien vers le site'><GoLinkExternal />Lien Portfolio</a>
            <a href='https://github.com/Christophe-Desmarres/CRM' target="_blank" rel="noreferrer" title='lien vers github'><GoMarkGithub />Lien github Portfolio</a>
            <p>Technologies : <span className='tag html'>HTML</span> <span className='tag sass'>Sass</span> <span className='tag react'>React</span> <span className='tag nodejs'>Node.js</span> <span className='tag mongodb'>MongoDB</span> <span className='tag photoshop'>Photoshop</span></p>
            <p>
            But : Apprendre Node.js avec Express, MongoDB et React et montrer mes compétences en développement web.
            <br />
            <br />
            </p>
            <em>Ce site sur lequel vous naviguez est encore en développement</em>
            {/* <div className='imgDiapo'>
                <p>Accueil</p>
                <img src={skyinvadersImg} alt="écran d'accueil version bureau du projet skyInvader" />
            </div> */}

</section>  )
}
