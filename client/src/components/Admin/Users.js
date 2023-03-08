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
    <div>
    <h1>Users</h1>

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
          <th>commentaires</th>

        </tr>
      </thead>
      <tbody>
    {
      data && data.map((user, index) => (
        <tr key={user._id}>
          <td>{index + 1}</td>
          <td>{user.lastname}</td>
          <td>{user.firstname}</td>
          <td><a href={"mailto:" + user.email}>lien</a></td>
          <td>{user.phone}</td>
          <td>{user.address}</td>
          <td>{user.cp}</td>
          <td>{user.city}</td>
          <td>{user.commentaires}</td>
        </tr>
      ))
    }
      </tbody>
    </table>


    </div>
  )
}
