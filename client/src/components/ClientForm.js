import React, { useState } from 'react';

function ClientForm() {
  const [formData, setFormData] = useState({
    firstName: 'Gérard',
    lastName: 'Mensoif',
    address: '',
    zipCode: '',
    city: '',
    prospectClient: '',
    phone: '0123456789',
    email: 'test@test.fr',
    suggestions: []
  });

  const handleChange = (event) => {
    console.log(event.target.name, event.target.value);

    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });

    if (event.target.name === 'city' && formData.city.length > 2) {
      cityAutosuggest(event);

    }
  }
  
  const cityAutosuggest = (event) => {
    console.log(formData.city);


    let suggestCity = fetch(`https://api-adresse.data.gouv.fr/search/?q=${event.target.value}&limit=4&type=municipality&autocomplete=1`)
      .then(response => response.json())
      .then(data => {
        return data.features;
        //setFormData({ ...formData, suggestions: data.features});
      });

      console.log(suggestCity.properties);

    setFormData({
    ...formData,
    suggestions: suggestCity.properties.city
  });
}


  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      console.log("Formulaire valide, données soumises : ", formData);
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

        // Vérifier que le code postal est de 5 chiffres
        if (!/^\d{5}$/.test(formData.zipcode)) {
          isValid = false;
          errorMessage = "Le code postal doit être de 5 chiffres";
      }
  

    if (!isValid) {
      alert(errorMessage);
    }
    return isValid;
  }

  return (
    <form onSubmit={handleSubmit}>
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
      <label>
        Adresse:
        <input type="text" name="address" onChange={handleChange} value={formData.address} />
      </label>
      <br />
      <label>
        Code Postal:
        <input type="text" name="zipCode" onChange={handleChange} value={formData.zipCode} />
      </label>
      <br />
<label>
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
      <br />
      <label>
        Prospect/Client:
        <select name="prospectClient" onChange={handleChange} value={formData.prospectClient}>
          <option value="prospect">Prospect</option>
          <option value="client">Client</option>
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
      <button type="submit">Soumettre</button>
    </form>
  );
}

export default ClientForm;