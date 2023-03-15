import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
//import { format } from 'date-fns'


export default function UserDetail() {
  const { id } = useParams();


  const [data, setData] = useState({});
  const [userDate, setUserDate] = useState("");


  useEffect(() => {
    fetch(`https://crm-back.vercel.app/customers/${id}`, [{mode:'no-cors'}])
      .then((res) => res.json())
      .then((data) => {
        setData(data); 
        let date = new Date(data.date_creation);
        setUserDate(date.getDate() + '/' + parseInt(date.getMonth() + 1) + '/' + date.getFullYear() + ' à ' + date.getHours() + ':' + date.getMinutes() );
        console.log(date.getDate() + '/' + parseInt(date.getMonth() + 1) + '/' + date.getFullYear());
      });
  }, []);





  return (
    <div className='users'>
    {
      data && (
        <div className='user__info__container'>
          <p className='user__info'>ID de l'utilisateur : {id}</p>
          <p className='user__info'>{data.civilite} <input className='user__input__info' value={data.firstname}/> <input className='user__input__info' value={data.lastname}/></p>
          <p className='user__info'><input className='user__input__info' value={data.intitule}/></p>
          <p className='user__info'>Email : <input type='email' className='user__input__info' value={data.email}/></p>
          <p className='user__info'>Téléphone : <input className='user__input__info' value={data.phone}/></p>
          <p className='user__info'>Adresse : <input className='user__input__info' value={data.address}/> <input className='user__input__info' value={data.cp}/> <input className='user__input__info' value={data.city}/></p>

          <p className='user__info'>Lien avec : {data.link_with}</p>
          <p className='user__info'>Provenance {data.provenance}</p>
          <p className='user__info'>Commentaires : <input className='user__input__info' value={data.provenance}/></p>
          <p className='user__info'>Création le {userDate} ==> {data.date_creation}</p>
        </div>
      )

    }
    
    
    </div>
  )
}
