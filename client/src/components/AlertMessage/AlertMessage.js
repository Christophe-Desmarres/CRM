import React, { useState, useEffect } from 'react'
import styledMessage from 'styled-components'

const Message = styledMessage.div`
    position: fixed;
    display: block;
    top: 7rem;
    right: 0;
    left: 0;
    z-index: 100;
    width: 80%;
    margin: 0 auto;
    text-align: center;

    div {
        padding: 0.7rem;
        margin: 0.2rem;
        width: 80%;
        float: right;
        border-radius: 0.5rem;
        background-color: #333333f0;
        color: #fff;
        text-shadow: 0 0 2px #333;
        transition: all 0.2s ease-in-out;
        animation: slideIn 3.5s forwards;

        @keyframes slideIn {
            0% {
                transform: translateY(-100%);
            }
            25% {
                transform: translateY(0);
            }
            75% {
                transform: translateY(0);
            }
            100% {
                transform: translateY(-200%);
            }
        }

        h2 {
            font-size: 3rem;
            border-bottom: 1px solid #fff;
            margin-bottom: 1rem;
        }

        p {
            font-size: 1.5rem;
            margin-bottom: 1.5rem;
        }


        &.success{
            border-top: 6px solid green;
        }

        &.error{
            border-left: 6px solid red;

            h2 {
                text-shadow: 2px 2px 5px red;
            }
        }
    }

`
//     display: block;
//     position: fixed;
//     bottom: 70px;
//     right: 0;
//     left: 0;
//     z-index: 100;
//     width: 60%;

    
//   p {
//     padding: 0.7em;
//     margin: 0.2em;
//     width: 80%;
//     float: right;
//     font-size: 1.2rem;
//     border-radius: 0.5rem;
//   }
    
//     .success {
//     background-color: #7fca87;
//     border-left: 6px solid #008554;
//     color: #333;
//   }

//   .error {
//     color: #fff;
//     background-color: #fc3535;
//     border-left: 6px solid #b60c00;
//     text-shadow: 1px 1px 2px #333;
//   }



export default function AlertMessage({ type, messages }) {

    // const [timeOutAlert, setTimeOutAlert] = useState(1500);
    // const [showAlert, setShowAlert] = useState(true);

    // if no message, no colors are selected
    // const types = message !== [''] ? {
    //     success: 'alert-info success',
    //     error: 'alert-info error',
    // } : ''

    //const typeClass = types[type] || 'alert-info'

    // setTimeout(() => {
    //     setShowAlert(false);
    // }, timeOutAlert);

  return (
    <Message>
        <div className={type}>
            <h2>{type==='error'?'Erreur':'Succès'}</h2>
            {
                messages.map((message, index) => {
                    return (
                        <p key={index}> {message} </p>
                    );
                })
            }
         </div>
     </Message>
    )
}
