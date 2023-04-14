import React, {useState} from 'react';
import styled from 'styled-components';

const StyledLoader = styled.div`
        position: fixed;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        z-index: 999;
        background: #000;
        display: flex;
        justify-content: center;
        align-items: center;
    
    
    .lettre {
      color: #484848;    
      font-size: 4rem;
      letter-spacing: 15px;
      margin-bottom: 150px;
      animation:  flash 1.2s linear infinite;
    }

    @media screen and (max-width: 768px) {
      .lettre {
        font-size: 2rem;
        letter-spacing: 5px;
        margin-bottom: 50px;
      }
    }

    @keyframes flash {
      0% {
        color: #fff900;
        text-shadow: 0 0 7px #fff900;
      }
      90% {
        color: #484848;
        text-shadow: none;      }
      100% {
        color: #fff900;
        text-shadow: 0 0 7px #fff900;      }
    }

    .lettre:nth-child(1) {
      animation-delay: 0.1s;
    }
    .lettre:nth-child(2) {
      animation-delay: 0.2s;
    }
    .lettre:nth-child(3) {
      animation-delay: 0.3s;
    }
    .lettre:nth-child(4) {
      animation-delay: 0.4s;
    }
    .lettre:nth-child(5) {
      animation-delay: 0.5s;
    }
    .lettre:nth-child(6) {
      animation-delay: 0.6s;
    }
    .lettre:nth-child(7) {
      animation-delay: 0.7s;
    }
    .lettre:nth-child(8) {
      animation-delay: 0.8s;
    }
    .lettre:nth-child(9) {
      animation-delay: 0.9s;
    }
    .lettre:nth-child(10) {
      animation-delay: 1s;
    }
`

export default function Loader(props) {

  return (

    <StyledLoader className={props.load ? "loader loading-out" : "loader"}>
    <span className="lettre">C</span>
    <span className="lettre">H</span>
    <span className="lettre">A</span>
    <span className="lettre">R</span>
    <span className="lettre">G</span>
    <span className="lettre">E</span>
    <span className="lettre">M</span>
    <span className="lettre">E</span>
    <span className="lettre">N</span>
    <span className="lettre">T</span>
  </StyledLoader>
    )
}
