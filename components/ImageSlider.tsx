"use client"
import { useState, useEffect } from 'react';

const Slideshow = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const slideShowInterval = setInterval(
      () => setSlideIndex(slideIndex => slideIndex + 1),
      2000
    );
    return () => clearInterval(slideShowInterval);
  }, []);

  const slides = [
    {
      number: 1,
      src: 'https://wallpapercave.com/dwp2x/wp11755847.jpg',
      caption: 'Caption Text'
    },
    {
      number: 2,
      src: 'https://wallpapercave.com/dwp2x/wp5850454.jpg',
      caption: 'Caption Two'
    },
    {
      number: 3,
      src: 'https://wallpapercave.com/dwp2x/wp1917151.png',
      caption: 'Caption Three'
    }
  ];

  const handlePrevClick = () => {
    setSlideIndex(slideIndex - 1);
  };

  const handleNextClick = () => {
    setSlideIndex(slideIndex + 1);
  };

  const handleDotClick = (index: number) => {
    setSlideIndex(index);
  };



  const renderSlides = () =>
    slides.map((slide, index) => (
      <div
        key={slide.number}
        className={`mySlides ${
          index === slideIndex % slides.length ? 'fade active' : 'hidden'
        }`}
      >
        <img src={slide.src} style={{ width: '100%' }} alt={`Slide ${slide.number}`} />
      </div>
    ));

  const renderDots = () =>
    slides.map((slide, index) => (
      <span
        key={slide.number}
        className={`dot ${index === slideIndex % slides.length ? 'active' : ''}`}
        onClick={() => handleDotClick(index)}
      ></span>
    ));

  return (
    <>
      
      <div className="relative ImageSlider">
        {renderSlides()}
        <a className="m-1 p-1 bg-opacity-40 prev absolute top-1/2 left-0 transform -translate-y-1/3 bg-black text-white font-bold text-3xl rounded cursor-pointer border" onClick={handlePrevClick}>&#10094;</a>
        <a className="m-1 p-1 bg-opacity-40 next absolute top-1/2 right-0 transform -translate-y-1/3 bg-black text-white font-bold text-3xl rounded cursor-pointer border" onClick={handleNextClick}>&#10095;</a>
      </div>

      <br />

      <div style={{ textAlign: 'center' }}>{renderDots()}</div>
    </>
  );
};

export default Slideshow;

