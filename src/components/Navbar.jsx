import Logo from '../assets/Logo.svg';

/**
 * NavBar
 */

const Nav = () => {
  return (
    <nav className="nav">
      <img src={Logo} alt="S.und Co Lime Logo" className="nav-logo" />
      <ul className="menu-nav">
        <li className="menu-nav-link active">Main One</li>
        <li className="menu-nav-link">Page Two</li>
        <li className="menu-nav-link">Page Three</li>
        <li className="menu-nav-link">About Us</li>
        <li className="menu-nav-link">Our Work</li>
        <li className="menu-nav-link">Contact</li>
      </ul>
    </nav>
  );
};

export default Nav;
