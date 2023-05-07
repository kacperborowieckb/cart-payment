import Description from '../components/description/Description';
import Gallery from '../components/gallery/Gallery';
import './main.scss';

const main = () => {
  return (
    <main className="hero">
      <Gallery />
      <Description />
    </main>
  );
};

export default main;
