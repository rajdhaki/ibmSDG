import React, { useState, useEffect } from 'react';
import earth from '../Images/smallearth1.gif';

const Feature = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex(current => (current + 1) % slides.length);
    }, 3000); // Change slide every 3000 milliseconds (3 seconds)

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, [slides.length]);

  return (
    <>
      {slides.map((slide, index) => (
        <div key={index} className={`flex justify-center items-center py-12 gap-4 ${currentIndex === index ? 'block' : 'hidden'}`} >
          <div className='w-3/6 flex flex-col justify-center items-center text-5xl font-semibold py-10 leading-snug'>
            <h1>SUSTAINABLE</h1>
            <h1 className='flex'>DEVEL<span><img style={{width: "3.6rem"}} src={earth} alt="Earth" /></span>PMENT</h1>
            <h1>{slide.title}</h1>
          </div>
          <div className='w-3/6 flex justify-center items-center text-lg py-10 px-8'>
            {slide.para}
          </div>
        </div>
      ))}
    </>
  );
}
export default Feature
