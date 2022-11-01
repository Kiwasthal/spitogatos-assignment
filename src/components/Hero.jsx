import { useState } from 'react';
import SlideShow from './SlideShow';
import banner_one from '../assets/Hero_Banner_One.png';
import banner_two from '../assets/Hero_Banner_Two.jpg';
import banner_three from '../assets/Hero_Banner_Three.jpg';

console.log(banner_one);

/**
 * Slider Array
 */

const slides = [
  {
    url: banner_one,
  },
  {
    url: banner_two,
  },
  {
    url: banner_three,
  },
];

const Hero = () => {
  /**
   * Used to dictate the appearing slider
   */
  const [currentIndex, setCurrentIndex] = useState(0);

  /**
   * Uncomment below useEffect code to enable slider auto-scroll
   */

  // useEffect(() => {
  //   let sliderTimer = setTimeout(() => {
  //     setCurrentIndex((currentIndex + 1) % slides.length);
  //   }, 5000);
  //   return () => clearTimeout(sliderTimer);
  // }, [currentIndex]);

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
      <div className="hero-slidenav" role="slider">
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
