import React from 'react';

const Notification = React.memo(({ message }) => {
  return (
    <div className="noti-cont">
      <p className="noti-cont-text">{message}</p>
    </div>
  );
});

export default Notification;
