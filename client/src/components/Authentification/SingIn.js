import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import Error from '../error/Error';


export default function SingIn() {

const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [error, setError] = useState('');

const handleSubmit = async (e) => {
    e.preventDefault();
    const emailError = document.querySelector('.email.error');
    const passwordError = document.querySelector('.password.error');

    axios({
        method: "post",
        url: `http://localhost:5500/api/user/login`,
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
          if (!res.data.errors) {
              console.log(`Connection réussie ! Bienvenue ${res.data.name}`);
              // window.location = "/";
            } else {
              emailError.innerHTML = res.data.errors.email;
              passwordError.innerHTML = res.data.errors.password;
          }
        })
        .catch((err) => {
          console.log(err);
        });
    };
  



    // const options = {
    //         method: 'post',
    //         auth: {
    //             email,
    //             password
    //             },
    //             withCredentials: true
    //         };
        




    // try {
    //     const res = await axios(`${process.env.REACT_APP_API_URL}api/user/login`,{
    //         email,
    //         password
    //         },
    //         {withCredentials: true}
    //         );

    //     // }`${process.env.REACT_APP_API_URL}api/user/login`, {
    //     //     email,
    //     //     password
    //     // }, {withCredentials: true});
    //     console.log(res);
    //     if (!res.config.errors) {
    //         setError('');
    //         console.log(`Connection réussie ! Bienvenue ${res.data.name}`);

    //         //setTimeout(()=>{window.location = '/'}, 2000);
    //     } else {
    //         emailError.innerHTML = res.data.errors.email;
    //         passwordError.innerHTML = res.data.errors.password;
    //     }

    // } catch (err) {
    //     console.log(err);
    //     setError(err.message);
    //     // emailError.innerHTML = err.response.data.errors.email;
    //     // passwordError.innerHTML = err.response.data.errors.password;
    // }

// }


  return (
    <div>
    <form action="" onSubmit={handleSubmit} id='sign-up-form'>
        <Error error={error}/>
        <label htmlFor="email">Email</label>
        <input type="text" name="email" id="email" onChange={(e) => setEmail(e.target.value)} value={email} />
        <div className="email error"></div>
        <br />
        <label htmlFor="password">Mot de passe</label>
        <input type="text" name="password" id="password" onChange={(e) => setPassword(e.target.value)} value={password} autoComplete />
        <div className="password error"></div>
        <br />
        <input type="submit" value='Se connecter' />
    </form>
    </div>
  )
}
