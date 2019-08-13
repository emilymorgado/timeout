import React, { useState } from 'react';
import generateHash from 'random-hash';

import Notifications from './Notification';
import logo from './logo.svg';
import './App.css';

const App = () => {
  const [messages, setMessages] = useState([]);

  const handleNotification = () => {
    const newHash = generateHash();
    const modifiedMessages = [...messages, newHash];
    setMessages(modifiedMessages);
  };

  return (
    <div className="App">
      <header className="App-header">
        <Notifications msgs={[...messages]} setMessages={setMessages} delay={3000} />
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={handleNotification}>Click Me</button>
      </header>
    </div>
  );
}

export default App;
