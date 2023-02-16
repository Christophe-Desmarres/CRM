import { Routes, Route, Link } from 'react-router-dom'

import imgP1 from '../assets/images/pages/projet/photo-viewer__home.jpg'

import Project1 from '../components/Projet/ProjectList/Project1'
import Project2 from '../components/Projet/ProjectList/Project2'
import Project3 from '../components/Projet/ProjectList/Project3'
import Project4 from '../components/Projet/ProjectList/Project4'
import Project5 from '../components/Projet/ProjectList/Project5'

const Project = () => {
  document.title='Projets';

    return (
    <div id="project">
    <h1>Mes Projets</h1>
    <ul className='project__list'>
      <Link to="projet/1" className='card'><img src={imgP1} /> Photo-Viewer</Link>
      <Link to="projet/2" className='card'>APE Crosmières</Link>
      <Link to="projet/3" className='card'>CV en ligne</Link>
      <Link to="projet/4" className='card'>SkyInvaders</Link>
      <Link to="projet/5" className='card'>Portfolio</Link>
    </ul>
        <Routes>
        <Route path="projet/1" element={<Project1 />} />
        <Route path="projet/2" element={<Project2 />} />
        <Route path="projet/3" element={<Project3 />} />
        <Route path="projet/4" element={<Project4 />} />
        <Route path="projet/5" element={<Project5 />} />
      </Routes>

    </div>
    );
  };
  
  export default Project;