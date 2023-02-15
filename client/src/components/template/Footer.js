import React from "react";
import styled from 'styled-components';
import { TfiAgenda, TfiYoutube, TfiFacebook, TfiInstagram, TfiPencilAlt, TfiGallery, TfiTablet } from "react-icons/tfi";



const StyledFooter = styled.footer`
    background-color: papayawhip;
    border-radius: 5px;
    padding: 1rem;
    margin: auto;
    color: white;
    width: 100%;




div{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-around;
    text-align: center;
    color: #333;
    text-decoration: none;
    margin: 0.5rem;

  a{
    color: #333;
    text-decoration: none;
    margin: 0.5rem;

    div{
      display: none;
    }

  }

  }

  @media all and (min-width: 425px) {
        div {
          flex-direction: row;
          flex-wrap: wrap;


          a{

            div{
              display: block;
            }
          }
        }
}

  @media all and (min-width: 725px) {
        div {
          flex-direction: row;
          flex-wrap: nowrap;

          a{

            div{
              display: block;
            }
          }
        }
}

`;

const Footer = () =>{

return (
    <StyledFooter>
    <div>
    <a href="/mentions-legales" title="Mentions légales"><TfiAgenda /> <div>Mentions légales</div></a>
    <a href="/contact" title="contact"><TfiPencilAlt /> <div>Contact</div></a>
    <a href="https://www.youtube.com/@cd-mar/" title="youtube"><TfiYoutube /> <div>Youtube</div></a>
    <a href="https://www.facebook.com/cdmarphoto" title="Facebook"><TfiFacebook /> <div>Facebook</div></a>
    <a href="https://www.instagram.com/cd_mar/" title="Instagram"><TfiInstagram /> <div>Instagram</div></a>
    <a href="https://cdesmarres.wixsite.com/christophe-desmarres/album" title="Galerie"><TfiGallery /><div>Galerie</div></a>
    <a href="https://cdesmarres.wixsite.com/christophe-desmarres/photobooth" title="Photobooth"><TfiTablet /><div>Photobooth</div></a>
    </div>
    </StyledFooter>
);
}

export  default Footer;