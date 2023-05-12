import { useContext, useEffect } from 'react';
import './toast.scss';
import DataContext from '../../context/DataContext';

const Toast = () => {
  const { toastList, setToastList } = useContext(DataContext);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (toastList.length > 0) {
        setToastList(toastList.slice(1));
      }
    }, 2000);

    return () => {
      clearTimeout(timeout);
    };
  }, [toastList]);

  return (
    <section className="toast">
      {toastList.slice(-6).map(({ type, content }, i) => (
        <div
          className="toast__item"
          style={{ backgroundColor: type === 'error' ? 'var(--clr-error)' : 'var(--clr-success)' }}
          key={i}
        >
          <img
            src={type === 'error' ? '/error.svg' : '/success.svg'}
            alt="notification icon"
            className="toast__icon"
          />
          <p className="toast__content">{content}</p>
        </div>
      ))}
    </section>
  );
};

export default Toast;
