import React from 'react';

const Notification = ({ message, type, onClose }) => {
  const notificationStyles = {
    success: 'bg-green-500 text-white',
    error: 'bg-red-500 text-white',
  };

  return (
    <div className={`fixed top-0 right-0 m-4 p-4 rounded shadow-lg ${notificationStyles[type]}`}>
      <p>{message}</p>
      <button onClick={onClose} className="mt-2 underline">
        Close
      </button>
    </div>
  );
};

export default Notification;
