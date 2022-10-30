import Logo from '../assets/Logo.svg';
import BurgerMenu from '../assets/BurgerMenu';
import { useState } from 'react';

/**
 * NavBar
 */

const Nav = () => {
  const [burgerClass, setBurgerClass] = useState('closed');

  const handleBurgerClick = () =>
    burgerClass === 'open' ? setBurgerClass('closed') : setBurgerClass('open');

  return (
    <header>
      <nav className={`nav ${burgerClass}`} role="navigation" aria-label="Main">
        <img src={Logo} alt="S.und Co Lime Logo" className="nav-logo" />
        <ul className="nav-menu" aria-label="menubar">
          <li className="nav-menu-link active" aria-label="menuitem">
            Main One
          </li>
          <li className="nav-menu-link" aria-label="menuitem">
            Page Two
          </li>
          <li className="nav-menu-link" aria-label="menuitem">
            Page Three
          </li>
          <li className="nav-menu-link" aria-label="menuitem">
            About Us
          </li>
          <li className="nav-menu-link" aria-label="menuitem">
            Our Work
          </li>
          <li className="nav-menu-link" aria-label="menuitem">
            Contact
          </li>
        </ul>
        <h1>Menu</h1>
        <BurgerMenu click={handleBurgerClick} />
        <h3 className="nav-localization">
          <span>EN</span> | <span>GR</span>
        </h3>
      </nav>
    </header>
  );
};

export default Nav;
