import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { addUserToSaved } from '../../store/actions/addUserToSaved';

import './user.css';

const User = () => {
  let userData = useSelector((state) => state.userReducer.userData);
  let userName = useSelector((state) => state.userReducer.userName);
  const dispatch = useDispatch();

  const handleOnClick = () => {
    dispatch(addUserToSaved(userName));
  };
  return (
    <>
      <div className="user">
        <img
          src={userData?.avatar_url}
          alt="User avatar"
          className="user__avatar"
        />

        <div className="user__info">
          {userData?.name ? <p>Name: {userData?.name}</p> : null}
          <p>username: {userData?.login}</p>
          <p>Followers: {userData?.followers}</p>
          <p>Following: {userData?.following}</p>
          <p>Repositories count: {userData?.public_repos}</p>
          <button onClick={() => handleOnClick()} className="user__button">
            Save
          </button>
        </div>
      </div>
    </>
  );
};

export default User;
