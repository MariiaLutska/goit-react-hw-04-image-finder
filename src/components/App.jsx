import React, { Component } from "react";

import { Modal } from './Modal/Modal';
// import { Box } from '../Box';


export class App extends Component {
  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };
  render() {
    const { todos, filter, showModal } = this.state;
    return (
      
    
      // <Box 
      //   display="flex">
        /* <Section>
          <Searchbar />
        </Section> */

       /* <Section>
          <ImageGallery />
        </Section> */
        <Modal>
          <button type="button" onClick={this.toggleModal}>
            Відкрити зображення
          </button>

          {showModal && (
            <Modal onClose={this.toggleModal}>
              <button type="button" onClick={this.toggleModal}>
                Закрити
              </button>
            </Modal>)}
        </Modal>
        // </Box>
    )
  }
}
