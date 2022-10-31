import { useAnimation, motion } from 'framer-motion';
import { useEffect } from 'react';

const SlideShow = ({ slides, currentIndex }) => {
  /**
   * Animations
   */

  const fadeVariants = {
    fadeOut: {
      opacity: 0,
    },
    fadeIn: {
      opacity: 1,
      backgroundImage: `url(${slides[currentIndex].url})`,
    },
  };

  //Added a simple fade animation in the slider transition

  const controls = useAnimation();
  useEffect(() => {
    controls.start('fadeOut');
    setTimeout(() => controls.start('fadeIn'), 400);
    return clearTimeout(() => controls.start('fadeIn'));
  }, [currentIndex]);

  return (
    <motion.div
      className="hero-image"
      variants={fadeVariants}
      initial="fadeIn"
      animate={controls}
      role="listbox"
      aria-label="Dark background images"
    ></motion.div>
  );
};

export default SlideShow;
