import React from 'react';
// import logo from '../../public/logo.svg';
import Modal from './Modal'
import Message from './Message'
import Sortable from './Sortable'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Modal />
      <Message />
      <Sortable />
    </div>
  );
}

export default App;
