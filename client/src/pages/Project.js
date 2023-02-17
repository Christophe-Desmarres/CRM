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
    { numero:1, title: 'Photo-Viewer', image: imgP1, techno:["all", "SQL", "HTML", "CSS", "Javascript", "php"] },
    { numero:2, title: 'APE Crosmières', image: imgP2, techno:["all", "HTML", "Sass", "WordPress", "PHP", "Vue.js", "axios", "SQL", "Photoshop"] },
    { numero:3, title: 'CV', image: imgP3, techno:["all", "HTML", "CSS", "Javascript"] },
    { numero:4, title: 'skyInvaders', image: imgP4, techno:["all", "HTML", "CSS", "Javascript"] },
    { numero:5, title: 'Portfolio', image: imgP5, techno:["all", "HTML", "Sass", "React", "Node.js", "MongoDB", "Photoshop"] },
  ];

  const technologyData = [
    { name: 'all', color: '#f1f1f1' },
    { name: 'front', color: '#2196F3' },
    { name: 'back', color: '#f44336' },
    { name: 'HTML', color: 'rgb(255, 0, 0)' },
    { name: 'CSS', color: 'rgb(0, 0, 255)' },
    { name: 'Sass', color: 'rgb(204, 102, 152)' },
    { name: 'Javascript', color: 'rgb(240, 219, 79)' },
    { name: 'Vue.js', color: 'rgb(66, 184, 131)' },
    { name: 'React', color: 'rgb(97, 219, 251)' },
    { name: 'Node.js', color: 'rgb(68, 136, 62)' },
    { name: 'axios', color: '#555da7' },
    { name: 'PHP', color: 'rgb(137, 147, 190)' },
    { name: 'WordPress', color: 'rgb(68, 65, 64)' },
    { name: 'SQL', color: '#ff9800' },
    { name: 'MongoDB', color: 'rgb(0, 104, 74)' },
    { name: 'Photoshop', color: 'rgb(48, 198, 238)' },
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
          {technologyData.map((technology, index) => (
            <button key={index} className="btn" onClick={()=>setSelected(technology.name)} style={{border: `2px solid ${technology.color}`}}>{technology.name}</button>
          ))}
          {/* <button className="btn active" onClick={()=>setSelected("all")}>all</button>
          <button className="btn" onClick={()=>setSelected("front")}>front</button>
          <button className="btn" onClick={()=>setSelected("back")}>back</button> */}
        </div>

        <div className="row">

      {newTab.map((project, index) => (

          <div key={index} className="column">
        {/* style={{backgroundImage: `url(${project.image}`}} */}
            <div className={`card ${project.title}`}>
              <img src={project.image} alt={project.title}  style={{borderRadius:"5%"}} />
              <div className="container">
                <h2>{project.title}</h2>
                  <Link to={`${project.numero}#project${project.numero}`} >
                   <button className="button"> Voir</button>
                  </Link>
                
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
        <Route path="1" element={<Project1 />} />
        <Route path="2" element={<Project2 />} />
        <Route path="3" element={<Project3 />} />
        <Route path="4" element={<Project4 />} />
        <Route path="5" element={<Project5 />} />
      </Routes>

     </div> 
    </div>
    );
  };
  
  export default Project;