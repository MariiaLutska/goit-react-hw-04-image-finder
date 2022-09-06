import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import Notiflix from 'notiflix';
import { ImSearch } from 'react-icons/im';
// import s from './Searchbar.module.css';


// const styles = { from: { marginBottom: 20 } };


export class Searchbar extends Component {
    state = {
        value: '',
    };

    handleChange = e => {
        this.setState({ value: e.currentTarget.value.toLowerCase() });
    };

    handleSubmit = e => {
      e.preventDefault();
      const searchValue =this.state.pictureName.trim()
        if (searchValue === '') {
        alert('Введіть імя картинки.')
            return;
        }
        this.props.onSubmit(searchValue);
        this.setState({ value: '' });
    };

    render() {
      return (
        <header>
          <form onSubmit={this.handleSubmit}>
            <button type="submit" >
              <ImSearch style={{ marginRight: 8 }} />
              Search
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
          </header>
            
        );
    }
}
Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};