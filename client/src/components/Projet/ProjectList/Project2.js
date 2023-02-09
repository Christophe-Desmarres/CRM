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
            <p>Technologies : <span className='tag html'>HTML</span> <span className='tag sass'>Sass</span> <span className='tag wp'>WordPress</span> <span className='tag php'>PHP</span> <span className='tag vuejs'>Vue.js</span> <span className='tag axios'>axios</span> <span className='tag mysql'>SQL</span></p>
            <p>Méthodologies : <span className='tag'>JWT</span> <span className='tag'>POO</span></p>
            <p>
            But : fournir une plateforme de communication des évenements et des ventes pour l'Amicale des Parents d'Eleves de Crosmières
            </p>
            <br />
            Réalisation par une équipe de 5 personnes
            Mon rôle : Product Owner
            <ul>
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
                                
            <ul>
            <br />
                coté cient
                <li>- se créer un compte</li>
                <li>- modifier son profil</li>
                <li>- visualiser les événements et ventes</li>
                <li>- s'inscrire ou commander sur l'évenement</li>
            </ul>
            <ul>
            <br />
                coté administrateur
                <li>- CRUD évenements et ventes</li>
                <li>- gestion des utilisateurs et des rôles</li>
            </ul>
            <div className='imgDiapo'>
                <p>Accueil version desktop</p>
                <img src={apeHomeImg} alt="écran d'accueil version bureau du projet apecrosmieres" />
                <p>Accueil version mobile</p>
                <img src={apeHomeMobileImg} alt="écran d'accueil version mobile du projet apecrosmieres" />
                <p>Détail d'un évenement</p>
                <img src={apeEventImg} alt="évenement du projet apecrosmieres" />
                <p>Espace administration : création d'un évenement</p>
                <img src={apeEventAddImg} alt="écran de création d'un évenement du projet apecrosmieres" />
                <p>Espace administration : liste des utilisateurs</p>
                <img src={apeUserImg} alt="liste des utilisateurs de l'ecran d'administration du projet apecrosmieres" />
            </div>
            {/* </details> */}

    </section>  )
}
