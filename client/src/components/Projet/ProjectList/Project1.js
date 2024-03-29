import React from 'react'
import  homeImg from '../../../assets/images/pages/projet/photo-viewer__home.jpg' 
import  panierImg from '../../../assets/images/pages/projet/photo-viewer__panier.jpg' 
import  adminImg from '../../../assets/images/pages/projet/photo-viewer__admin.jpg' 
import { GoMarkGithub, GoLinkExternal } from "react-icons/go";


export default function Project1() {
  return (
        <section id="project1" className='project__description'>
                {/* <details> */}
                {/* <summary> */}
                    <h2>Photo-Viewer</h2>
                    {/* </summary> */}
                    <a href='https://mercantilism-feed.000webhostapp.com/' target="_blank" rel="noreferrer" title='lien vers le site'><GoLinkExternal /> lien vers le site</a>
                    <a href='https://github.com/Christophe-Desmarres/photo-viewer' target="_blank" rel="noreferrer" title='lien vers le repo Github'><GoMarkGithub /> Repo Github Photo-Viewer</a>

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
                    But : visualiser et vendre des photos prises lors d'un évènement
                    </p>
                    <p>
                    Ce projet a été réalisé pour être utilisé en local sur plusieurs PC différents
                    </p>
                    
                    <ul className='project__list--action'>
                    <br />
                        coté cient
                        <li>- visionner les photos</li>
                        <li>- commander les photos</li>
                        <li>- choisir le format et la quantité</li>
                        <li>- voir le panier</li>
                        <li>- voir le prix total</li>
                        <li>- commander</li>
                    </ul>
                    <ul className='project__list--action'>
                    <br />
                        coté administrateur
                        <li>- uploder les images</li>
                        <li>- récuperer les commandes passées</li>
                        <li>- récupérer les photos dans 1 dossier pour les imprimer</li>
                    </ul>
                    <div className='imgDiapo'>
                        <p className='imgDiapo__p'>Accueil</p>
                        <img className='imgDiapo__img' src={homeImg} alt="écran d'accueil du projet photoviewer" />
                        <p className='imgDiapo__p'>Panier</p>
                        <img className='imgDiapo__img' src={panierImg} alt="panier du projet photoviewer" />
                        <p className='imgDiapo__p'>Espace administration</p>
                        <img className='imgDiapo__img' src={adminImg} alt="écran d'administration du projet photoviewer" />
                    </div>
                    {/* </details> */}

        </section>  )
}
