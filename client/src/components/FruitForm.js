import React, {useState} from 'react';

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
    <form action='submit' onSubmit={handleSubmit}>
  <input 
  value={nouveauFruit} 
  onChange={handleChange}
  type="text" 
  placeholder="Ajouter un fruit" />
  <button>Ajouter</button>
</form>
);

}