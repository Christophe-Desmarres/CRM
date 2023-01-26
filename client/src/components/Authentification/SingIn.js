import React from 'react'
import { useState } from 'react';
import axios from 'axios';

export default function SingIn() {
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');

const handleSubmit = async (e) => {
    e.preventDefault();
    const emailError = document.querySelector('.email.error');
    const passwordError = document.querySelector('.password.error');


    try {
        const res = await axios.post(`${process.env.REACT_APP_API_URL}api/user/login`, {
            email,
            password
        });
        console.log(res);
        if (res.data.errors) {
            emailError.innerHTML = res.data.errors.email;
            passwordError.innerHTML = res.data.errors.password;
        } else {
            window.location = '/';
        }
    } catch (err) {
        console.log(err);
    }


    // axios({
    //         method: 'POST',
    //         url:`${process.env.REACT_APP_API_URL}api/user/login`,
    //         withCredentials: true,
    //         data: {
    //             email,
    //             password
    //         }
    //     }).then((res) => {
    //         if (res.data.errors) {
    //             emailError.innerHTML = res.data.errors.email;
    //             passwordError.innerHTML = res.data.errors.password;
    //         } else {
    //             window.location = '/';
    //         }
    //     }).catch((err) => {
    //         console.log(err);
    //     })
}


  return (
    <div>
    <form action="" onSubmit={handleSubmit} id='sign-up-form'>
        <label htmlFor="email">Email</label>
        <input type="text" name="email" id="email" onChange={(e) => setEmail(e.target.value)} value={email} />
        <div className="email error"></div>
        <br />
        <label htmlFor="password">Mot de passe</label>
        <input type="password" name="password" id="password" onChange={(e) => setPassword(e.target.value)} value={password} />
        <div className="password error"></div>
        <br />
        <input type="submit" value='Se connecter' />
    </form>
    </div>
  )
}
