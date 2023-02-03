import React from 'react'
import  homeImg from '../../assets/images/projet/photo-viewer__home.jpg' 
import  panierImg from '../../assets/images/projet/photo-viewer__panier.jpg' 
import  adminImg from '../../assets/images/projet/photo-viewer__admin.jpg' 
import  apeHomeImg from '../../assets/images/projet/apecrosmieres__home.jpg' 
import  apeHomeMobileImg from '../../assets/images/projet/apecrosmieres__home--mobile.jpg' 
import  apeEventImg from '../../assets/images/projet/apecrosmieres__event.jpg' 
import  apeEventAddImg from '../../assets/images/projet/apecrosmieres__event--add.jpg' 
import  apeUserImg from '../../assets/images/projet/apecrosmieres__user.jpg' 
import  cvMobileImg from '../../assets/images/projet/cv__mobile.jpg' 
import  cvDesktopImg from '../../assets/images/projet/cv__desktop.jpg' 
import  skyinvadersImg from '../../assets/images/projet/skyinvader.jpg' 

export default function Projet() {
  return (
    <div id='project'>
    <ul>
        <a href="#project1" className='nav'>Photo-Viewer</a>
        <a href="#project2" className='nav'>APE Crosmières</a>
        <a href="#project3" className='nav'>CV en ligne</a>
        <a href="#project4" className='nav'>skyInvaders</a>
    </ul>
        <p>Clique sur un projet pour voir le détail</p>
        <section id="project1" className='project__description'>
            <div className="container">
                <div className="section-title">
                <details>
                <summary>
                    <h2>Photo-Viewer</h2>
                    </summary>
                    <a href='https://github.com/Christophe-Desmarres/photo-viewer' target="_blank" rel="noreferrer" title='lien vers le repo Github'>Lien vers le repo Github Photo-Viewer</a>
                    <p>Projet réalisé en <span className='tag'>PHP</span> avec <span className='tag'>MVC</span> et <span className='tag'>POO</span> mais aussi avec <span className='tag'>Javascript</span></p>
                    <p>
                    But : visualiser et vendre des photos prises lors d'un evenement
                    <ul>
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
                    </p>
                    <div className='imgDiapo'>
                        <p>Accueil</p>
                        <img src={homeImg} alt="écran d'accueil du projet photo-viewer" />
                        <p>Panier</p>
                        <img src={panierImg} alt="panier du projet photo-viewer" />
                        <p>Espace administration</p>
                        <img src={adminImg} alt="écran d'administration du projet photo-viewer" />
                    </div>
                    </details>

                </div>
            </div>
        </section>
        <section id="project2" className='project__description'>
            <div className="container">
                <div className="section-title">
                <details>
                <summary>
                    <h2>APE Crosmières</h2>
                    </summary>

                    <a href='https://apecrosmieres.fr/' target="_blank" rel="noreferrer" title='lien vers le site'>Lien vers le site APE Crosmières</a>
                    <p>Projet réalisé avec <span className='tag'>WordPress</span> customisé pour la partie backend et avec <span className='tag'>Vue.js</span> et <span className='tag'>axios</span> pour le frontend</p>
                    <p>
                    But : fournir une plateforme de communication des évenements et des ventes pour l'Amicale des Parents d'Eleves de Crosmières
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
                    </p>
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
                    </details>

                </div>
            </div>
        </section>
        <section id="project3" className='project__description'>
            <div className="container">
                <div className="section-title">
                <details>
                <summary>
                    <h2>CV en ligne</h2>
                    </summary>
                    <a href='https://christophe-desmarres.github.io/' target="_blank" rel="noreferrer" title='lien vers le site'>Lien CV en ligne</a>
                    <p>Projet réalisé avec <span className='tag'>HTML</span>, <span className='tag'>CSS</span> et <span className='tag'>Javascript</span></p>
                    <p>
                    But : Définir un CV en ligne pour présenter mes compétences et mes projets
                    <br />
                    </p>
                    <div className='imgDiapo'>
                        <p>Accueil version desktop</p>
                        <img src={cvMobileImg} alt="écran d'accueil version bureau du projet cv en ligne" />
                        <p>Accueil version mobile</p>
                        <img src={cvDesktopImg} alt="écran d'accueil version mobile du projet cv en ligne" />
                    </div>
                    </details>

                </div>
            </div>
        </section>
        <section id="project4" className='project__description'>
            <div className="container">
                <div className="section-title">
                <details>
                <summary>
                    <h2>skyInvaders</h2>
                    </summary>
                    <a href='https://christophe-desmarres.github.io/skyInvaders/' target="_blank" rel="noreferrer" title='lien vers le site'>Lien skyInvaders</a>
                    <p>Projet réalisé avec <span className='tag'>HTML</span>, <span className='tag'>CSS</span> et <span className='tag'>Javascript</span></p>
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
                    </details>

                </div>
            </div>
        </section>
    </div>
  )
}
