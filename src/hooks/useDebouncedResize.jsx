import { useEffect } from 'react';

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

let useResizedDebounce = observant => {
  //As a solution to using a state for the burger class we automatically get rid of all states concerning the menu when resizing, causing scss conflicts
  //Might handle differently later

  useEffect(() => {
    const debouncedHandleResize = debounce(() => {
      observant('closed');
    }, 1000);

    window.addEventListener('resize', debouncedHandleResize);

    return _ => {
      window.removeEventListener('resize', debouncedHandleResize);
    };
  });
};

export default useResizedDebounce;
