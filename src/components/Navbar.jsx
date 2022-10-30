import Logo from '../assets/Logo.svg';
import BurgerMenu from '../assets/BurgerMenu';
import { useEffect, useState } from 'react';
import useResizedDebounce from '../hooks/useDebouncedResize';

//Debouncing listeners for efficiency

function debounce(fn, ms) {
  let timer;
  return _ => {
    clearTimeout(timer);
    timer = setTimeout(_ => {
      timer = null;
      fn.apply(this, arguments);
    }, ms);
  };
}

/**
 * NavBar
 */

const Nav = () => {
  const [burgerClass, setBurgerClass] = useState('closed');

  //As a solution to using a state for the burger class we automatically get rid of all states concerning the menu when resizing, causing scss conflicts
  //Might handle this issue differently later

  useEffect(() => {
    const debouncedHandleResize = debounce(() => {
      setBurgerClass('closed');
    }, 1000);

    window.addEventListener('resize', debouncedHandleResize);

    return _ => {
      window.removeEventListener('resize', debouncedHandleResize);
    };
  });

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
