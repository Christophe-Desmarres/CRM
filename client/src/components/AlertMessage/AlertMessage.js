import React from 'react'
import styledMessage from 'styled-components'

const Message = styledMessage.div`
    display: block;
    position: fixed;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 100;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    &.success {
        display: block;
        background-color: #4caf50;
        color: #fff;
    }

    &.error {
        display: block;
        background-color: #f44336;
        color: #fff;
    }
`



export default function AlertMessage({ type, message }) {

    // if no message, no colors are selected
    const types = message !== [''] ? {
        success: 'alert-info success',
        error: 'alert-info error',
    } : ''

    const typeClass = types[type] || 'alert-info'

    // hide alert message after 2 seconds
    const alertElmt = document.querySelector('.alert-info');
    console.log(alertElmt)
    
    if (alertElmt) {
        console.log('yes');
        setTimeout(() => {
            alertElmt.style.display = 'none';
            //alertElmt.style.backgroundColor = 'black';
        }, 10000);
    }



  return (
    <Message className={typeClass}>
        {message.map((msg, index) => (
            <p key={index}>{msg}</p>
        ))}
    </Message>
  )
}
