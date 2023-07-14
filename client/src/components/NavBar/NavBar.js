import NavBarDesktop from "./Pages/NavBar-Page";
import NavBarMobile from "./Pages/NavBar-Side";
import React from 'react';


const NavBar = ({isMobile}) => {

 console.log("mobile view : " + isMobile);
 // TODO : add a state to change the view of the navbar
 const style = { display: 'block' }; //isMobile ? { display: 'block' } : { display: 'block' };

   return (
    <div className="navbar">
      <NavBarMobile style={style} />
      <NavBarDesktop  style={style} />
  </div>

  )
};

export default NavBar;