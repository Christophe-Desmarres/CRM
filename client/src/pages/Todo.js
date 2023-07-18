// component to make a todo list with fruits
import {useState} from 'react';
import Fruit from '../components/Todo/Fruit';
import FruitForm from '../components/Todo/FruitForm';
import styledTodo from 'styled-components';
import AlertMessage from '../components/AlertMessage/AlertMessage';

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
        'color': '#ff3372',
  });

    const ListElements = styledTodo.ul({
        // 'margin': '0.1rem',
        // 'padding': '0.5rem',
        });



const Todo = () => {
  document.title='LE Todo';

  const [testError, setTestError] = useState(false);
  const [testSuccess, setTestSuccess] = useState(false);

  // liste de fruits
  const [fruits, setFruits] = useState([
    {id: 1, name: 'fraise'},
    {id: 2, name: 'framboise'},
    {id: 3, name: 'cerise'},
  ]);
  
  // to delete a fruit
  const handleDelete = (id)=>{
    // 1 - copie de la liste
    const fruitsCopy = fruits.slice();
    // ou const fruitsCopy = [...fruits];
    
    // 2 - filtrage de la liste
    const fruitCopyUpdated = fruitsCopy.filter((fruit) => fruit.id !== id);
    
    // 3 - mise à jour de la liste
    setFruits(fruitCopyUpdated);
  }
    
  // to add a fruit
  const handleAdd = (fruitAAjouter)=>{
  
    // 1 - copie du state
      const fruitsCopy = [...fruits];
  
    // 2 - modification de la copie
    fruitsCopy.push(fruitAAjouter);
  
    // 3 - mise à jour du state
    setFruits(fruitsCopy);  
  }

  const actionTestSuccess = () => {
    console.log('test');
    setTestSuccess(true);
    setTimeout(() => {
      setTestSuccess(false);
    }, 3000);
    }
    const actionTestError = () => {
      console.log('error start');
      setTestError(true);
      setTimeout(() => {
        console.log('error fin');
        setTestError(false);
      }, 4000);
      }
  
  // exemple pour faire une autre action lors du clic du bouton du composant enfant
  // const handleshow  = (fruits)=>{
  // alert(`J'aime trop ce fruit ${fruits}`)
  // }
  
    return ( 
        <Wrapper id='todo'>
        <button onClick={actionTestSuccess}>success</button>
        <button onClick={actionTestError}>error</button>
        { 
          testSuccess && <AlertMessage type='success' message={["Le message a bien été envoyer, good Job, veuillez verifier votre boite mail svp."]} />
        }
        {
          testError && <AlertMessage type='error' message={["Le message n'est pas passé correctement, veuillez reessayer plus tard svp..."]} />
        }
       
        <Title>Liste</Title>
          <FruitForm handleAdd={handleAdd}/>
        <ListElements>{fruits.map((fruit) => (
          <Fruit fruitInfo={fruit} onClickHandle={() => handleDelete(fruit.id)} key={fruit.id}/>
        ))}</ListElements>

        </Wrapper>
      );
  }
  

  export default Todo;