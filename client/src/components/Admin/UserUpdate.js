import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';


function UserUpdate({ userId }) {

    const { id } = useParams();
    const [user, setUser] = useState({
    firstname: '',
    lastname: '',
    phone: '',
    address: '',
    cp: '',
    city: '',
    email: ''
    });

    const [alertMessage, setAlertMessage] = useState(null);
    const [alertType, setAlertType] = useState('');

    const resetMessage = () => {
            setTimeout(() => {
              setAlertMessage(null);
              setAlertType('')
            }, 3000);
    }

    useEffect(() => {
        // Récupération des données de l'utilisateur
        fetch(`https://crm-back.vercel.app/customers/${id}`, [{mode:'no-cors'}])
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setUser(data); 
            });
    }, []);

    const handleChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
    console.log(user);
    };

    const handleSubmit = (event) => {
    event.preventDefault();
    console.log("submit");
    console.log(user);

    // Envoi des données au serveur
    fetch(`https://crm-back.vercel.app/customers/${id}`, {
        method: 'PUT',
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })
    .then((response) => {
        console.log("Réponse reçue : ", response);
        if (response.ok) {
            setAlertType('success');
            setAlertMessage([`Utilisateur ${user.firstname} modifié avec succès`]);
            resetMessage();
            // Rediriger l'utilisateur
            setTimeout(()=>{window.location.href = '/admin/utilisateur';}, 3000);
                  } else {
                    setAlertMessage('Une erreur est survenue' + response.statusText + '');
                    setAlertType('error');
                    resetMessage();
          throw new Error("Erreur lors de la modification de l'utilisateur");
        }
      })
    //   .then(() => {
    // })
    .catch(error => {
        console.error('Error:', error);
    });
    };

    return (
        <div className="edit-customer">
                  <div className="message">
        {
          alertMessage && alertMessage.map((msg, index) => {
            return (
              <p key={index} className={alertType}> {msg} </p>
            );})
        }
    </div>
          <h2>Modifier un client</h2>
          <form onSubmit={handleSubmit}>
            <label>
              Nom :
              <input type="text" name="lastname" value={user.lastname} onChange={handleChange} />
            </label>
            <label>
              Prénom :
              <input type="text" name="firstname" value={user.firstname} onChange={handleChange} />
            </label>
            <label>
              Téléphone :
              <input type="text" name="phone" value={user.phone} onChange={handleChange} />
            </label>
            <label>
              Adresse :
              <input type="text" name="address" value={user.address} onChange={handleChange} />
            </label>
            <label>
              Code postal :
              <input type="text" name="cp" value={user.cp} onChange={handleChange} />
            </label>
            <label>
              Ville :
              <input type="text" name="city" value={user.city} onChange={handleChange} />
            </label>
            <label>
              Email :
              <input type="email" name="email" value={user.email} onChange={handleChange} />
            </label>
            <button type="submit" onClick={handleSubmit}>Enregistrer</button>
          </form>
        </div>
      );
    };

export default UserUpdate;
