// import { pushRotate as Menu } from 'react-burger-menu'
import NavBarDesktop from "./Pages/NavBar-Page";
import NavBarMobile from "./Pages/NavBar-Side";
import React, { useState } from 'react';


const NavBar = ({isMobile}) => {

console.log(isMobile);
 const style = isMobile ? { display: 'none' } : { display: 'block' };


   return (
    <div>
    {/* <Menu right isOpen={ false } className="my--menu">
    </Menu> */}
      <NavBarMobile style={style} />
      <NavBarDesktop  style={style} />

  </div>

  )
};

export default NavBar;