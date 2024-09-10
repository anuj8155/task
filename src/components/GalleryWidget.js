import React, { useState } from 'react';
import Question from '../asset/Vector.png';
import Frame from '../asset/Frame.png';
import backward from '../asset/backward.png';
import forward from '../asset/forward.png';

const GalleryWidget = () => {
  const [images, setImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0); // Track the current index for scrolling

  const handleAddImage = (e) => {
    const file = e.target.files[0];
    const newImage = URL.createObjectURL(file);
    setImages([...images, newImage]);
  };

  // Handle Forward Navigation
  const handleForward = () => {
    if (currentIndex < images.length - 3) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  // Handle Backward Navigation
  const handleBackward = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="w-full flex flex-row p-4 rounded-lg shadow-md mt-4 text-white" style={{ backgroundColor: '#363C43', color: '#FFFFFF', boxShadow: '6px 8px 7px -1px black'}}>
      <div className='flex flex-col mx-2 items-center justify-between h-40'>
        <img className='w-40' src={Question} alt=''/>
        <img className='w-96' src={Frame} alt='' />
      </div>
      <div className="flex flex-col w-custom-width">
        <div className=" flex flex-row  items-center justify-around">
          <button className='text-sm bg-[#171717] p-3 shadow-[0px_4px_10px_2px_#00000040_inset] rounded-xl'>
            Gallery
          </button>
          <div className='flex flex-row items-center'>
            <label htmlFor="file-input" className="cursor-pointer text-center mx-2 text-sm custom-shadow p-2 rounded-xl">
              + Add Image
            </label>
            <input id="file-input" type="file" onChange={handleAddImage} className="hidden" />
            <img
              className='custom-icon custom-shadow-1 mx-2 cursor-pointer'
              src={backward}
              alt="backward"
              onClick={handleBackward} // Backward action
            />
            <img
              className='custom-icon custom-shadow-1 cursor-pointer'
              src={forward}
              alt="forward"
              onClick={handleForward} // Forward action
            />
          </div>
        </div>

        {/* Displaying images in a row (only 3 at a time) */}
        <div className="ml-2 mt-4 grid grid-cols-3 gap-2 w-full h-[14em]">
          {images.slice(currentIndex, currentIndex + 3).map((image, index) => (
            <img key={index} src={image} alt="gallery" className="w-full h-auto rounded" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default GalleryWidget;
