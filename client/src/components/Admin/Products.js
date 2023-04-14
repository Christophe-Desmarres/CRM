import React, {useState} from 'react'

export default function Products() {

  document.title='Produits';
  // liste de prestation
  const [prestation, setPrestation] = useState([
    {id: 1, name: 'Séance engagement', price: 165, tags:['mariage']},
    {id: 2, name: 'Préparatifs', price: 220, tags:['mariage']},
    {id: 3, name: 'Cérémonie', price: 275, tags:['mariage']},
    {id: 4, name: 'Photo groupe', price: 82, tags:['mariage']},
    {id: 5, name: 'Photo couple', price: 165, tags:['mariage']},
    {id: 6, name: 'Coktail', price: 220, tags:['mariage']},
    {id: 7, name: 'Repas / soirée', price: 275, tags:['mariage']},
    {id: 8, name: 'Photobooth connecté', price: 250, tags:['mariage', 'photobooth', 'evénementiel']},
    {id: 9, name: 'Photobooth 200 tirages', price: 300, tags:['mariage', 'photobooth', 'evénementiel']},
    {id: 10, name: 'Photobooth 200 tirages', price: 335, tags:['mariage', 'photobooth', 'evénementiel']},
  ]);

  const [search, setSearch] = useState('');
  const [tags, setTags] = useState(['mariage', 'photobooth', 'Evénementiel', 'autre...']);
  const [checked, setChecked] = useState([]);
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  
  const onSubmit = (e) => {
    e.preventDefault();
    const newPrestation = {
      id: prestation.length + 1,
      name: name,
      price: price,
      tags: checked
    }
    setPrestation([...prestation, newPrestation]);
    setName('');
    setPrice('');
    setChecked([]);
  }

  const checkboxSetValue = (e) => {
    console.log(e.target.value);
    console.log(checked);
    if (e.target.checked) {
      setChecked([...checked, e.target.value]);
    } else {
      setChecked(checked.filter((tag) => tag !== e.target.value));
    }
  }



  return (
    <div id='products'>
    <h2>Products</h2>
    

    <form onSubmit={onSubmit} className='product__form'>
    
    <div onChange={checkboxSetValue} className='product__form--tags'>
      {tags.map((tag, index) => (
            <label key={index} className={checked.includes(tag) ? 'checked' : ""}>
              <input type="checkbox" id={tag} name="type" value={tag} />
              {tag}
              <br />
              </label>
              ))        
      }
    </div>
    <br />
      <div className='product__form--info'>
        <input type="text" placeholder="name" onChange={(e)=>setName(e.target.value)} value={name}/>
        <input type="text" placeholder="price" onChange={(e)=>setPrice(e.target.value)} value={price}/>
        <button type='submit' className='btn__submitform'>Ajouter</button>
      </div>
    </form>

    <input type="search" placeholder="search" onChange={(e)=>setSearch(e.target.value)} value={search}/>

    <table>
      <thead>
        <tr>
          <th className='product-name'>name</th>
          <th className='product-price'>price</th>
        </tr>
      </thead>
      <tbody>
        {
          prestation.filter((produit) => {
           return produit.name.toLowerCase().includes(search.toLowerCase())
          }
          )
        .map((produit) => (
          <tr key={produit.id} id={produit.name} className='product-info'>
            <td className='product-name'>{produit.name}</td>
            <td className='product-price'>{produit.price}€</td>
          </tr>
          ))
          }
      </tbody>
    </table>
  </div>
  )
}
