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
 
              <input type='text' className='user__info user__input__info' value={data.firstname}/> 
              <input type='text' className='user__info user__input__info' value={data.lastname}/>

              <input type='text' className='user__info user__input__info' value={data.intitule}/>

              <input type='email' className='user__info user__input__info' value={data.email}/>

              {/* <button className='user__info user__btn'>
                <a href={"mailto:" + data.email}>Envoyer</a>
              </button> */}

              <input type='tel' className='user__info user__input__info' value={data.phone}/>
              {/* <button className='user__info user__btn'>
                <a href={`tel:${data.phone}`}>Appeler</a>
              </button> */}

              <input type='text' className='user__info user__input__info' value={data.address}/> 
              <input type='text' className='user__info user__input__info' value={data.cp}/> 
              <input type='text' className='user__info user__input__info' value={data.city}/>

              {/* <button className='user__info user__btn'>
                <a href={`https://www.google.com/maps/place/${data.address},+${data.cp}+${data.city}`} target="_blank" rel="noreferrer">Aller</a>
              </button> */}

            <p className='user__info user__info'>Lien avec : {data.link_with}</p>
            
            <select className='user__info user__info'> 
              <option disabled selected>{data.provenance}</option>
              <option>Wix</option>
              <option>Le Bon Coin</option>
              <option>Site</option>
              <option>Bouche à oreille</option>
              <option>Autres (à préciser)</option>
            </select>

              <input type='text' className='user__info user__input__info' value={data.provenance}/>

              <br/>
             <input type='text' value={id}/>
            <p className='user__info user__info'>ID de l'utilisateur id id id id id id id id id id id id id id id id id id id id id id id id id </p>

            <p className='user__info user__info'>ID de l'utilisateur : {id}</p>
            <p className='user__info user__info'>Création le {userDate}</p>



        <div className='action__button'>
        <IconContext.Provider value={{ size: "3rem"}}>

          <div className='user__btn'>
            <button>
                <a href={"mailto:" + data.email}><FcInvite /></a>
            </button>
          </div>

          <div className='user__btn'>
            <button>
                <a href={`tel:${data.phone}`}><FcPhone /></a>
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
