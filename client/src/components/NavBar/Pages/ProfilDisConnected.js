import React from "react";
import { Link } from "react-router-dom";
import AuthPage from "../../Authentification/Auth";
import { useCookies } from 'react-cookie';
import { GoPerson } from "react-icons/go";
import logo from '../../../logo.png';

import styledConnected from 'styled-components';

const Div = styledConnected.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    font-size: 0.75rem;

      a {
        width: 100%;
        border-bottom: 1px solid #ff3372;
        text-align: center;
        margin: 0.25rem;
        color: #ff3372;
      }
        `;



export default function DisconectNavbar() {
    
    return (
      <Div>
            <Link to={`/signin`}>se connecter</Link>
            <Link to={`/signup`}>Créer un compte</Link>
        </Div>
    )
      }