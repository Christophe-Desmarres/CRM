import React from 'react'
import { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { BsPlusCircle } from 'react-icons/bs';
import { BiShow } from 'react-icons/bi';
import { AiOutlineEdit } from 'react-icons/ai';
import { FaRegTrashAlt } from 'react-icons/fa';


export default function Users() {

  const [data, setData] = useState(null);
  const [search, setSearch] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [userId, setUserId] = useState('');




  useEffect(() => {
    fetch("https://crm-back.vercel.app/customers", [{mode:'no-cors'}])
      .then((res) => res.json())
      .then((data) => {
        setData(data); 
      });
  }, []);


  const handleSubmit = (event) => {
    event.preventDefault();
    // Appeler une fonction pour supprimer l'utilisateur avec l'id "userId"
    const options = {method: 'DELETE', headers: {'Content-Type': 'application/json'}, body: 'false'};

  fetch(`https://crm-back.vercel.app/customers/${userId}`, {
      method: "DELETE", 
      headers: {
        "Content-Type": "application/json",
      }, 
  })
    .then(response => response.json())
    .then(response => {
      console.log(response)
      // if (!response.ok) {
      //   throw new Error('Erreur lors de la suppression de l\'utilisateur');
      // }
       console.log(`Utilisateur ${response.lastname} supprimé avec succès`);
      // Insérez ici le code pour actualiser la liste des utilisateurs
    })
    .catch(err => console.error(err));

    console.log(`Suppression de l'utilisateur avec l'ID : ${userId}`);
    setUserId('');
    console.log(`new delete id : ${userId}`);
    setShowModal(false);  
  };




  const handleModalOpen = (id) => {
    setUserId(id);
    console.log(`modal open id :  ${userId}`);
    setShowModal(true);
  };

  const handleModalClose = () => {
    setUserId('');
    console.log(`modal close id :  ${userId}`);
    setShowModal(false);
  };

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
          <td data-label='Détails'>
            <button className='user__btn'><Link to={`/admin/utilisateur/details/${user._id}`}><BiShow /></Link></button>
            <button className='user__btn'><Link to={`/admin/utilisateur/details/${user._id}`}><AiOutlineEdit /></Link></button>
            <button className='user__btn' onClick={()=>handleModalOpen(user._id)}><FaRegTrashAlt /></button>
            </td>
        </tr>
      
      ))
    }
      </tbody>
    </table>
    {showModal && (
        <div className="modal">
          <div className="modal-content">
            <p>Êtes-vous sûr de vouloir supprimer cet utilisateur ?</p>
            <button onClick={handleModalClose}>Annuler</button>
            <button onClick={handleSubmit}>Confirmer</button>
          </div>
        </div>
      )}

    <Outlet />

    </div>
  )
}
