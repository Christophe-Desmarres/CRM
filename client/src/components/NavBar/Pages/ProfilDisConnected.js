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
    position: relative;
    padding: 0.2rem;
    right: 5px;
    margin-top: 0.5rem;
    border-right: 4px solid #333;
    background-color: #33333310;
    
    a.link-dropdown {
      font-size: 1rem;
      text-decoration: none;
      width: 100%;
      text-align: center;
      margin: 0.5rem 0.2rem 0;
      }
        `;



export default function DisconectNavbar() {
    
    return (
      <Div>
            <Link to={`/signin`} className="link-dropdown">Se connecter</Link>
            <Link to={`/signup`} className="link-dropdown">Créer un compte</Link>
        </Div>
    )
      }