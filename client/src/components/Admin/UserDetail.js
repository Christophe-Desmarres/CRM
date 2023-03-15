import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';


export default function UserDetail() {
    const { id } = useParams();
    const [userInfo, setUserInfo] = useState(null);

useEffect(() => {
    fetch(`https://crm-back.vercel.app/customers/details/${id}`, [{mode:'no-cors'}])
      .then((res) => res.json())
      .then((data) => {
        setUserInfo(data); 
        console.log(data);
      });
  }, []);

  return (
    <div>UserDetail de { userInfo }</div>
  )
}
