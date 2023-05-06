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
      src: 'https://image.myanimelist.net/ui/BQM6jEZ-UJLgGUuvrNkYUIcH9QKiuQwX9p6PTfC7y3rqfhtgI5bO3HU-z8j4Y5Rb6fD2x7bKV8ACDLWResoBDA',
      caption: 'Caption Text'
    },
    {
      number: 2,
      src: 'https://cdn.gaminggorilla.com/wp-content/uploads/2023/02/The-Best-Green-Haired-Anime-Girls.jpg',
      caption: 'Caption Two'
    },
    {
      number: 3,
      src: 'https://wallpaperaccess.com/full/3997448.jpg',
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
        <div className="numbertext">{slide.number} / {slides.length}</div>
        <img src={slide.src} style={{ width: '100%' }} alt={`Slide ${slide.number}`} />
        <div className="text">{slide.caption}</div>
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
      
      <div className="relative w-1/2 h-1/2">
        {renderSlides()}
        <a className="m-1 p-1 bg-opacity-40 prev absolute top-1/2 left-0 transform -translate-y-1/3 bg-black text-white font-bold text-3xl rounded cursor-pointer" onClick={handlePrevClick}>&#10094;</a>
        <a className="m-1 p-1 bg-opacity-40 next absolute top-1/2 right-0 transform -translate-y-1/3 bg-black text-white font-bold text-3xl rounded cursor-pointer" onClick={handleNextClick}>&#10095;</a>
      </div>

      <br />

      <div style={{ textAlign: 'center' }}>{renderDots()}</div>
    </>
  );
};

export default Slideshow;

