import React, { useState } from 'react';
import './index.css';

const Menu = () => {
   const [isActive, setActive] = useState(false);
   const handleActive = () => {
      setActive(!isActive);
   };
   return (
      <div
         className={isActive ? 'menu-toggle-btn open' : 'menu-toggle-btn'}
         onClick={handleActive}
         style={{ position: 'absolute' }}
      >
         <span></span>
         <span></span>
         <span></span>
      </div>
   );
};
export default Menu;
