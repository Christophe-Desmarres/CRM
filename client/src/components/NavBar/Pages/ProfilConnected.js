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

      &:focus {
              border: 2px solid #ff3372;
              box-shadow: 0 0 5px #ff3372;
              color: #ff3372;
      }

      span {
        position: absolute;
        top: 0;
        right: 0.25rem;
        margin: 0.25rem;
        font-weight: bold;
      }

      p {
        margin: 0.25rem;
        border-bottom: 1px solid #ff3372;
        float: right;
        text-align: center;
      }

      a {
        width: 100%;
        text-align: center;
        color: #ff3372;
      }
        `;



export default function ConectNavbar() {

    const [cookies, setCookies, removeCookies] = useCookies(['name']);

    // TODO : remove all cookies
    const disconnect = ()=>{
      removeCookies('name');
      Alert('Vous êtes déconnecté');
      window.location.reload(false);
    }

    return ( 
        <Div>
          <span>X</span>
          <p> Bonjour {cookies['name']} </p>
          <Link to = {`/profil`} > vide</Link>
          <Link to={`/profil/id`} > Mon profil</Link>
          <button onClick={ disconnect }>Se déconnecter</button>
        </Div>
    )
}