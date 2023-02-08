// import backgroundImg from "../assets/images/pages/home/(Réduit) Cie Ankaa-90.jpg";
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
import  reactLogo  from '../assets/icons/home/competences/react-logo.png';


const Home = () => {
    return (
      <div id="home">
        <h1>Bienvenue </h1>
    {/* <img src={backgroundImg} alt="Ankaa" className='background_img' /> */}
      
    <section id="promise">
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
          <img src={promiseImg} alt="promiseImg" className='home__img' />
        </div>
    </section>

    <section id="presentation">
        <h2>Qui suis je ?</h2>
    <div className="left">
        <p>Christophe Desmarres</p>
        <p>Je suis développeur web et web mobile.</p>
        <p>Je suis à votre écoute pour vous aider à réaliser votre projet.</p>
        </div>
        <div className="right">
          <img src={portraitImg} alt="Ankaa" className='portrait' />
        </div>
    </section>

    <section id="competences">
        <h2>Mais, tu travailles avec quoi ?</h2>
    <div className="left">
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
        <h2>Et tu fais quoi avec ça ?</h2>
    <div className="left">
    <p>des sites ou applications qui vous ressemble</p>
        </div>
        <div className="right">
          <img src={mockupSite} alt="mockupSite" className="home__img" />
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