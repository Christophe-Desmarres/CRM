import React from 'react'
import { Link } from 'react-router-dom'
import Project1 from './ProjectList/Project1'
import Project2 from './ProjectList/Project2'
import Project3 from './ProjectList/Project3'
import Project4 from './ProjectList/Project4'

export default function Projet() {
  return (
    <div id='project'>
    <ul>
        <Link to="projet/1" className='nav'>Photo-Viewer</Link>
        <Link to="projet/2" className='nav'>APE Crosmières</Link>
        <Link to="projet/3" className='nav'>CV en ligne</Link>
        <Link to="projet/4" className='nav'>skyInvaders</Link>
        
        {/* <a href="#project1" className='nav'>Photo-Viewer</a>
        <a href="#project2" className='nav'>APE Crosmières</a>
        <a href="#project3" className='nav'>CV en ligne</a>
        <a href="#project4" className='nav'>skyInvaders</a> */}
    </ul>
        <p>Clique sur un projet pour voir le détail</p>
        <hr />
        <br />

        <div className='project__list'>

            <Project1 />
            <Project2 />
            <Project3 />
            <Project4 />
        </div>
    </div>
  )
}
