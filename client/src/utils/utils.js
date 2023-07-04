import React from 'react';
import { useCookies } from 'react-cookie';

export function Disconnect () {
  const [cookiesUser, setCookieUser, removeCookieUser] = useCookies(['name']);
  setCookieUser("name", '', { path: '/' });

  //removeCookieUser('name');
//   window.location.reload(false);
}

export function Alert (message) {
  alert(message);
}
