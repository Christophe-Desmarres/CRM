import React from 'react'
import { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { BsPlusCircle } from 'react-icons/bs';


export default function Users() {

  const [data, setData] = useState(null);
  const [search, setSearch] = useState("");


  useEffect(() => {
    fetch("https://crm-back.vercel.app/customers", [{mode:'no-cors'}])
      .then((res) => res.json())
      .then((data) => {
        setData(data); 
      });
  }, []);


  return (
    <div className='users'>
    <h1>Liste des utilisateurs</h1>
    <button className='user__btn' style={{width:"50%", margin:"1rem auto"}}><Link to='/admin/utilisateur/ajouter'><BsPlusCircle /> Ajouter un utilisateur</Link></button>
    <input 
    type="text" 
    className='user__search'
    placeholder="Rechercher un utilisateur" 
    value={search}
    onChange={(e)=>{setSearch(e.target.value)}}
    />

    <table>
      <thead>
        <tr>
          <th>Nom</th>
          <th>Prénom</th>
          <th>Details</th>

        </tr>
      </thead>
      <tbody>
    {
      data && data.map((user) => (
        <tr key={user._id}>
          <td data-label='Nom'>{user.lastname}</td>
          <td data-label='Prénom'>{user.firstname}</td>
          <td data-label='Détails'><button className='user__btn'><Link to={`/admin/utilisateur/details/${user._id}`}>Voir</Link></button></td>
        </tr>
      
      ))
    }
      </tbody>
    </table>

    <Outlet />

    </div>
  )
}
