import React from 'react'
import  homeImg from '../../../assets/images/pages/projet/photo-viewer__home.jpg' 
import  panierImg from '../../../assets/images/pages/projet/photo-viewer__panier.jpg' 
import  adminImg from '../../../assets/images/pages/projet/photo-viewer__admin.jpg' 
import { GoMarkGithub } from "react-icons/go";


export default function Project1() {
  return (
        <section id="project1" className='project__description'>
                {/* <details> */}
                {/* <summary> */}
                    <h2>Photo-Viewer</h2>
                    {/* </summary> */}
                    <a href='https://github.com/Christophe-Desmarres/photo-viewer' target="_blank" rel="noreferrer" title='lien vers le repo Github'><GoMarkGithub size="1.5em" /> Repo Github Photo-Viewer</a>

                    <p className='project__techno'>Technologies : </p> 
                    <ul className='project__techno--list'>
                        <li className='tag php'>PHP</li> 
                        <li className='tag js'>Javascript</li> 
                        <li className='tag mysql'>SQL</li>
                    </ul>

                    <p className='project__method'>Méthodologies : </p>
                    <ul className='project__method--list'>
                        <li className='tag'>MVC</li>
                        <li className='tag'>POO</li>
                    </ul>
                    <p>
                    But : visualiser et vendre des photos prises lors d'un evenement
                    </p>
                    <ul  className='project__list--action'>
                    <br />
                        coté cient
                        <li>- visionner les photos</li>
                        <li>- commander les photos</li>
                        <li>- choisir le format et la quantité</li>
                        <li>- voir le panier</li>
                        <li>- voir le prix total</li>
                        <li>- commander</li>
                    </ul>
                    <ul>
                    <br />
                        coté administrateur
                        <li>- uploder les images</li>
                        <li>- récuperer les commandes passées</li>
                        <li>- récupérer les photos dans 1 dossier pour les imprimer</li>
                    </ul>
                    <div className='imgDiapo'>
                        <p>Accueil</p>
                        <img src={homeImg} alt="écran d'accueil du projet photoviewer" />
                        <p>Panier</p>
                        <img src={panierImg} alt="panier du projet photoviewer" />
                        <p>Espace administration</p>
                        <img src={adminImg} alt="écran d'administration du projet photoviewer" />
                    </div>
                    {/* </details> */}

        </section>  )
}
