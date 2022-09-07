import { Component} from 'react';
import PropTypes from 'prop-types';
import { Image, Container } from 'theme-ui';


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
          <Container overlay position="fixed" top="0" left="0" width="100vw" height="100vh" display="flex" justifyContent="center" alignItems="center">
            <div onClick={this.handleBackdropClick}>
                {/* <div> */}
                    <Image src={this.props.largeImage}
                    alt="choosed foto" />
                {/* </div> */}
          </div>
          </Container>
        );
    }
}

Modal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  largeImage: PropTypes.string.isRequired,
};