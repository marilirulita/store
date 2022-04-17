import React, { useState } from 'react';
import '../stylesheets/carousel.css';

const Carousel = () => {
  const [slide, setSlide] = useState(0);
  const images = [
    { id: 1, src: 'https://fromthehipphoto.com/wp-content/uploads/2020/03/0018-From-the-Hip-Photo-expedited-705x471.jpg' },
    { id: 2, src: 'https://www.productphoto.com/wp-content/uploads/2019/01/6-Top-Alternatives-to-White-Background-Product-Photography.jpg' },
    { id: 3, src: 'https://fixthephoto.com/images/content/product-photography-white-background-equipment.png' },
    { id: 4, src: 'https://cdn.pixabay.com/photo/2019/07/13/13/42/watch-4334815_960_720.jpg' },
    { id: 5, src: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHw%3D&w=1000&q=80' },
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
