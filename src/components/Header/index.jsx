import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { openModal } from '../../store/actions/modalActions';

import './header.css';

const Header = () => {
  const dispatch = useDispatch();
  let savedUsers = useSelector((state) => state.userReducer.savedUsers);

  return (
    <>
      <header className="header">
        GitHub Profiles
        <div
          onClick={() => dispatch(openModal())}
          className="header__savedUsersCount"
        >
          Saved users count: {savedUsers.length}
        </div>
      </header>
    </>
  );
};

export default Header;
