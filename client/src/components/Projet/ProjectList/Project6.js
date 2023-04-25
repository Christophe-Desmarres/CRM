import React from 'react';
import { GoLinkExternal, GoMarkGithub } from "react-icons/go";
import { Link } from 'react-router-dom';
import  workflowHome from '../../../assets/images/pages/projet/workflow_project_home.png'; 
import  workflowCustom from '../../../assets/images/pages/projet/workflow_project_custom.png'; 


export default function Project6() {
  return (
    <section id="project6" className='project__description'>
        {/* <details> */}
        {/* <summary> */}
            <h2>Custom workflow</h2>
            {/* </summary> */}
            <a href='https://chrisdmar.w3spaces.com/' target="_blank" rel="noreferrer" title='lien vers le site'><GoLinkExternal />Lien custom workflow</a>
            <a href='https://github.com/Christophe-Desmarres/custom-page' target="_blank" rel="noreferrer" title='lien vers github'><GoMarkGithub />Lien github custom workflow</a>
            <p className='project__techno'>Technologies : </p> 
            <ul className='project__techno--list'>            
              <span className='tag html'>HTML</span> 
              <span className='tag sass'>CSS</span> 
              <span className='tag Vuejs'>Vue.js</span> 
            </ul>
            <p>
            But : Créer un projet utilitaire avec Vue.js
            </p>
            <br />
            <ul className='project__list--action'>
            Etapes :
            <br />
                <li>- Mettre en place des élément drag & drop</li>
                <li>- modifier l'ordre et ajouter des informations</li>
            </ul>
            <br />

            <em>Ce site est encore en développement</em>

            <div className='imgDiapo'>
                <p className='imgDiapo__p'>Accueil version desktop</p>
                <img className='imgDiapo__img' src={workflowHome} alt="écran d'accueil version bureau du projet custom worflow" />
                <p className='imgDiapo__p'>Page de configuration des workflows</p>
                <img className='imgDiapo__img' src={workflowCustom} alt="page de configuration des workflows version bureau du projet custom worflow" />
            </div>



</section>  )
}
