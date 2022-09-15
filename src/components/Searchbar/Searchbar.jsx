import React, { useState } from 'react';
import PropTypes from 'prop-types';
// import Notiflix from 'notiflix';
import { ImSearch } from 'react-icons/im';
import s from './Searchbar.module.css';

export const Searchbar = ({onSubmit}) => {
  const [value, setValue] = useState('');

    const handleSubmit = e => {
      e.preventDefault();
      
      const searchValue = value.trim()

        if (!searchValue) {
        alert('Введіть імя картинки.')
            return;
        }
        onSubmit(searchValue);
        setValue('');
    };

 
      return (
       <header className={s.Searchbar}>
        <form onSubmit={handleSubmit} className={s.SearchForm}>
            <button type="submit" className={s.Button}>
              <ImSearch style={{ marginRight: 10 }} />
              {/* <span>Search</span> */}
            </button>
            <input
            className={s.Input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={e=>setValue(e.target.value)}
            value={value}
          />
        </form>
      </header>
    );
  }

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};