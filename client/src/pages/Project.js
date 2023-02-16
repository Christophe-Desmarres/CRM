import { Routes, Route, Link } from 'react-router-dom'
import { useState } from 'react'

import imgP1 from '../assets/images/pages/projet/photo-viewer__home.jpg'
import imgP2 from '../assets/images/pages/projet/apecrosmieres__home.jpg'
import imgP3 from '../assets/images/pages/projet/cv__desktop.jpg'
import imgP4 from '../assets/images/pages/projet/skyinvader.jpg'
import imgP5 from '../assets/images/background.gif'

import Project1 from '../components/Projet/ProjectList/Project1'
import Project2 from '../components/Projet/ProjectList/Project2'
import Project3 from '../components/Projet/ProjectList/Project3'
import Project4 from '../components/Projet/ProjectList/Project4'
import Project5 from '../components/Projet/ProjectList/Project5'

const Project = () => {
  document.title='Projets';

  const portfolioData = [
    { title: 'Photo-Viewer', image: imgP1, techno:["all","node", "react", "html", "vue.js", "php"] },
    { title: 'APE Crosmières', image: imgP2, techno:["all","front"] },
    { title: 'CV', image: imgP3, techno:["all","back"] },
    { title: 'skyInvaders', image: imgP4, techno:["all","front"] },
    { title: 'Portfolio', image: imgP5, techno:["all","back"] },
  ];

  const [selected, setSelected] = useState("all");

  portfolioData.filter((project) => console.log(project.techno.includes(selected)? project.title : null));
  const newTab = portfolioData.filter((project) => project.techno.includes(selected));

  // portfolioData.map((project, index) => (
  //   console.log(project.techno)
  // ))


    return (
    <div id="project">
        <div className="project__list">

        <div id="myBtnContainer">
          <button className="btn active" onClick={()=>setSelected("all")}>all</button>
          <button className="btn" onClick={()=>setSelected("front")}>front</button>
          <button className="btn" onClick={()=>setSelected("back")}>back</button>
        </div>


        <div className="row">

      {newTab.map((project, index) => (

          <div key={index} className="column">
        {/* style={{backgroundImage: `url(${project.image}`}} */}
            <div className={`card ${project.title}`}>
              <img src={project.image} alt={project.title}  style={{width:"100%", borderRadius:"5%"}} />
              <div className="container">
                <h2>{project.title}</h2>
                <p>{"list techno"}</p>
                <p><button className="button">Voir</button></p>
              </div>
            </div>
          </div>

      ))}
      </div>

    {/* <h1>Mes Projets</h1>
    <ul className='project__list'>
      <Link to="projet/1" className='card'><img src={imgP1} /> Photo-Viewer</Link>
      <Link to="projet/2" className='card'>APE Crosmières</Link>
      <Link to="projet/3" className='card'>CV en ligne</Link>
      <Link to="projet/4" className='card'>SkyInvaders</Link>
      <Link to="projet/5" className='card'>Portfolio</Link>
    </ul> */}
        <Routes>
        <Route path="projet/1" element={<Project1 />} />
        <Route path="projet/2" element={<Project2 />} />
        <Route path="projet/3" element={<Project3 />} />
        <Route path="projet/4" element={<Project4 />} />
        <Route path="projet/5" element={<Project5 />} />
      </Routes>

     </div> 
    </div>
    );
  };
  
  export default Project;