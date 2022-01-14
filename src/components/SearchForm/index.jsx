import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchUserData } from '../../store/actions/fetchUserData';
import { setDataNull } from '../../store/actions/setDataNull';
import { setUserName } from '../../store/actions/setUserName';

import './searchForm.css';

const SearchForm = () => {
  const { userName } = useSelector((state) => state.userReducer);
  let dispatch = useDispatch();

  const handleOnBlur = (e) => {
    dispatch(fetchUserData(e.target.value));
    dispatch(setUserName(e.target.value));
  };

  const handleKeyPress = (e) => {
    if (e.keyCode === 13) {
      e.target.blur();
    }
  };

  const handleOnClick = (e) => {
    e.preventDefault();
    if (userName === 0) {
      dispatch(setDataNull());
    }
  };

  return (
    <div>
      <form className="searchForm">
        <input
          onBlur={(e) => handleOnBlur(e)}
          onKeyDown={(e) => handleKeyPress(e)}
          type="text"
          className="searchForm__input"
        />
        <button
          onClick={(e) => handleOnClick(e)}
          type="submit"
          className="searchForm__button"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchForm;
