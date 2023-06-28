import React from "react";
import { Link } from "react-router-dom";
import { useCookies } from 'react-cookie';
import { GoPerson } from "react-icons/go";
import logo from '../../../logo.png';

export default function DisconectNavbar() {
    
    return (
        <div>
            <Link to={`/profil`}>Se cconnecter</Link>
        </div>
    )
      }