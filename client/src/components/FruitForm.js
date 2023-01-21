import React, {useState} from 'react';
import styledFruitForm from 'styled-components';


// styled components
const Form = styledFruitForm.form`
      width: 100%;
      display: flex;
      justify-content: space-evenly;
      flex-wrap: nowrap;
      align-items: center;
      `;


const Input = styledFruitForm.input`
      width: 60%;
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
      margin: 0.1rem;
      padding-left: 1rem;
  -webkit-transition: 0.5s;
  transition: 0.5s;
  outline: none;

      &:focus {
              border: 2px solid palevioletred;
              box-shadow: 0 0 5px palevioletred;
              color: palevioletred;
      }

        `;

const Button = styledFruitForm.button`
      width: 25%;
      font-size: 1.2rem;
      line-height: 1.5;
      border: 1px solid palevioletred;
      border-radius: 5px;
      text-align: center;
      margin: 0.1rem;
      color: palevioletred;
      background-color: transparent;

      &:hover {
        font-weight: bold;
        background-color: palevioletred;
        color: white;
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