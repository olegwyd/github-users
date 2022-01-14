import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { closeModal } from '../../store/actions/modalActions';
import { fetchUserData } from '../../store/actions/fetchUserData';

import './savedUsers.css';

const SavedUsers = () => {
  let { savedUsers } = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();

  const findUser = (indexOfUser) => {
    dispatch(closeModal());
    dispatch(fetchUserData(savedUsers[indexOfUser]));
  };

  return (
    <div className="saved-users">
      <b>Saved userNames:</b>
      {savedUsers.map((user) => {
        return (
          <div
            onClick={() => findUser(savedUsers.indexOf(user))}
            className="saved-users__user"
            key={user}
          >
            - {user}
          </div>
        );
      })}
    </div>
  );
};

export default SavedUsers;
