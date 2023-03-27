import React from 'react'
import { useParams, useLocation } from 'react-router-dom'
import Auth from '../components/Authentification/Auth'
import logImg from '../assets/icons/log.svg'


export default function Profile() {

  document.title='Profil';

  const { id } = useParams();
  const location = useLocation();
  console.log(id, location);

  return (
    <div className="profil-page">
    <div className="log-container">

      <Auth signin={false} signup={true}/> 

      <div  className="img-container">
        <img src={logImg} alt=''/>
      </div>
    </div>
    
    </div>
  )
}
