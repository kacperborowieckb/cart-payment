import SlideShow from '../slideShow/SlideShow';
import './gallery.scss';
import { useState } from 'react';

const Gallery = () => {
  const images = ['image-product-1', 'image-product-2', 'image-product-3', 'image-product-4'];
  const [currentPhoto, setCurrentPhoto] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <aside className="gallery">
      <img
        src={images[currentPhoto] + '.jpg'}
        alt="boots img"
        className="gallery__main-img"
        onClick={() => setIsOpen(true)}
      />
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
      {isOpen && <SlideShow setIsOpen={setIsOpen} currentPhoto={currentPhoto} images={images} />}
    </aside>
  );
};

export default Gallery;
