import React from 'react';
import { useSelector } from 'react-redux';

import Header from './components/Header';
import SearchForm from './components/SearchForm';
import User from './components/User';

import './App.css';

function App() {
  let userData = useSelector((state) => state.userReducer.userData);
  return (
    <div className="App">
      <Header />
      <SearchForm />
      {userData ? <User /> : null}
    </div>
  );
}

export default App;
