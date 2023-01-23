import React from "react";
import styled from 'styled-components';
import { TfiAgenda, TfiYoutube, TfiFacebook, TfiInstagram, TfiPencilAlt, TfiGallery, TfiTablet } from "react-icons/tfi";



const StyledFooter = styled.footer`
    background-color: #282c34;
    background-color: papayawhip;
    border-radius: 5px;
    padding: 1rem;
    margin: auto;
    color: white;
    width: 90%;
    position: fixed;
    bottom: 0;


div{
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: around;
    text-align: center;
    color: #333;
    text-decoration: none;
    margin: 0.5rem;

  a{
    color: #333;
    text-decoration: none;
    margin: 0.5rem;
  }
}
`;

const Footer = () =>{

return (
    <StyledFooter>
    <div>
    <a href="#"><TfiAgenda />Mentions légales</a>
    <a href="#"><TfiPencilAlt /> Contact</a>
    <a href="#"><TfiYoutube /> Youtube</a>
    <a href="#"><TfiFacebook /> Facebook</a>
    <a href="#"><TfiInstagram /> Instagram</a>
    <a href="https://cdesmarres.wixsite.com/christophe-desmarres/album"><TfiGallery />Galerie</a>
    <a href="https://cdesmarres.wixsite.com/christophe-desmarres/photobooth"><TfiTablet />Photobooth</a>
    </div>
    </StyledFooter>
);
}

export  default Footer;