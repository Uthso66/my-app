import React from 'react';
import BBA from './components/BBA';
import Dac from './components/Dac';
import JFK from './components/JFK';
import Total from './components/Total';
import Navbar from './hidden_components/Navbar';
import IconButton from './buttons/IconButton';
import './App.css';

const App = () => {
  return (
    <div className="main-page">
      <div className="container">
        <div className="Box marg">
          <BBA />
        </div>

        <div className="Box dac">
          <Dac />
        </div>

        <div className="Box marg">
          <IconButton />
        </div>
        <div className="Box JFK">
          <JFK />
        </div>

        <div className="Box total">
          <Total />
        </div>
      </div>

      <div>
        <Navbar />
      </div>
    </div>
  );
};

export default App;
