import React from "react";
import styledFruit from 'styled-components';



// styled components
  const List = styledFruit.li({
        'font-size': '1.5rem',
        'text-align': 'center',
        'color': 'palevioletred',
        'list-style': 'none',
        'display': 'inline-flex',
        'justify-content': 'space-between',
        'align-items': 'baseline',
        'border': '1px solid palevioletred',
        'border-radius': '5px',
        'margin': '0.1rem',
        'padding-left': '1rem',
        });

   const Button = styledFruit.button({
        'margin': '0.5rem',
        'border': 'none',
        'color': 'palevioletred',
        'background': 'papayawhip',
        });

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
