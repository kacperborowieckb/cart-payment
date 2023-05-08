import DataContext from '../../context/DataContext';
import SlideShow from '../slideShow/SlideShow';
import './gallery.scss';
import { useContext, useState } from 'react';

const Gallery = () => {
  const { images, currentPhoto, setCurrentPhoto, isOpen, setIsOpen } = useContext(DataContext);

  const handlePrevious = () => {
    if (currentPhoto === 0) {
      setCurrentPhoto(images.length - 1);
    } else {
      setCurrentPhoto(currentPhoto - 1);
    }
  };

  const handleNext = () => {
    if (currentPhoto === images.length - 1) {
      setCurrentPhoto(0);
    } else {
      setCurrentPhoto(currentPhoto + 1);
    }
  };

  return (
    <aside className="gallery">
      <button className="gallery__previous" onClick={handlePrevious}>
        <img src="/icon-previous.svg" alt="Previous button" />
      </button>
      <img
        src={images[currentPhoto] + '.jpg'}
        alt="boots img"
        className="gallery__main-img"
        onClick={() => setIsOpen(true)}
      />
      <button className="gallery__next" onClick={handleNext}>
        <img src="/icon-next.svg" alt="Next button" />
      </button>
      <section className="gallery__thumbnail">
        {images.map((photo, i) => (
          <div className="gallery__thumbnail-container" key={i}>
            <img
              onClick={() => setCurrentPhoto(i)}
              src={photo + '-thumbnail.jpg'}
              alt="boots img"
              className="gallery__thumbnail-img"
              style={
                currentPhoto === i
                  ? { outline: '3px solid var(--clr-orange)', opacity: '0.5' }
                  : { outline: 'none' }
              }
            />
          </div>
        ))}
      </section>
      {isOpen && <SlideShow />}
    </aside>
  );
};

export default Gallery;
