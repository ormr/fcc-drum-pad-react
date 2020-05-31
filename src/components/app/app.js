import React from 'react';
import './app.css';

import { ControlPanel } from '../control-panel';
import { Drum } from '../drum';

const App = () => {
  return (
    <div id="drum-machine" className="inner-container">
      <Drum />
      <ControlPanel />
    </div>
  );
}

export {
  App
};