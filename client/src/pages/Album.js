import React, { useState, useEffect } from 'react'
import styledAlbum from 'styled-components'
import LumysGalerie from '../components/LumysGalerie/LumysGalerie';


const Div = styledAlbum.nav`
  margin: 0.5rem;
  border: none;
  color: #333;

  .link {
    margin: 0.5rem;
    padding: 0.5rem;
    text-decoration: none;
    color: palevioletred;
  }

  .link:hover {
    background-color: palevioletred;
    color: white;
    border-radius: 5px;
    box-shadow: 2px 2px 10px black;
  }

  .galery {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    margin: 0.5rem;
    padding: 0.5rem;
    border: 1px solid #333;
    border-radius: 5px;
    box-shadow: 2px 2px 10px black;
  }
  `;


export default function Album() {
  document.title='Album | Christophe-Desmarres';

  const [galerie, setGalerie] = useState(null);
  const apiKey = process.env.REACT_APP_GALLERY_APIKEY;


  // tri par date plus récente à plus ancienne
  const sortFunction = (a,b)=>{  
    var dateA = new Date(a.date).getTime();
    var dateB = new Date(b.date).getTime();
    return dateA > dateB ? 1 : -1;  
}; 

  useEffect(() =>{
    
       fetch("https://app.lumys.photo/api/widget?apiKey=" + apiKey + "&widgetType=galleryList")
        .then((res) => {
          // recuperation des données de l'api à l'adresse res.url
          fetch(res.url)
          .then((res) => res.json())
          .then((data) => {
          // tri par date
          data.galleries.sort(sortFunction);
          setGalerie(data.galleries)
          });
          return res.url;
        })
        .catch((err) => {
          console.log(err);
      });

    }, []); // [] Runs only on the first render




  return (
    <Div id='gallery'>
    <h1 className='gallery__title'>Vos galeries</h1>
    <h3 className='gallery__explain'>Visionnez vos galeries privées chez vous en toute tranquillité ou partagez les avec vos proches</h3>

    <p className='gallery__reminder'>Pour rappel, ces photos sont destinées pour votre usage personnel et ne sont pas destinées à être diffusées.
      Il est de votre devoir de respecter le droit à l'image  de toutes les personnes de chaques galeries.</p>

    <div className='gallery__container'>
      {galerie && galerie.map((galerie) => {
        return (
          <div key={galerie._id} className='gallery__item'>
          <a className='gallery__link' href={'https://cd-mar.lumys.photo/' + galerie.url} target='_blank' rel='noreferrer'>
            <div className='gallery__card'>
            <div className='gallery__cover' style={{backgroundImage: 'url(https://cd-mar.lumys.photo/api/photos/coverPhoto/' + galerie._id + '?thumb=1)'}}>

            </div>
            <div className='gallery__content'>
              <p className='gallery__content--title'>{galerie.eventName}</p>
            </div>
            </div>
          </a>
          </div>
        );        
      })
      }
    </div>
    </Div>
  )
}
