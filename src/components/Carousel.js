import React, { useState } from 'react';
import '../stylesheets/carousel.css';

const Carousel = () => {
  const [slide, setSlide] = useState(0);
  const images = [
    { id: 1, src: 'https://i.pinimg.com/originals/c2/8b/c9/c28bc99dafaeb107246f904f34bae16c.jpg' },
    { id: 2, src: 'https://images.wallpaperscraft.com/image/single/space_galaxy_shine_137572_1280x720.jpg' },
    { id: 3, src: 'https://cdn.wallpapersafari.com/74/30/v23HkS.jpg' },
    { id: 4, src: 'https://wallpaperaccess.com/full/3971879.jpg' },
  ];
  const nextSlide = () => setSlide((slide) => {
    let prev = slide;
    prev += 1;
    return prev;
  });
  const prevSlide = () => setSlide((slide) => {
    let next = slide;
    next -= 1;
    return next;
  });

  return (
    <>
      <section className="carousel">
        <div className="carousel__track-container">
          {
          slide === 0
            ? ''
            : (
              <button
                onClick={prevSlide}
                className="carousel__button carousel__button--left"
                type="button"
              >
                <span className="carousel__button--icon">&#10094;</span>
              </button>
            )
        }
          <ul className="carousel__track">
            {
            images.map((img, idx) => (
              <li key={img.id} className={idx === slide ? 'carousel__slide current__slide' : 'carousel__slide'}>
                <img className="carousel__image" src={img.src} alt="carousel snap" />
              </li>
            ))
          }
          </ul>
          {
          slide === images.length - 1
            ? ''
            : (
              <button
                onClick={nextSlide}
                className="carousel__button carousel__button--right"
                type="button"
              >
                <span className="carousel__button--icon">&#10095;</span>
              </button>
            )
        }
        </div>
      </section>
    </>
  );
};

export default Carousel;
