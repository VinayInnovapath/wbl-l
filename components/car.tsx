'use client'

import React, { useState } from 'react';

// Define the type for the images array
const images = [
    'https://picsum.photos/seed/picsum/200/50    ',
    'https://picsum.photos/id/237/200/300',
    'https://picsum.photos/id/237/200/300',
    'https://picsum.photos/id/237/200/300',
  ];
  

  const Carousel: React.FC = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  
    const nextImage = () => {
      setCurrentImageIndex((prevIndex: number) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };
  
    const prevImage = () => {
      setCurrentImageIndex((prevIndex: number) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };
  

    return (
      <div className="relative">
        <div className="overflow-hidden relative">
          <div className="flex transition-transform duration-300 ease-out">
            {images.map((image: string, index: number) => (
              <div
                key={index}
                className={`w-full flex-shrink-0 transition-transform duration-300 ${
                  index === currentImageIndex ? 'translate-x-0' : 'translate-x-full'
                }`}
              >
                <img src={image} alt={`Image ${index + 1}`} className="w-full" />
              </div>
            ))}
          </div>
        </div>
        <button
          className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white px-4 py-2 rounded-l"
          onClick={prevImage}
        >
          Prev
        </button>
        <button
          className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white px-4 py-2 rounded-r"
          onClick={nextImage}
        >
          Next
        </button>
      </div>
    );
  };
  
  export default Carousel;
