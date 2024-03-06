import React, { useState, useRef } from 'react';
import VisibilitySensor from 'react-visibility-sensor';
import group1 from '../images/photo1709040661.jpeg';
import group2 from '../images/IMG_0068.JPG';
import img3 from '../images/IMG_3778.JPG'
import img4 from '../images/IMG_3330.JPG'



const Scroll = () => {

  const [currentImage, setCurrentImage] = useState(0);
  const imagesRef = useRef([]);
  const images = [group1, group2, group1, group2]; // Your images array

  const handleSquareClick = (index) => {
    setCurrentImage(index);
    if (imagesRef.current[index]) {
      imagesRef.current[index].scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  };

  return (
    <div>
      <div className="flex justify-between overflow-x-auto scrollbar-hide bg-gray-300 pt-10 gap-4">
        {images.map((image, index) => (
          <VisibilitySensor key={index}  onChange={(isVisible) => isVisible && setCurrentImage(index)}>
            <img
              ref={(ref) => (imagesRef.current[index] = ref)}
              src={image}
              alt=''
              className={`m-2 sm:w-[500px] rounded-lg`}
            />
          </VisibilitySensor>
        ))}
      </div>

      <div className="flex space-x-2 pt-[5%] justify-center bg-gray-300">
        {images.map((_, index) => (
          <div
            key={index}
            onClick={() => handleSquareClick(index)}
            className={`squares ${index === currentImage ? 'active' : ''}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Scroll;


