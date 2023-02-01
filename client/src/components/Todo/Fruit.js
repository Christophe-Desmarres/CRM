import React from "react";
import styledFruit from 'styled-components';



// styled components

   const Button = styledFruit.button`
        margin: 0.5rem;
        border: none;
        color: palevioletred;
        background-color: transparent;
        `;
        
        const List = styledFruit.li`
        font-size: 1.2rem;
        text-align: center;
        color: palevioletred;
        list-style: none;
        display: inline-flex;
        justify-content: space-between;
        align-items: baseline;
        border: 1px solid palevioletred;
        border-radius: 5px;
        margin: 0.1rem;
        padding-left: 1rem;

        &:hover {
                background-color: palevioletred;
                color: white;

                ${Button} {
                        color: white;
                }
        }

        ${Button}:hover {
                scale: 2;
                font-weight: bold;
                color: red;
        }
                `;


export default function Fruit({fruitInfo, onClick}){
        

// state

// comportements


//affichage (render)

return   (
        <List>{fruitInfo.name} 
         <Button onClick={onClick}>X</Button>
         </List> 
         );

}
