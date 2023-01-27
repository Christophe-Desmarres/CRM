import React from 'react'
import styledErrors from 'styled-components';

const ErrorStyle = styledErrors.div`
  color: red;
  font-size: 0.8rem;
  margin: 0.5rem 0;
  text-align: center;
`;


export default function Error(props) {


  return (
    <ErrorStyle>{props.error}</ErrorStyle>
  )
}
