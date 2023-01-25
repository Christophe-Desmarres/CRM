import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import styledAdmin from 'styled-components'

const Nav = styledAdmin.nav`
  margin: 0.5rem;
  border: none;
  color: palevioletred;
  background-color: transparent;

  .link {
    margin: 0.5rem;
    padding: 0.5rem;
    text-decoration: none;
    color: palevioletred;
  }

  .link:hover {
    background-color: palevioletred;
    color: white;
    border-radius: 5px;
    box-shadow: 2px 2px 10px black;
  }
  `;


export default function Admin() {
  return (
    <div>
    <h1>Espace Admin</h1>
    <Nav>
      <Link className='link' to="/admin/utilisateur">Users</Link>
      <Link className='link' to="/admin/produits">Products</Link>
    </Nav>
    <Outlet />    
    
    
    </div>
  )
}
