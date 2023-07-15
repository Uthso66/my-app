import React from 'react';
import './IconButton.css';
import planeIcon from '../assets/flight_black_24dp.svg';

const IconButton = () => {
  return (
    <div className="icon-button">
      <div className="plane-icon-container">
        <img src={planeIcon} alt="Plane Icon" className="plane-icon" />
      </div>

      <div className="plane-icon-container reverse">
        <img src={planeIcon} alt="Plane Icon" className="plane-icon" />
      </div>
    </div>
  );
};

export default IconButton;
