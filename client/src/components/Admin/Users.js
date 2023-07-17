import React from 'react'
import { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { BsPlusCircle } from 'react-icons/bs';
import { BiShow } from 'react-icons/bi';
import { AiOutlineEdit } from 'react-icons/ai';
import { FaRegTrashAlt } from 'react-icons/fa';


export default function Users() {

  const [data, setData] = useState(null);
  const [search, setSearch] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [userId, setUserId] = useState('');
  const [alertMessage, setAlertMessage] = useState(null);
  const [alertType, setAlertType] = useState('');


  useEffect(() => {
    fetch("https://crm-back.vercel.app/customers", [{mode:'no-cors'}])
      .then((res) => res.json())
      .then((data) => {
        setData(data); 
      });
  },[]);

  const resetMessage = () => {
    setTimeout(() => {
      setAlertMessage(null);
      setAlertType('')
    }, 3000);
}


  const handleSubmitDelete = (event) => {
    event.preventDefault();

    // fetch pour supprimer l'utilisateur avec l'id "userId"
  fetch(`https://crm-back.vercel.app/customers/${userId}`, {
      method: "DELETE", 
      headers: {
        "Content-Type": "application/json",
      }, 
  })
    .then(response => response.json())
    .then(response => {
      console.log(response)
      if (!response._id) {
        throw new Error('Erreur lors de la suppression de l\'utilisateur');
      }
       console.log(`Utilisateur ${response.lastname} supprimé avec succès`);
       setAlertType('success');
       setAlertMessage([`Utilisateur ${response.lastname} supprimé avec succès`]);
       resetMessage();
    })
    .catch(err => {
      console.error(err)
      setAlertMessage('Une erreur est survenue' + err + '');
      setAlertType('error');
      resetMessage();
    });

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

  const handleSearch = (e) => {
    setSearch(e.target.value);
    if(e.target.value === '') {
    } else {
      let result = [];
      result = data.filter((user) => {
        return user.lastname.toLowerCase().includes(search.toLowerCase()) || user.firstname.toLowerCase().includes(search.toLowerCase());
      });
    }
  };


  return (
    <div className='users'>
          <div className="message">
        {
          alertMessage && alertMessage.map((msg, index) => {
            return (
              <p key={index} className={alertType}> {msg} </p>
            );})
        }
    </div>
    <h1>Liste des utilisateurs</h1>

    <Link className='add__btn' style={{width:"50%", margin:"1rem auto"}} to='/admin/utilisateur/ajouter'><button className='user__btn add__btn'><BsPlusCircle className='plus__btn'/> Ajouter un utilisateur</button></Link>
    
    <input 
    type="text" 
    className='user__search'
    placeholder="Rechercher un utilisateur" 
    value={search}
    onChange={(e)=>setSearch(e.target.value)}
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
      data &&
        data.filter((user) => {
        return (user.lastname.toLowerCase().includes(search.toLowerCase()) || user.firstname.toLowerCase().includes(search.toLowerCase()))
        })
          .map((user) => (
        <tr key={user._id}>
          <td data-label='Nom'>{user.lastname}</td>
          <td data-label='Prénom'>{user.firstname}</td>
          <td data-label='Détails'>
            <Link to={`/admin/utilisateur/details/${user._id}`}><button className='user__btn'><BiShow /></button></Link>
            <Link to={`/admin/utilisateur/modifier/${user._id}`}><button className='user__btn'><AiOutlineEdit /></button></Link>
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
            <button onClick={handleSubmitDelete}>Confirmer</button>
          </div>
        </div>
      )}

    <Outlet />

    </div>
  )
}
