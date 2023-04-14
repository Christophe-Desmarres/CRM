import React from 'react'
import { GoLinkExternal, GoMarkGithub } from "react-icons/go";
import { Link } from 'react-router-dom'

export default function Project5() {
  return (
    <section id="project4" className='project__description'>
        {/* <details> */}
        {/* <summary> */}
            <h2>portfolio</h2>
            {/* </summary> */}
            <a href='https://chrisdmar.fr' target="_blank" rel="noreferrer" title='lien vers le site'><GoLinkExternal />Lien Portfolio</a>
            <a href='https://github.com/Christophe-Desmarres/CRM' target="_blank" rel="noreferrer" title='lien vers github'><GoMarkGithub />Lien github Portfolio</a>
            <p className='project__techno'>Technologies : </p> 
            <ul className='project__techno--list'>            
              <span className='tag html'>HTML</span> 
              <span className='tag sass'>Sass</span> 
              <span className='tag react'>React</span> 
              <span className='tag nodejs'>Node.js</span> 
              <span className='tag mongodb'>MongoDB</span> 
              <span className='tag photoshop'>Photoshop</span>
            </ul>
            <p>
            But : Monter un projet MERN pour apprendre MongoDB, Express, React et Node.js et acquérir de nouvelles compétences en développement web.
            </p>
            <br />
            <ul className='project__list--action'>
            Etapes :
            <br />
                <li>- integrer des composants React</li>
                <li>- visualiser mes projets</li>
                <li>- utiliser des libraires js comme "emailjs"</li>
                <li>- récuperer des données d'un base réalisée en Node.js et MongoDB</li>
                <li>- afficher mes galeries photos récupérées d'une API</li>
            </ul>
            <br />
            <ul className='project__list--action'>
            Prochaines étapes :
            <br />
                <li><Link  to={`/admin`}>- intégrer le CRUD pour la base client</Link></li>
                <li>- ajouter une inscription et authentification</li>
                <li>- activer le google captcha</li>
                <li>- transferer mon site de photographe</li>
                <li>- creer une page pour faire de la mise en page de mes photos</li>
            </ul>
            <br />
            <em>Ce site sur lequel vous naviguez est encore en développement</em>


</section>  )
}
