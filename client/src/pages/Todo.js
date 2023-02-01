import {useState} from 'react';
import Fruit from '../components/Todo/Fruit';
import FruitForm from '../components/Todo/FruitForm';
import styledTodo from 'styled-components';

 // styled components
 const Wrapper = styledTodo.section({
        // 'padding': '1rem',
        // 'background': 'papayawhip',
        // 'border-radius': '5px',
        // 'margin': '0.5rem',
   });

   const Title = styledTodo.h1({
        'margin': '1rem',
        'font-size': '2rem',
        'text-align': 'center',
        'color': 'palevioletred',
  });

    const ListElements = styledTodo.ul({
        // 'margin': '0.1rem',
        // 'padding': '0.5rem',
        });



const Todo = () => {


  // dtate (état, données) et setstate (fonction qui permet de modifier l'état)

  // liste de fruits
  const [fruits, setFruits] = useState([
    {id: 1, name: 'fraise'},
    {id: 2, name: 'framboise'},
    {id: 3, name: 'cerise'},
  ]);
  
    // comportement de l'application
  const handleDelete = (id)=>{
  // 1 - copie de la liste
  const fruitsCopy = fruits.slice();
  // ou const fruitsCopy = [...fruits];
  
  // 2 - filtrage de la liste
  const fruitCopyUpdated = fruitsCopy.filter((fruit) => fruit.id !== id);
  
  // 3 - mise à jour de la liste
  setFruits(fruitCopyUpdated);
  
  }
  
  const handleAdd = (fruitAAjouter)=>{
  
    // 1 - copie du state
      const fruitsCopy = [...fruits];
  
    // 2 - modification de la copie
    fruitsCopy.push(fruitAAjouter);
  
    // 3 - mise à jour du state
    setFruits(fruitsCopy);  
  }
  
  const handleshow  = (fruits)=>{
  alert(`J'aime trop ce fruit ${fruits}`)
  }
  
    return ( 
        <Wrapper id='todo'>
        <Title>Liste</Title>
          <FruitForm handleAdd={handleAdd}/>
        <ListElements>{fruits.map((fruit) => (
          <Fruit fruitInfo={fruit} onClick={() => handleDelete(fruit.id)} key={fruit.id}/>
        ))}</ListElements>

        </Wrapper>
      );
  }
  

  export default Todo;