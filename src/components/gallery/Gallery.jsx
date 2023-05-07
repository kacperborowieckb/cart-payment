import './gallery.scss';
import { useState } from 'react';

const Gallery = () => {
  const images = ['image-product-1', 'image-product-2', 'image-product-3', 'image-product-4'];
  const [currentPhoto, setCurrentPhoto] = useState(images[0]);
  return (
    <aside className="gallery">
      <img src={currentPhoto + '.jpg'} alt="boots img" className="gallery__main-img" />
      <section className="gallery__thumbnail">
        {images.map((photo, i) => (
          <div className="gallery__thumbnail-container" key={i}>
            <img
              onClick={() => setCurrentPhoto(images[i])}
              src={photo + '-thumbnail.jpg'}
              alt="boots img"
              className="gallery__thumbnail-img"
              style={
                currentPhoto === images[i]
                  ? { outline: '3px solid var(--clr-orange)', opacity: '0.5' }
                  : { outline: 'none' }
              }
            />
          </div>
        ))}
      </section>
    </aside>
  );
};

export default Gallery;
