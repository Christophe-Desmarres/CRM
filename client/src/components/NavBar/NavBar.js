// import { pushRotate as Menu } from 'react-burger-menu'
import NavBarDesktop from "./Pages/NavBar-Page";
import NavBarMobile from "./Pages/NavBar-Side";
import React, { useState } from 'react';


const NavBar = ({isMobile}) => {

console.log("mobile view : " + isMobile);
 const style = isMobile ? { display: 'block' } : { display: 'block' };


   return (
    <div  className="navbar">
    {/* <Menu right isOpen={ false } className="my--menu">
    </Menu> */}
      <NavBarMobile style={style} />
      <NavBarDesktop  style={style} />
  </div>

  )
};

export default NavBar;