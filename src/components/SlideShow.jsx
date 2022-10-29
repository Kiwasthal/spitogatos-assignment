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
    ></motion.div>
  );
};

export default SlideShow;
