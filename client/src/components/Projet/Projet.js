import React from 'react'
import  homeImg from '../../assets/images/projet/photo-viewer__home.jpg' 
import  panierImg from '../../assets/images/projet/photo-viewer__panier.jpg' 
import  adminImg from '../../assets/images/projet/photo-viewer__admin.jpg' 

export default function Projet() {
  return (
    <div id='project'>
        <section id="project">
            <div className="container">
                <div className="section-title">
                    <h2>Photo-Viewer</h2>
                    <p>
                    Projet pour vendre des photos lors d'un evenement
                    <ul>
                        coté cient
                        <li>- visionner les photos</li>
                        <li>- commander les photos</li>
                        <li>- choisir le format et la quantité</li>
                        <li>- commander</li>
                    </ul>
                    <ul>
                        coté administrateur
                        <li>- uploder les images</li>
                        <li>- récuperer les commandes passées</li>
                        <li>- récupérer les photos dans 1 dossier pour les imprimer</li>
                    </ul>
                    </p>
                    <div className='imgDiapo'>
                        <p>Accueil</p>
                        <img src={homeImg} alt="image de l'ecran d'accueil du projet photo-viewer" />
                        <p>Panier</p>
                        <img src={panierImg} alt="image du panier du projet photo-viewer" />
                        <p>Espac administration</p>
                        <img src={adminImg} alt="image de l'ecran d'administration du projet photo-viewer" />
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}
