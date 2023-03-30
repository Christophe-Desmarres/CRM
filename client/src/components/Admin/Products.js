import React, {useState} from 'react'

export default function Products() {

  document.title='LE Todo';
  // liste de prestation
  const [prestation, setPrestation] = useState([
    {id: 1, name: 'Cérémonie', price: 100},
    {id: 2, name: 'Photo couple', price: 200},
    {id: 3, name: 'Photo groupe', price: 300},
    {id: 4, name: 'Préparatifs', price: 300},
    {id: 5, name: 'Coktail', price: 250},
    {id: 6, name: 'Photobooth connecté', price: 250},
    {id: 7, name: 'Photobooth 200 tirages', price: 300},
    {id: 8, name: 'Photobooth 200 tirages', price: 335},

  ]);


  return (
    <div>
    <h2>Products</h2>
    
    <input type="text" placeholder="search" />
    <br />
    <input type="text" placeholder="name" />
    <input type="text" placeholder="price" />
    <button>add</button>

    <ul>
    {prestation.map((produit) => (
          <li key={prestation.id}>{produit.name} => {produit.price}€</li>
        ))}
    </ul>
    
    
    
    
    </div>
  )
}
