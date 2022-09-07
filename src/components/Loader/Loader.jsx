import { Circles } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <div display="flex" alignItems="center" justifyContent="center" position="fixed" top='50%' left='50%'>
      <Circles color='blue' height={120} width={120} />
    </div>
  );
};