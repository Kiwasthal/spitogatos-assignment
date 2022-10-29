import Logo from '../assets/Logo.svg';

/**
 * NavBar
 */

const Nav = () => {
  return (
    <nav className="nav">
      <img src={Logo} alt="S.und Co Lime Logo" className="nav-logo" />
      <ul className="nav-menu">
        <li className="nav-menu-link active">Main One</li>
        <li className="nav-menu-link">Page Two</li>
        <li className="nav-menu-link">Page Three</li>
        <li className="nav-menu-link">About Us</li>
        <li className="nav-menu-link">Our Work</li>
        <li className="nav-menu-link">Contact</li>
      </ul>
      <h3 className="nav-localization">
        <span>EN</span> | <span>GR</span>
      </h3>
    </nav>
  );
};

export default Nav;
