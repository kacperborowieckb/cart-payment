import { Link } from 'react-router-dom';
import './cancel.scss';

const Cancel = () => {
  return (
    <div className="cancel">
      <h1 className="cancel__header">Payment has been canceled.</h1>
      <Link to={'/'}>
        <button className="cancel__button">Go Home</button>
      </Link>
    </div>
  );
};

export default Cancel;
