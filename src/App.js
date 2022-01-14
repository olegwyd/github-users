import React from 'react';
import { useSelector } from 'react-redux';

import Header from './components/Header';
import SearchForm from './components/SearchForm';
import User from './components/User';
import Modal from './components/Modal';

import './App.css';

function App() {
  let { userData } = useSelector((state) => state.userReducer);
  let { modalOpened } = useSelector((state) => state.modalWindowReducer);
  return (
    <div className="App">
      <Header />
      <div className="main">
        <div className="main__search">
          <SearchForm />
          {userData ? <User /> : null}
        </div>
      </div>
      {modalOpened ? <Modal /> : null}
    </div>
  );
}

export default App;
