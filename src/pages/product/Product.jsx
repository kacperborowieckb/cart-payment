import { useContext } from 'react';
import Description from '../../components/description/Description';
import Gallery from '../../components/gallery/Gallery';
import './product.scss';
import DataContext from '../../context/DataContext';
import Toast from '../../components/toast/Toast';

const Product = () => {
  const { toastList } = useContext(DataContext);
  return (
    <main className="hero">
      <Gallery />
      <Description />
      {toastList.length > 0 && <Toast />}
    </main>
  );
};

export default Product;
