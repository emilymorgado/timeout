import React from 'react';

const styles = {
  backgroundColor: 'yellow',
  height: '70px',
  width: '200px',
  color: 'black',
};

function Notifications({ messages=[] }) {
  let notifications = null;

  if (messages.length) {
    notifications = messages.map(message =>
      <div key={message} style={styles}>
        {message}
      </div>
    );
    return notifications;
  }

  return (
    <div>
      {notifications}
    </div>
  );
}

export default Notifications;
