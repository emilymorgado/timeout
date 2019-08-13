import React, {useEffect} from 'react';

const styles = {
  backgroundColor: 'yellow',
  height: '70px',
  width: '200px',
  color: 'black',
};

function Notifications({ msgs=[], setMessages, delay=1000 }) {
  useEffect(() => {
    const timer = window.setTimeout(() => {
      if (msgs.length) {
        msgs.shift();
        setMessages(msgs);
      }
    }, delay)
    return () => window.clearTimeout(timer);
  }, [msgs]);

  return (
    <div>
      {msgs.map(msg =>
        <div key={msg} style={styles}>
          {msg}
        </div>
      )}
    </div>
  );
}

export default Notifications;
