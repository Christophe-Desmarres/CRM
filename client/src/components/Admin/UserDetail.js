import React from 'react'
import { useParams } from 'react-router-dom';

export default function UserDetail() {
    const {id} = useParams(id);



  return (
    <div>UserDetail {id}</div>
  )
}
