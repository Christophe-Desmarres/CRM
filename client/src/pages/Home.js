import image from "../assets/images/(Réduit) Cie Ankaa-90.jpg";
import image2 from "../assets/images/portrait.jpg";
import ClientForm from '../components/Client/ClientForm';

// import styledHome from "styled-components";

// const Img = styledHome.img`
//   width: 100%;
//   height: 100%;
//   object-fit: cover;
//   object-position: center;
//   position: absolute;
//   top: 0;
//   left: 0;
//   z-index: -1;
//   opacity: 0.5;
// `;

// const H1 = styledHome.h1`
//   font-size: 3rem;
//   font-weight: 700;
//   text-align: center;
//   margin: 0;
//   padding: 0;
//   color: var(--home-text-color);
// `;


const Home = () => {
    return (
      <div id="home">
    <img src={image} alt="Ankaa" className='background_img' />
      
    {/* <p>They are nothing to see here !!!</p> */}
    <section id="presentation">
        <h2>Hello world</h2>
    <div className="left">
        <p>My name is Christophe Desmarres</p>
        <p>I am a web developer</p>
        </div>
        <div className="right">
        {/* <div  className="rightImg"  > */}
          <img src={image2} alt="Ankaa" className='portrait' />
        {/* </div> */}
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