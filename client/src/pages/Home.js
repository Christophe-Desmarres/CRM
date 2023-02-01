import image from "../assets/images/(Réduit) Cie Ankaa-90.jpg";
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
      
    <h1>Home</h1>
    <p>They are nothing to see here !!!</p>
    <img src={image} alt="Ankaa" />
      </div>
    );
  };
  
  export default Home;