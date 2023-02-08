import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import Error from '../error/Error';
import { useCookies } from 'react-cookie';



export default function SingIn() {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  // const [cookies, setCookie, removeCookie] = useCookies(['pseudo']);
  const [ setCookie] = useCookies(['pseudo']);

const handleSubmit = async (e) => {
    e.preventDefault();
    const emailError = document.querySelector('.email.error');
    const passwordError = document.querySelector('.password.error');

    axios({
        method: "post",
        url: `${process.env.REACT_APP_API_URL}api/user/login`,
        withCredentials: true,
        data: {
          email,
          password,
        },
        headers: {
            "Content-Type": "application/json",
          }
      })
        .then((res) => {
          console.log(res);
          if (res.data.errors) {
              setError(res.data.errors);
            } else {
                emailError.innerHTML = '';
                passwordError.innerHTML = '';
                setError('');
                console.log(`Connection réussie ! Bienvenue ${res.data.name}`);
                setCookie("pseudo", `${res.data.name}`);

                // window.location = "/";
            }
        })
        .catch((err) => {
            emailError.innerHTML = err.response.data.errors.email;
            passwordError.innerHTML = err.response.data.errors.password;
            setError(err.response.data.errors.email);

          console.log(err);
        });
    };
  

  return (
    <div>
    <form action="" onSubmit={handleSubmit} id='sign-up-form'>
        <Error error={error}/>
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" onChange={(e) => setEmail(e.target.value)} value={email} />
        <div className="email error"></div>
        <br />
        <label htmlFor="password">Mot de passe</label>
        <input type="password" name="password" id="password" onChange={(e) => setPassword(e.target.value)} value={password} autoComplete />
        <div className="password error"></div>
        <br />
        <input type="submit" value='Se connecter' />
    </form>
    </div>
  )
}
