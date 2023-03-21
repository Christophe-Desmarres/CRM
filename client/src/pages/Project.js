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

  // list and data of projects
  const portfolioData = [
    { numero:1, title: 'Photo-Viewer', image: imgP1, techno:["All", "SQL", "HTML", "CSS", "Javascript", "php"] },
    { numero:2, title: 'APE Crosmières', image: imgP2, techno:["All", "HTML", "Sass", "WordPress", "PHP", "Vue.js", "axios", "SQL", "Photoshop"] },
    { numero:3, title: 'CV', image: imgP3, techno:["All", "HTML", "CSS", "Javascript"] },
    { numero:4, title: 'skyInvaders', image: imgP4, techno:["All", "HTML", "CSS", "Javascript"] },
    { numero:5, title: 'Portfolio', image: imgP5, techno:["All", "HTML", "Sass", "React", "Node.js", "MongoDB", "Photoshop"] },
  ];

  // list and data of technologies
  const technologyData = [
    { name: 'All', color: '#f1f1f1' },
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

  const [selected, setSelected] = useState("All");

  // filter project according selection
  const newTab = portfolioData.filter((project) => project.techno.includes(selected));

    return (
    <div id="project">
        <div className="project__list">

        <div id="myBtnContainer">
          {technologyData.map((technology, index) => (
            <button key={index} className="btn" onClick={()=>setSelected(technology.name)} style={{border: `2px solid ${technology.color}`}}>{technology.name}</button>
          ))}

        </div>

        <div className="slider">
        <div className="project__list__container slides">

      {newTab.map((project, index) => (
          <div key={index} className="project__list__item slide"  id={`project_${project.numero}`}>
          {/* style={{backgroundImage: `url(${project.image}`}} */}
            <Link to={`${project.numero}`} className='card__link'>
              <div className={`project__list__item--card`}>
                <div style={{backgroundImage: "url("+project.image+")"}} className={`project__list__item--card--cover`} >
                </div>
                <div className={`project__list__item--card--content`}>
                    <h2>{project.title}</h2>
                </div>
              </div>
            </Link>
          </div>

      ))}
    </div>
      <div className="slider__nav">
      {newTab.map((project, index) => (
      <a key={index} className="slider__navlink" href={`#project_${index+1}`}> </a>
    ))}
    </div>

      </div>

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