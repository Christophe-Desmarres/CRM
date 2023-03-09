import React from 'react'
import { useEffect, useState } from 'react';

export default function Users() {

  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://crm-back.vercel.app/customers")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);




  return (
    <div id='users'>
    <h1>Liste des utilisateurs</h1>

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
          <td>{index + 1}</td>
          <td>{user.lastname}</td>
          <td>{user.firstname}</td>
          <td><button className='user__btn'><a href={"mailto:" + user.email}>Envoyer</a></button></td>
          <td><button className='user__btn'><a href={`tel:${user.phone}`}>Appeler</a></button></td>
          <td>{user.address}</td>
          <td>{user.cp}</td>
          <td>{user.city}</td>
          <td><button className='user__btn'><a href={`https://www.google.fr/maps/place/${user.address},+${user.cp}+${user.city}`} target="_blank" rel="noreferrer">Aller</a></button></td>
          <td><button className='user__btn'><a href={`/details/${user._id}`}>Voir</a></button></td>
        </tr>
      ))
    }
      </tbody>
    </table>


    </div>
  )
}
