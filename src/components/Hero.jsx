import { useState } from 'react';
import SlideShow from './SlideShow';

/**
 * Slider Array
 */

const slides = [
  {
    url: '/src/assets/Hero_Banner_One.png',
  },
  {
    url: '/src/assets/Hero_Banner_Two.jpg',
  },
  {
    url: '/src/assets/Hero_Banner_Three.jpg',
  },
];

const Hero = () => {
  /**
   * Used to dictate the appearing slider
   */
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <header className="hero">
      <SlideShow slides={slides} currentIndex={currentIndex} />
      {/* //--- Text Modal --- // */}
      <div className="hero-modal">
        <h1 className="hero-modal-title">S.und Co</h1>
        <p className="hero-modal-content">
          To take a trivial example, which of us ever undertakes laborious
          physical exercise, except to obtain some advantage from it?
        </p>
      </div>
      {/* // --- Slider Buttons --- // */}
      <div className="hero-slidenav">
        {slides.map((_, index) => (
          <div
            key={index}
            /** Only if the index of the button is the same as the displaying slide assign active class */
            className={`${
              currentIndex === index
                ? 'hero-slidenav-item active'
                : 'hero-slidenav-item '
            } `}
            onClick={() => setCurrentIndex(index)}
          ></div>
        ))}
      </div>
    </header>
  );
};

export default Hero;
