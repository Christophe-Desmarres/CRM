// global imports
import React, { useState }  from "react";
import { Link } from "react-router-dom";

// import type effect
import TypeWriter from "../components/home/TypeWriter";

// import icons and images
import {FcExpand} from "react-icons/fc";
import {AiFillGithub} from 'react-icons/ai';
import {AiFillLinkedin} from 'react-icons/ai';

import portraitImg from "../assets/images/pages/home/portrait.jpg";
import promiseImg from "../assets/icons/home/clip-1743.png";
import ClientForm from '../components/Client/ClientForm';
import  agileLogo  from '../assets/icons/home/competences/agile-logo.png';
import  apiLogo  from '../assets/icons/home/competences/api-logo.png';
import  axiosLogo  from '../assets/icons/home/competences/axios-logo.png';
import  githubLogo  from '../assets/icons/home/competences/github-logo.png';
import  javascriptLogo  from '../assets/icons/home/competences/javascript-logo.png';
import  mariadbLogo  from '../assets/icons/home/competences/mariadb-logo.png';
import  phpLogo  from '../assets/icons/home/competences/php-logo.png';
import  vueLogo  from '../assets/icons/home/competences/vue-logo.png';
import  wordpressLogo  from '../assets/icons/home/competences/wordpress-logo.png';
import  htmlLogo  from '../assets/icons/home/competences/html-logo.png';
import  cssLogo  from '../assets/icons/home/competences/css-logo.png';
import  mockupSite  from '../assets/images/pages/home/mockup-site.png';
import  heroImg  from '../assets/images/background.jpg';
import  reactLogo  from '../assets/icons/home/competences/react-logo.png';
import  oclockLogo  from '../assets/icons/home/oclock-logo.png';

// import documents
import myCv from '../assets/documents/Christophe Desmarres CV.pdf';



const Home = () => {

  document.title='Accueil';


    return (
      <div id="home">

        <div className="top">
          <h1><span>Bienvenue</span></h1>
          <p>Je suis Christophe Desmarres</p>
          <p>développeur web et web mobile.</p>
        </div>

        <div className="hero">
          <img src={heroImg} alt="" role="presentation" className='background_img' />
        </div>
      
        {/* <section id="promise">
        <div className="left">
            <p>Vous souhaitez créer </p>
            <ul>
              <li>un site vitrine</li> 
              <li>un site e-commerce</li> 
              <li>un site de présentation</li> 
              <li>un site de gestion de contenu</li> 
              <li>une application métiers</li> 
              <li>ou tout ça en même temps</li> 
            </ul>
            </div>
            <div className="right">
              <img src={promiseImg} alt="illustration 2 personnes travaillent sur un écran" className='home__img' />
            </div>
        </section> */}

        <section id="presentation">
           <h2>À propos de moi</h2>
          <div className="left">
            <p>Passionné par l'informatique et le web, j'ai pris la décision d'entamer ma reconversion dans le développement web. Impatient de mettre en oeuvre mes connaissances, je recherche une entreprise ou je pourrais partager et développer mes compétences.</p>
          </div>
          <div className="right">
              <img src={portraitImg} alt="portrait de Christophe" className='portrait' />
          </div>
          <button className="download" data-message="télécharger mon cv"><FcExpand className="download__icons"/><a href={myCv} download="CV Christophe Desmarres">Télécharger mon CV</a></button>
          <div className="social">
            <a href="https://www.linkedin.com/in/christophe-desmarres/" target="_blank" rel="noreferrer"><AiFillLinkedin /></a>
            <a href="https://github.com/Christophe-Desmarres" target="_blank" rel="noreferrer"> <AiFillGithub /></a>
          </div>
        </section>

        <section id="parcours">
            <h2>Mon parcours en tant que développeur</h2>
        <div className="left">
            <p>Après avoir terminé une formation intensive en développement web, j'ai travaillé sur des projets personnels, associatifs et professionnels pour développer mes compétences et acquérir de l'expérience. Je suis maintenant en quête de ma première opportunité en tant que développeur web dans une entreprise qui partage mes valeurs.</p>
            </div>
            <div className="right">
            <TypeWriter options={{
                          strings: ['Développeur web'],
                          autoStart: true,
                          loop: true,
                          delay: 50,
                          deleteSpeed: 50,
                          cursor: '|',
                          cursorClassName: 'cursor',
                          cursorAnimation: 'blink',
                        }}/>
            </div>
        </section>

        <section id="competences">
            <h2>Mes compétences techniques</h2>
        <div className="left">
        <p>Je suis familier avec les méthodologies Agile et Scrum.</p>
        <p>Je travaille avec les technologies suivantes :</p>
            </div>
            <div className="right">
              <img src={htmlLogo} alt="htmlLogo" className="logo" />
              <img src={cssLogo} alt="cssLogo" className="logo" />
              <img src={javascriptLogo} alt="javascriptLogo" className="logo" />
              <img src={phpLogo} alt="phpLogo" className="logo" />
              <img src={vueLogo} alt="vueLogo" className="logo" />
              <img src={reactLogo} alt="reactLogo" className="logo" />
              <img src={wordpressLogo} alt="wordpressLogo" className="logo" />
              <img src={axiosLogo} alt="axiosLogo" className="logo" />
              <img src={apiLogo} alt="apiLogo" className="logo" />
              <img src={mariadbLogo} alt="mariadbLogo" className="logo" />
              <img src={githubLogo} alt="githubLogo" className="logo" />
              <img src={agileLogo} alt="agileLogo" className="logo" />
            </div>
        </section>

        <section id="project">
            <h2>Mes projets en tant que développeur</h2>
        <div className="left">
        <p>L'un de mes projets les plus récents a été de développer une application web pour une association de parents d'éleves de ma commune. J'ai travaillé en collaboration avec une équipe de 5 développeurs et avec le client final pour concevoir une interface utilisateur clair et lisible en accord avec la charte graphique de l'école. J'ai utilisé <strong>Vue.js</strong> en frontend et <strong>wordpress</strong> headless pour la partie backend.</p>
            </div>
            <div className="right">
              <img src={mockupSite} alt="mockupSite" className="home__img" />
            </div>
            <button className="project_button"><Link to={`projet`} className="project_link">&#62;&#62;  Voir mes projets &#60;&#60;</Link></button>

          </section>

        <section id="certifications">
            <h2>Mes certifications en développement</h2>
        <div className="left">
        <p>Titre Professionnel  “Développeur Web et Web Mobile” inscrit au RNCP 
        <br/>
        (certification de niveau 5 équivalent bac+2 obtenu avec l'école O'clock)</p>
            </div>
            <div className="right">
              <img src={oclockLogo} alt="oclockLogo" className="home__img" />
            </div>
        </section>

        <section id="contactForm">
        <h2>Me contacter</h2>
          <ClientForm />
        </section>

        </div>

    );
  };
  
  export default Home;