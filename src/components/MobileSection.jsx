import { AnimatePresence, motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faInstagram,
  faTwitter,
  faFacebookF,
} from '@fortawesome/free-brands-svg-icons';
import { faGlobeAmericas } from '@fortawesome/free-solid-svg-icons';

const mobileVariants = {
  initial: {
    y: 600,
    transition: {
      duration: 1,
    },

    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
};

/**
 * Component used for the menu popup in smaller screen
 */

const MobileSection = ({ condition }) => {
  //Controling the state of the animation based on the burger state
  const controls = useAnimation();
  useEffect(() => {
    condition === 'open'
      ? controls.start('visible')
      : controls.start('initial');
  }, [condition]);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        className="mobile"
        variants={mobileVariants}
        initial="initial"
        animate={controls}
        exit="initial"
      >
        <ul className="mobile-nav">
          <li className="mobile-nav-item">Main Page</li>
          <li className="mobile-nav-item">Page Two</li>
          <li className="mobile-nav-item">Page Three</li>
          <li className="mobile-nav-item">About Us</li>
          <li className="mobile-nav-item">Our Work</li>
          <li className="mobile-nav-item">Contact</li>
        </ul>
        <h3 className="nav-localization">
          <span>EN</span> | <span> GR</span>
        </h3>
        <div className="mobile-information-container">
          <div className="social">
            <FontAwesomeIcon icon={faInstagram} className="social-icon" />
            <FontAwesomeIcon icon={faTwitter} className="social-icon" />
            <FontAwesomeIcon icon={faFacebookF} className="social-icon" />
            <FontAwesomeIcon icon={faGlobeAmericas} className="social-icon" />
          </div>
          <h3 className="nav-localization">
            <span>Cookies.</span> | <span>Privacy.</span>
          </h3>
          <div className="information-wrapper">
            <p>S.und@themail.com</p>
            <p>+30 210 1234 567</p>
            <p>© The standard Copywrite 2020</p>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default MobileSection;
