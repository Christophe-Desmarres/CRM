import React from "react";
import { Link } from "react-router-dom";
import { useCookies } from 'react-cookie';
import { GoPerson } from "react-icons/go";
import logo from '../../../logo.png';
import styledConnected from 'styled-components';
import { Disconnect, Alert } from '../../../utils/utils';


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

      &:focus {
              box-shadow: 0 0 5px #ff3372;
              color: #ff3372;
      }

      p {
        margin: 0.5rem;
        border-bottom: 1px solid #ff3372;
        float: right;
        text-align: center;
        font-size: 1rem;
      }

      a.link-dropdown {
        font-size: 1rem;
        text-decoration: none;
        width: 100%;
        text-align: center;
        margin: 0.5rem 0.2rem 0;
        }

      button {
        font-size: 1rem;
        text-decoration: none;
        width: auto;
        text-align: center;
        margin: 1rem 0.5rem 0;
        padding: 0.2rem;
        border: none;
        background-color: #33333310;
        color: #ff3372;
        cursor: pointer;
        }

        button:hover {
          color: #ff3372;
          border-bottom: 1px solid #ff3372;
        }

        `;



export default function ConectNavbar() {

    const [cookies, setCookies, removeCookies] = useCookies(['user']);

    // TODO : remove all cookies
    const disconnect = ()=>{
      removeCookies('name');
      removeCookies('userId');
      Alert('Vous êtes déconnecté');
      window.location.href = "/";
      //window.location.reload(false);
    }

    return ( 
        <Div>
          <p> Bonjour {cookies.name} </p>
          <Link to = {`/admin`} className="link-dropdown">admin</Link>
          <Link to={`/profil/${cookies.userId}`} className="link-dropdown">Mon profil</Link>
          <button onClick={ disconnect }>Se déconnecter</button>
        </Div>
    )
}