import React from 'react'
import { useState } from 'react';
import Singin from './SingIn';
import SingUp from './SingUp';


export default function Auth(props) {


const [signUpModal, setSignUpModal] = useState(props.signup);
const [signInModal, setSignInModal] = useState(props.signin);

const handleModal = (e) => {
  if (e.target.id === 'register') {
    setSignUpModal(true);
    setSignInModal(false);
  } else {
    setSignUpModal(false);
    setSignInModal(true);
  }
}


  return (
    <div className='connection-form'>
      <div className="form-container">
        <ul>
          <li id='register' className={signUpModal ? 'active-btn' : null} onClick={handleModal}>S'inscrire</li>
          <li id='login' className={signInModal ? 'active-btn' : null} onClick={handleModal}>Se connnecter</li>
        </ul>
        {signUpModal && <SingUp />}
        {signInModal && <Singin />}
      </div>
    
    </div>
  )
}
