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
      firstname: "",
      lastname: "",
      email: "",
      phone: "",
      address: "",
      city: "",
      postalCode: "",
    });
    const [alertMessage, setAlertMessage] = useState(null);
    const [alertType, setAlertType] = useState('');

    const resetMessage = () => {
            setTimeout(() => {
              setAlertMessage(null);
              setAlertType('')
            }, 3000);
    }
  
    const handleSubmit = (event) => {
      event.preventDefault();
      console.log("Formulaire envoyé : ", formData)
      console.log("Formulaire envoyé : ", JSON.stringify(formData))
  
      // Envoie la requête POST au serveur Node.js
        fetch("https://crm-back.vercel.app/customers", {
            method: "POST",
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
            setAlertType('success');
            setAlertMessage(['Client ajouté avec succès']);
            resetMessage();
            console.log("Client ajouté avec succès", data);
            setFormData({
              firstname: "",
              lastname: "",
              email: "",
              phone: "",
              address: "",
              city: "",
              postalCode: "",
            });
          })
          .catch((error) => {
            setAlertMessage('Une erreur est survenue' + error.text + '');
            setAlertType('error');
            resetMessage();
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
          <div className="message">
        {
          alertMessage && alertMessage.map((msg, index) => {
            return (
              <p key={index} className={alertType}> {msg} </p>
            );})
        }
    </div>
        <label htmlFor="firstname" className="form-label">
          Prénom :
        </label>
        <input
            type="text"
            id="firstname"
            name="firstname"
            value={formData.firstname}
            onChange={handleChange}
            className="form-input"
            required
        />
  
        <label htmlFor="lastname" className="form-label">
          Nom de famille :
        </label>
        <input
            type="text"
            id="lastname"
            name="lastname"
            value={formData.lastname}
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