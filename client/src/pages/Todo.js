import {useState} from 'react';
import Fruit from '../components/Fruit';
import FruitForm from '../components/FruitForm';

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
  
    
    // affichage de l'application (render)
        // <h1>Liste de fruits</h1>
        //   <FruitForm handleAdd={handleAdd}/>
        // <ul>{fruits.map((fruit) => (
        //   <Fruit fruitInfo={fruit} onClick={() => handleshow(fruit.name)} key={fruit.id} handleDelete={handleDelete}/>
        // ))}</ul>
  
    return ( 
        <div>
        <h1>Liste de fruits</h1>
          <FruitForm handleAdd={handleAdd}/>
        <ul>{fruits.map((fruit) => (
          <Fruit fruitInfo={fruit} onClick={() => handleDelete(fruit.id)} key={fruit.id}/>
        ))}</ul>

        </div>
      );
  }
  

  export default Todo;