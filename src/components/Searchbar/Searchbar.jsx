import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import Notiflix from 'notiflix';
import { ImSearch } from 'react-icons/im';
import { Box } from '../Box';
// import {Button} from '../Button/Button.styled';



export class Searchbar extends Component {
    state = {
        value: '',
    };

    handleChange = e => {
     this.setState({ value: e.currentTarget.value.toLowerCase() });
  };

    handleSubmit = e => {
      e.preventDefault();
      const searchValue =this.state.value.trim()
        if (searchValue === '') {
        alert('Введіть імя картинки.')
            return;
        }
        this.props.onSubmit(searchValue);
        this.setState({ value: '' });
    };

    render() {
      return (
        <Box as="header"
          position="stiky"
          justifyContent="center"
          display="flex"
          alignItems="center"
          paddingTop={15}
          paddingBottom={15}
          backgroundColor="#3f51b5"
        >
          <form onSubmit={this.handleSubmit}>
            <button type="submit" >
              <ImSearch style={{ marginRight: 10 }} />
              {/* <span>Search</span> */}
            </button>
            <input 
              type="text"
              autocomplete="off"
              autofocus
              placeholder="Search images and photos"
              // name="pictureName"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </form>
        </Box>
        );
    }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};