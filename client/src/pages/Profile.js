import React from 'react'
import { useParams, useLocation } from 'react-router-dom'
import styled from 'styled-components';

const Div = styled.h1`
  color: White;

  `;

export default function Profile() {

  const { id } = useParams();
  const location = useLocation();
  console.log(id, location);

  return (
    <Div>Bonjour { id }</Div>
  )
}
