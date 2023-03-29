import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import styledAdmin from 'styled-components'


const Div = styledAdmin.div`
background-color: #f9f9f9;
  background-image: radial-gradient(at 25% 25%,#eee 0 12.5%,transparent 0);
  background-size: 1vmin 1vmin;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  min-height: 100vh;



  h1{
    text-align: center;
    padding: 1rem;
    color: #054A91;
  }

nav{
  display: flex;
  justify-content: center;
  margin: 1rem 0.5rem;
  border: none;
  color: palevioletred;
  
  .link {
    margin: 0.5rem;
    padding: 0.5rem 1rem;
    text-decoration: none;
    color: palevioletred;
    border-radius: 5px;
    box-shadow: 5px 5px 10px #f0f0f0, -5px -5px 10px #fff;
  }

  .link:hover {
    background-color: palevioletred;
    color: white;
    border-radius: 5px;
    box-shadow: 2px 2px 10px black;
  }
}

.outlet{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}


  `;


export default function Admin() {
  document.title='Administration';

  return (
    <Div>
    <h1>Espace Admin</h1>
    <nav>
      <Link className='link' to="/admin/utilisateur">Users</Link>
      <Link className='link' to="/admin/produits">Products</Link>
    </nav>
    <div className='outlet'> 
      <Outlet />
    </div>
    
    
    </Div>
  )
}
