import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import profileStyle from 'styled-components';
import {BiEdit} from 'react-icons/bi';

const ProfileDiv = profileStyle.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 5rem auto;
  width: 90%;
  max-width: 1000px;
  padding: 1rem;
  border: 1px solid #333;
  border-radius: 5px;
  box-shadow: 0 0 5px #333;
  background-color: #33333310;
  color: #333;
  font-size: 1rem;
  text-align: center;

  h1 {
    margin: 1rem;
    font-size: 2rem;
    color: #ff3372;
  }

  .log-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .edit {
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;


    img {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      margin: 1rem;
    }

    .edit-button {
      position: absolute;
      bottom: 5px;
      right: 5px;
      font-size: 1rem;
      margin: 0.5rem;
      padding: 0.2rem;
      border: none;
      background-color: transparent;
      color: #ff3372;
      cursor: pointer;
    }
  }    
    #file-up {
      display: none;
    }

    .field {
      width: 100%;
      display: flex;


        label {
          width: 30%;
          text-align: right;
            font-size: 1rem;
            color: #ff3372;
          }

          input {
            text-align: left;
            width: 50%;
            margin: 0.5rem;
            padding: 0.2rem;
            border: none;
            border-bottom: 1px solid #ff3372;
            background-color: #33333310;
            color: #333;
            font-size: 1rem;
          }
  }

    p {
      margin: 0.5rem;
      font-size: 1rem;
      color: #333;
    }
  }
`

export default function Profile() {

  document.title='Profil';
  const [userData, setUserData] = useState({}); 
  const [fileUrl, setFileUrl] = useState('');
  const { id } = useParams();

  console.log('id', id);
  
  useEffect(() => {
    fetch(`https://crm-back.vercel.app/api/user/${id}`)
    .then(res => res.json())
    .then(data => {
      setUserData(data);
      setFileUrl(require(`../uploads/profil/${userData.picture}`));

    })
    .catch(err => console.log(err))
    console.log('data', userData);
  } , [id]
  )

  const editImage = () => {
    const fileInput = document.querySelector('#file-up');
    fileInput.click();
    fileInput.addEventListener('change', () => {
      const file = fileInput.files[0];
      const formData = new FormData();
      // set dataform with real path
      formData.append('file', file);
      formData.append('upload_preset', 'overwrite');
      fetch('https://api.cloudinary.com/v1_1/djx5h4cjt/image/upload', {
        method: 'POST',
        body: formData
      })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setFileUrl(data.secure_url);
      })
      .catch(err => console.log(err))
    })
  }


  return (
    <ProfileDiv className="profil-page">
      <h1>Mon Profil</h1>
      <div className="log-container">
      <div className="edit">
        <img src={fileUrl} alt={`avatar de ${userData.pseudo}`}/>
        <button className="edit-button" onClick={editImage}><BiEdit /></button>
      </div>
        <p>{userData.pseudo}</p>
        <input type="file" id="file-up" />

        <div className='field'>
          <label htmlFor="pseudo">Pseudo</label>
          <input type="text" id='pseudo' defaultValue={userData.pseudo} />
        </div>
        <div className='field'>
          <label htmlFor="email">Email</label>
        <input type="text" id='email' defaultValue={userData.email} />
        </div>
        <div className='field'>
          <label htmlFor="firstname">Prénom</label>
        <input type="text" id='firstname' defaultValue={userData.firstname} />
        </div>
        <div className='field'>
          <label htmlFor="lastname">Nom</label>
        <input type="text" id='lastname' defaultValue={userData.lastname} />
        </div>
 
        <p>Profil créé le : {userData.createdAt}</p>
          
        {/* <div  className="img-container">
          <img src={logImg} alt=''/>
        </div> */}
      </div>
    </ProfileDiv>
  )
}
