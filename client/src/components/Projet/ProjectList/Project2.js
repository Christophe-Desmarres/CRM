import React from 'react'
import  apeHomeImg from '../../../assets/images/pages/projet/apecrosmieres__home.jpg' 
import  apeHomeMobileImg from '../../../assets/images/pages/projet/apecrosmieres__home--mobile.jpg' 
import  apeEventImg from '../../../assets/images/pages/projet/apecrosmieres__event.jpg' 
import  apeEventAddImg from '../../../assets/images/pages/projet/apecrosmieres__event--add.jpg' 
import  apeUserImg from '../../../assets/images/pages/projet/apecrosmieres__user.jpg' 
import { GoLinkExternal, GoMarkGithub } from "react-icons/go";


export default function Project2() {
  return (
    <section id="project2" className='project__description'>
            {/* <details> */}
        {/* <summary> */}
            <h2>APE Crosmières</h2>
            {/* </summary> */}

            <a href='https://apecrosmieres.fr/' target="_blank" rel="noreferrer" title='lien vers le site'><GoLinkExternal />Lien vers le site APE Crosmières</a>
            <a href='https://github.com/Christophe-Desmarres/APE-Crosmieres' target="_blank" rel="noreferrer" title='lien vers github front'><GoMarkGithub />Lien vers le repo frontend</a>
            <a href='https://github.com/Christophe-Desmarres/APE-Crosmieres-back' target="_blank" rel="noreferrer" title='lien vers github back'><GoMarkGithub />Lien vers le repo backend</a>
            <p className='project__techno'>Technologies : </p> 
            <ul className='project__techno--list'>
                <li className='tag html'>HTML</li> 
                <li className='tag sass'>Sass</li> 
                <li className='tag wp'>WordPress</li> 
                <li className='tag php'>PHP</li> 
                <li className='tag vuejs'>Vue.js</li> 
                <li className='tag axios'>axios</li> 
                <li className='tag mysql'>SQL</li>
                <span className='tag photoshop'>Photoshop</span>
            </ul>

            <p className='project__method'>Méthodologies : </p>
            <ul className='project__method--list'>
                <li className='tag'>JWT</li> 
                <li className='tag'>POO</li>
            </ul>

            <p>
            But : fournir une plateforme de communication des évenements et des ventes pour l'Amicale des Parents d'Eleves de Crosmières
            </p>
            <br />
            Réalisation par une équipe de 5 personnes
            Mon rôle : Product Owner
            <ul className='project__list--action'>
            <br />
            Participation :
                <li>- rédaction des user stories</li>
                <li>- rédaction des routes</li>
                <li>- rédaction MLD, MCD</li>
                <li>- rédaction des wireframes</li>
                <li>- rédaction du cahier des charges</li>
                <li>- configuration de la partie custom de Wordpress (plugin, endpoint, rôles)</li>
                <li>- développement vue et composants Vue.js</li>
            </ul>
                                
            <ul className='project__list--action'>
            <br />
                coté cient
                <li>- se créer un compte</li>
                <li>- modifier son profil</li>
                <li>- visualiser les événements et ventes</li>
                <li>- s'inscrire ou commander sur l'évenement</li>
            </ul>
            <ul className='project__list--action'>
            <br />
                coté administrateur
                <li>- CRUD évenements et ventes</li>
                <li>- gestion des utilisateurs et des rôles</li>
            </ul>
            <div className='imgDiapo'>
                <p className='imgDiapo__p'>Accueil version desktop</p>
                <img className='imgDiapo__img' src={apeHomeImg} alt="écran d'accueil version bureau du projet apecrosmieres" />
                <p className='imgDiapo__p'>Accueil version mobile</p>
                <img className='imgDiapo__img' src={apeHomeMobileImg} alt="écran d'accueil version mobile du projet apecrosmieres" />
                <p className='imgDiapo__p'>Détail d'un évenement</p>
                <img className='imgDiapo__img' src={apeEventImg} alt="évenement du projet apecrosmieres" />
                <p className='imgDiapo__p'>Espace administration : création d'un évenement</p>
                <img className='imgDiapo__img' src={apeEventAddImg} alt="écran de création d'un évenement du projet apecrosmieres" />
                <p className='imgDiapo__p'>Espace administration : liste des utilisateurs</p>
                <img className='imgDiapo__img' src={apeUserImg} alt="liste des utilisateurs de l'ecran d'administration du projet apecrosmieres" />
            </div>
            {/* </details> */}

    </section>  )
}
