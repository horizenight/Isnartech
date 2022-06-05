import React from 'react'
import './Slider.css'



import ai3 from '../../../assets/ai7.png'
import ai from '../../../assets/AiIllustration.png'
import ill from '../../../assets/Illustration7.png'
import ill2 from '../../../assets/Illustration19.png'
import ill3 from '../../../assets/Illustration20.png'

import fire2 from '../../../assets/Design_2.png'
const colors = [ai, ai3,ill,ill3,fire2,ill2];
const delay = 2500;

const Slider = () => {

    const [index, setIndex] = React.useState(0);
    const timeoutRef = React.useRef(null);
  
    function resetTimeout() {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    }

    React.useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(
          () =>
            setIndex((prevIndex) =>
              prevIndex === colors.length - 1 ? 0 : prevIndex + 1
            ),
          delay
        );
    
        return () => {
          resetTimeout();
        };
      }, [index]);
    
  
  return (
    <div className="slideshow">
      <div
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {colors.map((color,index) => (
          <div
            className="slide"
         
            key={index}
            
          >
              <img src={color} />
          </div>
        ))}
      </div>

      <div className="slideshowDots">
        {colors.map((_, idx) => (
          <div
            key={idx}
            className={`slideshowDot${index === idx ? " active" : ""}`}
            onClick={() => {
              setIndex(idx);
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default Slider