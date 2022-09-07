import { Circles } from 'react-loader-spinner';
import s from './Loader.module.css';

export const Loader = () => {
  return (
    <div className={s.Container}>
      <Circles color='blue' height={120} width={120} />
    </div>
  );
};