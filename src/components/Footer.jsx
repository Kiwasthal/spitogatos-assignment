import Logo from '../assets/Logo.svg';

const Footer = () => {
  return (
    <footer className="footer" aria-label="Footer">
      <span className="footer-copywrite">© The standard Copywrite 2020</span>
      <span className="footer-cookiesprivacy">Cookies. | Privacy.</span>
      <img className="footer-logo" src={Logo} alt="" />
    </footer>
  );
};

export default Footer;
