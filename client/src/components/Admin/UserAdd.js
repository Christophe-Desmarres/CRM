import React, { useState } from "react";
import "../../assets/styles/components/_userAdd.scss";

const AddClientForm = () => {
    const [formData, setFormData] = useState({
        civilite: "Mr",
        intitule: "Cd-Mar Photo",
        link_with: "",
        photo: "",
        provenance: "",
        commentaires: "",
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      address: "",
      city: "",
      postalCode: "",
    });
  
    const handleSubmit = (event) => {
      event.preventDefault();
      console.log("Formulaire envoyé : ", formData)
      console.log("Formulaire envoyé : ", JSON.stringify(formData))
  
      // Envoie la requête POST au serveur Node.js
        fetch("http://localhost:5500/customers", {
            method: "POST",
            mode:'no-cors',
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        })
        .then((response) => {
            console.log("Réponse reçue : ", response);
            if (response.ok) {
              return response.json();
            } else {
              throw new Error("Erreur lors de l'ajout du client");
            }
          })
          .then((data) => {
            console.log("Client ajouté avec succès", data);
            setFormData({
                firstName: "",
                lastName: "",
                email: "",
                phone: "",
                address: "",
                city: "",
                postalCode: "",
            });
          })
          .catch((error) => {
            console.error("Erreur : ", error);
          });
        };
  
    const handleChange = (event) => {
      const { name, value } = event.target;
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
      }));
    };
  
    return (
      <form onSubmit={handleSubmit} className="form-container">
        <label htmlFor="firstName" className="form-label">
          Prénom :
        </label>
        <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="form-input"
            required
        />
  
        <label htmlFor="lastName" className="form-label">
          Nom de famille :
        </label>
        <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className="form-input"
            required
        />
  
        <label htmlFor="email" className="form-label">
          E-mail :
        </label>
        <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="form-input"
            required
        />
  
        <label htmlFor="phone" className="form-label">
          Téléphone :
        </label>
        <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="form-input"
            required
        />
  
        <label htmlFor="address" className="form-label">
          Adresse :
        </label>
        <input
            type= "text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="form-input"
            required
        />

        <label htmlFor="city" className="form-label">
            Ville :
        </label>
        <input
            type="text"
            id="city"
            name="city"
            value={formData.city}
            onChange={handleChange}
            className="form-input"
            required
        />

        <label htmlFor="postalCode" className="form-label">
            Code Postal :
        </label>
        <input
            type="text"
            id="postalCode"
            name="postalCode"
            value={formData.postalCode}
            onChange={handleChange}
            className="form-input"
            required
        />

        <button type="submit" className="form-submit">
            Ajouter un client
        </button>
        </form>
);
};

export default AddClientForm;