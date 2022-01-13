import React from 'react';
import { useSelector } from 'react-redux';

const User = () => {
  let userData = useSelector((state) => state.userReducer.userData);
  console.log(userData);
  return (
    <div>
      <p>Name: {userData?.data?.name}</p>
      <p>username: {userData?.data?.login}</p>
      <p>Followers: {userData?.data?.followers}</p>
      <p>Following: {userData?.data?.following}</p>
      <p>Repositories count: {userData?.data?.public_repos}</p>
      <img src={userData?.data?.avatar_url} alt="User avatar" />
    </div>
  );
};

export default User;
