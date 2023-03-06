import React, { useState } from 'react';
import styled from 'styled-components';
import emailjs from '@emailjs/browser';
import Captcha from './Captcha';
import {FaRegPaperPlane} from 'react-icons/fa';


const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  color: #333;
  font-weight: 600;

  label{
    width:100%;
    text-align: left;
    line-height: 1.5rem;
  }

  textarea {
    font-size: 1.2rem;
    height: 100px;
  }

  input, select, textarea {
    width: 100%;
    float: right;
    margin-bottom: 0.5rem;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 1rem;
    color: #333;
    font-weight: 600;

    &:focus {
      border-color: rgba(23, 190, 187);
    }
  }
  .submit {
    width: 100%;
    padding: 0.5rem;
    border: none;
    border-radius: 5px;
    background-color: rgba(23, 190, 187);
    color: #fff;
    font-size: 1.2rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    overflow: hidden;


    .plane {
      margin-left: 0.5rem;
      rotate: 35deg;
      animation: planePulse 1.9s ease-in-out infinite;
   

    @keyframes planePulse {
      to{
        transform: scale(1.2);
        opacity: 0;
      }
      }
    }
  }
`;

const ClientForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    type: '',
    phone: '',
    email: '',
    comment: '',
  });

  const formDataKey = {
    firstName: 'Prénom',
    lastName: 'Nom',
    type: 'Sujet',
    phone: 'Téléphone',
    email: 'Email',
    comment: 'Commentaire',
  };

  const [alertMessage, setAlertMessage] = useState(null);
  const [alertType, setAlertType] = useState('');


  // set the form data to the state
  const handleChange = async (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  }
  

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm() === true) {
      setAlertType('success');
      setAlertMessage(['Envoi en cours, veuillez patienter...']);
      console.log("Formulaire valide, données soumises : ", formData);
      sendEmail();
    } 
  };

  // check every field filled
  const validateForm = () => {
    let isValid = true;
    let errorMessage = [];

    // Vérifier que chaque champ est rempli
    Object.keys(formData).forEach((key) => {
      if (formData[key] === '') {
        isValid = false;
        errorMessage.push(`Le champ ${formDataKey[key]} est obligatoire\n`);
      }
    });

    // Vérifier que le numéro de téléphone est un numéro valide
    if (!/^\d+$/.test(formData.phone)) {
      isValid = false;
      errorMessage.push("Le numéro de téléphone doit être un numéro valide\n");
    }

    // Vérifier que l'email est un format valide
    if (!/^\S+@\S+$/.test(formData.email)) {
      isValid = false;
      errorMessage.push("L'email doit être un format valide\n");
    }
  
    // show alert message
    if (!isValid) {
      setAlertMessage(errorMessage);
      setAlertType('error');
      setTimeout(() => {
        setAlertMessage(null);
        setAlertType('')
      }, 3000);
    }
    return isValid;
  }

  // send email
  const sendEmail = () => {

    emailjs.send(process.env.REACT_APP_YOUR_SERVICE_ID, process.env.REACT_APP_YOUR_TEMPLATE_ID, formData, process.env.REACT_APP_YOUR_PUBLIC_KEY)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setAlertType('success');
        setAlertMessage(['Votre message a bien été envoyé']);

        // hide alert message
        setTimeout(() => {
          setAlertMessage(null);
          setAlertType('')
        }, 3000);

        // reset form contact
        setFormData({
          firstName: '',
          lastName: '',
          type: '',
          phone: '',
          email: '',
          comment: '',
        });
      }, (error) => {
        console.log('FAILED...', error);
        setAlertMessage('Une erreur est survenue' + error.text + '');
        setAlertType('error');
      });
  };

  return (
    <Form onSubmit={handleSubmit}>

    <div className="message">
        {
          alertMessage && alertMessage.map((msg, index) => {
            return (
              <p key={index} className={alertType}> {msg} </p>
            );})
        }
    </div>
      <label>Nom :
        <input 
        type="text" 
        name="lastName" 
        placeholder='Votre Nom'
        onChange={handleChange} value={formData.lastName} />
      </label>
      <br />
      <label>Prénom :
        <input 
        type="text" 
        name="firstName" 
        placeholder='Votre Prénom'
        onChange={handleChange} value={formData.firstName} />
      </label>
      <br />
      <label>Sujet :
        <select name="type" onChange={handleChange} value={formData.type}>
          <option value="" disabled>--Veuillez choisir une option--</option>
          <option value="Recrutement" >Recrutement</option>
          <option value="Projet">Projet</option>
          <option value="Information">Information</option>
          <option value="Commander">Commande</option>
        </select>
      </label>
      <br />
      <label>Téléphone :
        <input
          type="text"
          name="phone"
          placeholder='06 01 02 03 04'
          value={formData.phone}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>Email :
        <input
          type="email"
          name="email"
          placeholder='johndoe@example.com'
          value={formData.email}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>Commentaire :
        <textarea
          wrap='hard'
          name="comment"
          value={formData.comment}
          onChange={handleChange}
        />
      </label>
      <br />
      
      <Captcha />

      <button type="submit" className='submit'>Envoyer <FaRegPaperPlane className='plane'/></button>
    </Form>
  );
}

export default ClientForm;