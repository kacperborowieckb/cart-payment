import { useContext, useEffect, useRef, useState } from 'react';
import './slideShow.scss';
import DataContext from '../../context/DataContext';

const SlideShow = () => {
  const [openedPhoto, setOpenedPhoto] = useState(currentPhoto);
  const background = useRef();
  const { setIsOpen, images, currentPhoto } = useContext(DataContext);

  const handlePrevious = () => {
    if (openedPhoto === 0) {
      setOpenedPhoto(images.length - 1);
    } else {
      setOpenedPhoto(openedPhoto - 1);
    }
  };

  const handleNext = () => {
    if (openedPhoto === images.length - 1) {
      setOpenedPhoto(0);
    } else {
      setOpenedPhoto(openedPhoto + 1);
    }
  };

  useEffect(() => {
    const handleClick = (e) => {
      if (e.target === background.current) {
        setIsOpen(false);
      }
    };

    window.addEventListener('click', handleClick);

    return () => window.removeEventListener('click', handleClick);
  });

  return (
    <div className="slide-show" ref={background}>
      <section className="slide-show__content">
        <section className="slide-show__main-gallery">
          <button onClick={() => setIsOpen(false)} className="slide-show__close"></button>
          <img src={images[openedPhoto] + '.jpg'} alt="boots photo" className="slide-show__img" />
          <button className="slide-show__previous" onClick={handlePrevious}>
            <img src="/icon-previous.svg" alt="previous photo" />
          </button>
          <button className="slide-show__next" onClick={handleNext}>
            <img src="/icon-next.svg" alt="next photo" />
          </button>
        </section>
        <section className="slide-show__thumbnail">
          {images.map((photo, i) => (
            <div
              onClick={() => setOpenedPhoto(i)}
              className="slide-show__thumbnail-container"
              key={i}
              style={
                openedPhoto === i
                  ? { outline: '3px solid var(--clr-orange)', backgroundColor: 'white' }
                  : { outline: 'none' }
              }
            >
              <img
                src={photo + '-thumbnail.jpg'}
                alt="boots img"
                className="slide-show__thumbnail-img"
              />
            </div>
          ))}
        </section>
      </section>
    </div>
  );
};

export default SlideShow;
