import React, {useState} from 'react';
import styledFruitForm from 'styled-components';


// styled components
const Form = styledFruitForm.form`
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      flex-wrap: nowrap;
      align-items: center;
      margin: 0.5rem;

      @media (min-width: 425px) {
        flex-direction: row;
      }
      `;


const Input = styledFruitForm.input`
      width: 100%;
      font-size: 1.2rem;
      line-height: 1.5;
      text-align: left;
      color: palevioletred;
      list-style: none;
      display: inline-flex;
      justify-content: space-between;
      align-items: baseline;
      border: 1px solid palevioletred;
      border-radius: 5px;
      margin: 0.5rem;
      padding-left: 1rem;
  -webkit-transition: 0.5s;
  transition: 0.5s;
  outline: none;

      &:focus {
              border: 2px solid palevioletred;
              box-shadow: 0 0 5px palevioletred;
              color: palevioletred;
      }

      @media (min-width: 425px) {
        width: 60%;
      }

        `;

const Button = styledFruitForm.button`
      width: 100%;
      font-size: 1.2rem;
      line-height: 1.5;
      border: 1px solid palevioletred;
      border-radius: 5px;
      text-align: center;
      margin: 0.5rem;
      color: palevioletred;
      background-color: transparent;

      &:hover {
        font-weight: bold;
        background-color: palevioletred;
        color: white;
      }

      @media (min-width: 425px) {
        width: 25%;
      }

      `;

export default function FruitForm({handleAdd}){

// state
const [nouveauFruit, setNouveauFruit] = useState('');

// comportements

const handleSubmit = (event) => {
    event.preventDefault();
  
    const id = new Date().getTime();
    const name =  nouveauFruit;
    const fruitAAjouter = {id, name};
    handleAdd(fruitAAjouter);
    setNouveauFruit("");
  }
  

  const handleChange =(event)=>{
  setNouveauFruit(event.target.value);
  }
  
return (
    <Form action='submit' onSubmit={handleSubmit}>
  <Input 
  value={nouveauFruit} 
  onChange={handleChange}
  type="text" 
  placeholder="Ajouter un fruit" />
  <Button>Ajouter</Button>
</Form>
);

}