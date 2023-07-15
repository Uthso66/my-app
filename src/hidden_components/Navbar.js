import React, { useState } from 'react';
import BBA2 from '../navbar_components/BBA2';
import JFK2 from '../navbar_components/JFK2';
import './Navbar.css';
import Arrow from '../navbar_components/Arrow';
import DXB from '../navbar_components/DXB'
import DAC from '../navbar_components/DAC'
import SingleLine from '../navbar_components/SingleLine';
import Table from '../navbar_components/Table'
import FarePolicy from '../navbar_components/FarePolicy';
import Table2 from '../navbar_components/Table2';

const Navbar = () => {
  const [activeOption, setActiveOption] = useState(null);

  const handleOptionClick = (option) => {
    setActiveOption(option);
  };

  const closeMiniWindow = () => {
    setActiveOption(null);
  };

  return (
    <nav className="navbar">
      <ul className="navbar-menu">
        <li className="navbar-item">
          <button
            className={`navbar-link ${activeOption === 'option1' ? 'active' : ''}`}
            onClick={() => handleOptionClick('option1')}
          >
            FLIGHT DETAILS
          </button>
        </li>
        <li className="navbar-item">
          <button
            className={`navbar-link ${activeOption === 'option2' ? 'active' : ''}`}
            onClick={() => handleOptionClick('option2')}
          >
            FARE SUMMERY
          </button>
        </li>
        <li className="navbar-item">
          <button
            className={`navbar-link ${activeOption === 'option3' ? 'active' : ''}`}
            onClick={() => handleOptionClick('option3')}
          >
            FARE POLICY
          </button>
        </li>
        <li className="navbar-item">
          <button
            className={`navbar-link ${activeOption === 'option4' ? 'active' : ''}`}
            onClick={() => handleOptionClick('option4')}
          >
            BAGGAGE
          </button>
        </li>
      </ul>

      {activeOption === 'option1' && (
        <div className="mini-window">
          <BBA2 />
          <JFK2 />
          <Arrow />
          <DXB />
          <SingleLine />
          <BBA2 />
          <DXB />
          <Arrow />
          <DAC />
        </div>
      )}

      {activeOption === 'option2' && (
        <div className="mini-window">
          <Table />
        </div>
      )}

      {activeOption === 'option3' && (
        <div className="mini-window">
          <FarePolicy />
        </div>
      )}

      {activeOption === 'option4' && (
        <div className="mini-window">
          <Table2 />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
