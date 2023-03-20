import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { IconContext } from "react-icons";
import { FcPhone, FcInvite, FcGlobe } from "react-icons/fc";

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
        setUserDate(date.getDate().toString().padStart(2, "0") + '/' + parseInt(date.getMonth() + 1).toString().padStart(2, "0") + '/' + date.getFullYear() + ' à ' + date.getHours() + ':' + date.getMinutes() );
        console.log(date.getDate() + '/' + parseInt(date.getMonth() + 1) + '/' + date.getFullYear());
      });
  }, []);





  return (
    <div id='userDetails'>


    {
      data && (
        
        <div className='user__info__container'>

          <h1 className='user__info title'>{data.intitule}</h1>
          <p className='user__info'>{data.firstname} {data.lastname}</p>

          <p className='user__info'>{data.address} <br/> {data.cp} {data.city}</p>
         
          <p className='user__info'>{data.phone}</p>

          <p className='user__info'>{data.email}</p>

          <p className='user__info'>{data.link_with && ("Lien avec : <br/> " + data.link_with)}</p>
          <p className='user__info'>{data.provenance && ("Lien avec : <br/> " + data.link_with)}</p>

          <p className='user__info'>ID de l'utilisateur : <br/> {id}</p>
          <p className='user__info'>{userDate && (`Création le ${userDate}`)}</p>



          <div className='action__button'>
            <IconContext.Provider value={{ size: "3rem"}}>
              <div className='user__btn'>
                <button>
                    <a href={`tel:${data.phone}`}><FcPhone /></a>
                </button>
              </div>

              <div className='user__btn'>
                <button>
                    <a href={"mailto:" + data.email}><FcInvite /></a>
                </button>
              </div>

              <div className='user__btn no-border'>
                <button>
                    <a href={`https://www.google.com/maps/place/${data.address},+${data.cp}+${data.city}`} target="_blank" rel="noreferrer">
                    <FcGlobe /></a>
                </button>
              </div>
            </IconContext.Provider>
          </div>
        </div>
      )

    }

    </div>
    
    
  )
}
