import React from "react";
import { Link } from "react-router-dom";
import { useCookies } from 'react-cookie';
import { GoPerson } from "react-icons/go";
import logo from '../../../logo.png';

export default function ConectNavbar() {

    const [cookiesUser, setCookieUser] = useCookies(['user']);

    return ( 
        <div>
        <Link to = {`/profil`} > 
         <Link to={`/profil/id`} > Mon profil</Link>
         <Link to={`/profil`} > Se déconnecter</Link>
        </Link>
        </div>
    )
}