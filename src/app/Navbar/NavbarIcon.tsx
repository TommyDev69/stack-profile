import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import NavbarToggle from './NavbarToggle';

const NavbarIcon = () => {
  const [isOpenMenu, setOpenMenu] = useState(false);

  const setMenuDropdown = () => {
    setOpenMenu(prevState => !prevState);
  };

  return (
    <div className="w-sx24 md:hidden block ">
      <FontAwesomeIcon 
        icon={isOpenMenu ? faTimes : faBars} 
        className="text-green-400 w-[34%] h-[90px]" 
        onClick={setMenuDropdown}
      />
      
      {/* Conditionally render NavbarToggle based on isOpenMenu */}
      <NavbarToggle isOpenMenu={isOpenMenu} />
    </div>
  );
};

export default NavbarIcon;
