// manage view of the authentification form sigunp or signin
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
          <button id='register' className={signUpModal ? 'active-btn' : null} onClick={handleModal}>S'inscrire</button>
          <button id='login' className={signInModal ? 'active-btn' : null} onClick={handleModal}>Se connnecter</button>
        {signUpModal && <SingUp />}
        {signInModal && <Singin />}
      </div>
    
    </div>
  )
}
