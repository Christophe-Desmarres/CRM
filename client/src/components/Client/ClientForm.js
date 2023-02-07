import React, { useState } from 'react';
import styled from 'styled-components';
import emailjs from '@emailjs/browser';


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

    &:focus {
      color: blue;
    }
  }
`;

function ClientForm() {
  const [formData, setFormData] = useState({
    firstName: 'Gérard',
    lastName: 'Mensoif',
    // address: '',
    // zipCode: '',
    // city: '',
    type: '',
    phone: '0123456789',
    email: 'chrisdmar12@gmail.com',
    comment: '',
    // suggestions: []
  });

  const handleChange = async (event) => {

    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });

    // if (event.target.name ==='city' && formData.city.length > 2) {
      
    //   let suggest = await fetch(`https://api-adresse.data.gouv.fr/search/?q=${formData.city}&limit=4&type=municipality&autocomplete=1`)
    //   .then(response => response.json())
    //   .then(data => {
    //     return data.features;
    //   })
    //   // let data = await cityAutosuggest(formData.city);
    //   console.log(suggest);
      
    //   setFormData({
    //     ...formData,
    //     suggestions: suggest
    //   });
    // }
  }
  
  // // return array wiyh 4 cities suggestions
  // const cityAutosuggest = async (city) => {
  //   console.log(city);

  //   let suggest = await fetch(`https://api-adresse.data.gouv.fr/search/?q=${city}&limit=4&type=municipality&autocomplete=1`)
  //     .then(response => response.json())
  //     .then(data => {
  //       console.log(data.features);
  //       return data.features;
  //     });
  //     return suggest;
        
  //     }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      console.log("Formulaire valide, données soumises : ", formData);
      sendEmail();
    }
  };

  const validateForm = () => {
    let isValid = true;
    let errorMessage = '';

    // Vérifier que chaque champ est rempli
    Object.keys(formData).forEach((key) => {
      if (formData[key] === '') {
        isValid = false;
        errorMessage = `Le champ ${key} est obligatoire`;
      }
    });

    // Vérifier que le numéro de téléphone est un numéro valide
    if (!/^\d+$/.test(formData.phone)) {
      isValid = false;
      errorMessage = "Le numéro de téléphone doit être un numéro valide";
    }

    // Vérifier que l'email est un format valide
    if (!/^\S+@\S+$/.test(formData.email)) {
      isValid = false;
      errorMessage = "L'email doit être un format valide";
    }

      //   // Vérifier que le code postal est de 5 chiffres
      //   if (!/^\d{5}$/.test(formData.zipcode)) {
      //     isValid = false;
      //     errorMessage = "Le code postal doit être de 5 chiffres";
      // }
  

    if (!isValid) {
      alert(errorMessage);
    }
    return isValid;
  }

  const sendEmail = () => {

    console.log(process.env.REACT_APP_YOUR_SERVICE_ID);

    emailjs.send(process.env.REACT_APP_YOUR_SERVICE_ID, process.env.REACT_APP_YOUR_TEMPLATE_ID, formData, process.env.REACT_APP_YOUR_PUBLIC_KEY)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
      }, (error) => {
        console.log('FAILED...', error);
      });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <label>
        Nom:
        <input type="text" name="lastName" onChange={handleChange} value={formData.lastName} />
      </label>
      <br />
      <label>
        Prénom:
        <input type="text" name="firstName" onChange={handleChange} value={formData.firstName} />
      </label>
      <br />
      {/* <label>
        Adresse:
        <input type="text" name="address" onChange={handleChange} value={formData.address} />
      </label>
      <br /> */}
      {/* <label>
        Code Postal:
        <input type="text" name="zipCode" onChange={handleChange} value={formData.zipCode} />
      </label>
      <br /> */}
      {/* <label>
        Ville :
        <input
          type="text"
          name="city"
          onChange={handleChange}
          value={formData.city}
        />
        <ul>
          {formData.suggestions.map(suggestion => (
            <li key={suggestion.properties.id}>{suggestion.properties.city}</li>
          ))}
        </ul>
      </label>
      <br /> */}
      <label>
        Sujet :
        <select name="type" onChange={handleChange} value={formData.type}>
          <option value="" disabled>--Please choose an option--</option>
          <option value="Recrutement" >Recrutement</option>
          <option value="Projet">Projet</option>
          <option value="Information">Information</option>
          <option value="Commander">Commander</option>
        </select>
      </label>
      <br />
      <label>
        Téléphone :
        <input
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Email :
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        commentaire :
        <textarea
          wrap='hard'
          name="comment"
          value={formData.comment}
          onChange={handleChange}
        />
      </label>
      <br />
      <button type="submit" >Soumettre</button>
    </Form>
  );
}

export default ClientForm;