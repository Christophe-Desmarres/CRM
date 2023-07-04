import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useCookies } from 'react-cookie';



const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [pseudo, setPseudo] = useState('dédé');
  const [email, setEmail] = useState('dede@dd.com');
  const [password, setPassword] = useState('gégé27');
  const [showPassword, setShowPassword] = useState(false);
  const [alertMessage, setAlertMessage] = useState(null);
  const [alertType, setAlertType] = useState('');
  const [cookie, setCookie] = useCookies(['userId', 'name', 'token']);

  // to reset alert message after 3s
  const resetMessage = () => {
          setTimeout(() => {
            setAlertMessage(null);
            setAlertType('')
          }, 3000);
  }

  // to check data and login user
  const handleLogin = (e) => {
    e.preventDefault();

    // check user data to login
    const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        mode: 'cors',
        credentials: 'include',
        body: JSON.stringify({
            email:email,
            password:password
        }),
      };
      
      fetch('https://crm-back.vercel.app/api/user/login', options)
        .then(response => response.json())
        .then(response => {
          console.log(response);
          if(response.errors) {
            setAlertMessage(["identifiants incorrects"]);
            setAlertType('error');
            resetMessage();
            return;
          }
          setCookie("userId", `${response.user}`, { path: '/' });
          setCookie("name", `${response.name}`, { path: '/' });
          //setCookie("token", `${response.token}`, { path: '/' });
          setAlertType('success');
          setAlertMessage([`Connexion réussie,`,` Bienvenue ${response.name}!`]);
          resetMessage();
          
          // TODO : add role to cookies
          // redirect to admin if role allow else to home page
          setTimeout(() => {
            window.location = true ? "/admin" : "/";
           }, 3000);

        })
        .catch(err => {
          console.error(err);
          setAlertMessage(['Une erreur est survenue' + err + '']);
          setAlertType('error');
          resetMessage();
        });

  };

  const handleRegister = (e) => {
    e.preventDefault();
     // Traitement de l'enregistrement utilisateur
     const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
          pseudo:pseudo,
          email:email,
          password:password
      }),
    };

    fetch('https://crm-back.vercel.app/api/user/register', options)
      .then(response => response.json())
      .then(response => {
        console.log(response);
        if(response.errors) {
          setAlertMessage([`${response.errors.email} ${response.errors.password} ${response.errors.pseudo}`]);
          // setAlertMessage([response.errors]);
          setAlertType('error');
          resetMessage();
          return;
        }
        setAlertType('success');
        setAlertMessage([`Inscription réussie, Bienvenue ${pseudo}!`]);
        resetMessage();
        setIsLogin(true);
      })
      .catch(err => {
        console.error(err);
        setAlertMessage(['Une erreur est survenue' + err + '']);
        setAlertType('error');
        resetMessage();
      });


  };

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="auth-container">
      <div className="auth-form-wrapper">
      <div className="message">
        {
          alertMessage && alertMessage.map((msg, index) => {
            return (
              <p key={index} className={alertType}> {msg} </p>
            );})
        }
    </div>
        <h2>{isLogin ? 'Connexion' : 'Inscription'}</h2>
        <form onSubmit={isLogin ? handleLogin : handleRegister}>
            { !isLogin && 
            (<div className="form-group">
            <label htmlFor="pseudo">pseudo :</label>
            <div className='field'>

            <input
              type="pseudo"
              id="pseudo"
              value={pseudo}
              onChange={(e) => setPseudo(e.target.value)}
              required
            />
          </div>
          </div>)
          }

          <div className="form-group">
            <label htmlFor="email">Email :</label>
            <div className='field'>

            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          </div>
          <div className="form-group">
            <label htmlFor="password">Mot de passe :</label>
            <div className='field'>
                <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                />
                <button type="button" className="toggle-password" onClick={togglePasswordVisibility}>
                {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
            </div>
          </div>
          <button type="submit">{isLogin ? 'Se connecter' : "S'enregistrer"}</button>
        </form>
        <p>
          {isLogin ? "Vous n'avez pas de compte ?" : 'Vous avez déjà un compte ?'}
          <button className="toggle-form-btn" onClick={toggleForm}>
            {isLogin ? "S'enregistrer" : 'Se connecter'}
          </button>
        </p>
      </div>
    </div>
  );
};

export default AuthPage;
