import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setUserName } from '../../store/actions/setUserName';
import { fetchUserData } from '../../store/actions/fetchUserData';

import './searchForm.css';

const SearchForm = () => {
  let dispatch = useDispatch();
  let user = useSelector((state) => state.userReducer.userName);

  const handleKeyPress = (e) => {
    if (e.keyCode === 13) {
      e.target.blur();
    }
  };

  return (
    <div>
      <form className="searchForm">
        <input
          onBlur={(e) => dispatch(setUserName(e.target.value))}
          onKeyDown={(e) => handleKeyPress(e)}
          type="text"
        />
        <input
          onClick={dispatch(fetchUserData(user))}
          type="button"
          value="Search"
        />
      </form>
    </div>
  );
};

export default SearchForm;
