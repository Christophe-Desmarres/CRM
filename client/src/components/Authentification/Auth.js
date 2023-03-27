import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';


const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('dede@dd.com');
  const [password, setPassword] = useState('gégé27');
  const [showPassword, setShowPassword] = useState(false);


  const handleLogin = (e) => {
    e.preventDefault();
    // Traitement de la connexion utilisateur
    const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email:email,
            password:password
        }),
      };
      
      fetch('https://crm-back.vercel.app/api/user/login', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
  };

  const handleRegister = (e) => {
    e.preventDefault();
    // Traitement de l'enregistrement utilisateur
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
        <h2>{isLogin ? 'Connexion' : 'Inscription'}</h2>
        <form onSubmit={isLogin ? handleLogin : handleRegister}>
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
