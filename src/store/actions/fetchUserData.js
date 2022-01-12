import axios from 'axios';

export const fetchUserData = (userName) => (dispatch) => {
  axios.get(`https://api.github.com/users/${userName}`).then((userData) => {
    dispatch(setUserData(userData));
  });
};

export const setUserData = (data) => ({
  type: 'SET_USER_DATA',
  payload: data,
});
