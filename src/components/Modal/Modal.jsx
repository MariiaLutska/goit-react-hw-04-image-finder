import { Component} from 'react';
import PropTypes from 'prop-types';
import { Image, Container } from 'theme-ui';
// import Modal from 'react-modal';

const Overlay = {
 position: 'fixed',
    top:'0',
    left: '0',
    width: '100vw',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    zIndex: '1200',
  };

const ModaleWindow = {
  maxWidth: 'calc(100vw - 48px)',
  maxHeight: 'calc(100vh - 24px)',
};

export class Modal extends Component {
   componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }
    

     componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

    handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.closeModal();
    }
  };

    handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      this.props.closeModal();
    }
  };

    render() {
      return (
        <div style={Overlay} onClick={this.handleBackdropClick}>
          <div style={ModaleWindow}>
                    <Image src={this.props.largeImage}
              alt="choosed foto" />
            </div>
          </div>
        );
    }
}

Modal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  largeImage: PropTypes.string.isRequired,
};