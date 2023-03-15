import React from 'react'
import { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';


export default function Users() {

  const [data, setData] = useState(null);
  const [searchData, setSearchData] = useState(data);
  const [search, setSearch] = useState("");


  useEffect(() => {
    fetch("https://crm-back.vercel.app/customers", [{mode:'no-cors'}])
      .then((res) => res.json())
      .then((data) => {
        setData(data); 
      });
  }, []);


  
  // useEffect(() => {
  //   setSearchData(() => {
  //     return data.filter((user) => {
  //       return user.firstname.toLowerCase().includes(search.toLowerCase());
  //     });
  //   });
  // }, [search]); // <- add the count variable here


  return (
    <div className='users'>
    <h1>Liste des utilisateurs</h1>
    <Outlet />
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
          <th>N°</th>
          <th>Nom</th>
          <th>Prénom</th>
          <th>email</th>
          <th>Téléphone</th>
          <th>Adresse</th>
          <th>cp</th>
          <th>ville</th>
          <th>maps</th>
          <th>Details</th>

        </tr>
      </thead>
      <tbody>
    {
      data && data.map((user, index) => (
        <tr key={user._id}>
          <td data-label='Numéro'>{index + 1}</td>
          <td data-label='Nom'>{user.lastname}</td>
          <td data-label='Prénom'>{user.firstname}</td>
          <td data-label='Email'><button className='user__btn'><a href={"mailto:" + user.email}>Envoyer</a></button></td>
          <td data-label='Téléphone'><button className='user__btn'><a href={`tel:${user.phone}`}>Appeler</a></button></td>
          <td data-label='Adresse'>{user.address}</td>
          <td data-label='Code Postal'>{user.cp}</td>
          <td data-label='Ville'>{user.city}</td>
          <td data-label='Itinéraire'><button className='user__btn'><a href={`https://www.google.fr/maps/place/${user.address},+${user.cp}+${user.city}`} target="_blank" rel="noreferrer">Aller</a></button></td>
          <td data-label='Détails'><button className='user__btn'><Link to={`/admin/utilisateur/details/${user._id}`}>Voir</Link></button></td>
        </tr>
      ))
    }
      </tbody>
    </table>


    </div>
  )
}
