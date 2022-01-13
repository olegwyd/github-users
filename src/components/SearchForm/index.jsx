import React from 'react';
import { useDispatch } from 'react-redux';

import { fetchUserData } from '../../store/actions/fetchUserData';
import { setDataNull } from '../../store/actions/setDataNull';

import './searchForm.css';

const SearchForm = () => {
  let dispatch = useDispatch();

  const handleKeyPress = (e) => {
    if (e.keyCode === 13) {
      e.target.blur();
    }
  };

  const handleOnClick = (e) => {
    e.preventDefault();
    if (e.target.value.length === 0) {
      dispatch(setDataNull());
    }
  };

  return (
    <div>
      <form className="searchForm">
        <input
          onBlur={(e) => dispatch(fetchUserData(e.target.value))}
          onKeyDown={(e) => handleKeyPress(e)}
          type="text"
        />
        <button onClick={(e) => handleOnClick(e)} type="submit">
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchForm;
