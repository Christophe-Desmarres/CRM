import React from 'react'
import  skyinvadersImg from '../../../assets/images/pages/projet/skyinvader.jpg' 
import { GoLinkExternal, GoMarkGithub } from "react-icons/go";

export default function Project4() {
  return (
    <section id="project4" className='project__description'>
        {/* <details> */}
        {/* <summary> */}
            <h2>skyInvaders</h2>
            {/* </summary> */}
            <a href='https://christophe-desmarres.github.io/skyInvaders/' target="_blank" rel="noreferrer" title='lien vers le site'><GoLinkExternal />Lien skyInvaders</a>
            <a href='https://github.com/Christophe-Desmarres/skyInvaders' target="_blank" rel="noreferrer" title='lien vers github'><GoMarkGithub />Lien github skyInvaders</a>
            <p>Technologies : <span className='tag html'>HTML</span> <span className='tag css'>CSS</span> <span className='tag js'>Javascript</span></p>
            <p>
            But : Développer un jeu en ligne
            <br />
            <strong>Warning : Konami code cheat</strong>
            <br />
            </p>
            <div className='imgDiapo'>
                <p>Accueil</p>
                <img src={skyinvadersImg} alt="écran d'accueil version bureau du projet skyInvader" />
            </div>
            {/* </details> */}

</section>  )
}
