import { pushRotate as Menu } from 'react-burger-menu'
import NavBarDesktop from "./Pages/NavBar-Page";
import NavBaMobile from "./Pages/NavBar-Side";


const NavBar = () => {


   return (
    <div>
    <Menu right isOpen={ false } className="my--menu">
      <NavBaMobile />
    </Menu>

      <NavBarDesktop />

  </div>

  )
};

export default NavBar;