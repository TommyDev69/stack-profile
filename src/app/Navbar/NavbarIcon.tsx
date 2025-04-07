import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
// import ContNetwork from './ContNetwork';

const NavbarIcon = () => {
  const [isOpenMenu, setOpenMenu] = useState(false);

  const setMenuDropdown = () => {
    setOpenMenu(prevState => !prevState); // Toggle the menu state
  };

  return (
    <div className="md:hidden block relative">
      <FontAwesomeIcon 
        icon={isOpenMenu ? faTimes : faBars} 
        className="text-green-400 w-10 h-10 cursor-pointer" 
        onClick={setMenuDropdown} // Toggle menu on click
      />
      
      {/* Conditionally render the ContNetwork component when isOpenMenu is true */}
      {isOpenMenu && (
        <div className="flex-wrap basis-full flex blowck absolute top-12 left-0 right-0 bg-gray-800 p-6 rounded-lg z-50">
          thank {/* Display ContNetwork when the menu is open */}
        </div>
      )}
    </div>
  );
};

export default NavbarIcon;
