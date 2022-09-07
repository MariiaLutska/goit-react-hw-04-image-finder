import { Circles } from 'react-loader-spinner';

const Container = {
  position: 'fixed',
  display: 'flex',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '30px',
};
export const Loader = () => {
  return (
    <div style={Container}>
      <Circles color='blue' height={120} width={120} />
    </div>
  );
};