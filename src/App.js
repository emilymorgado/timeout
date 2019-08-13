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
    const timer = setTimeout(() => {
      messages.shift();
      setMessages(messages);
    }, 10000);
    return () => clearTimeout(timer);
  };

  return (
    <div className="App">
      <header className="App-header">
        <Notifications messages={messages} />
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={handleNotification}>Click Me</button>
      </header>
    </div>
  );
}

export default App;
