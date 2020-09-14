import React from 'react';
import logo from './logo.svg';
import './App.css';

import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button';

function App() {
  return (
    <div className="App">
      <Box color="text.primary" clone>
        <Button variant="contained" color="primary">
          Primary
        </Button>
      </Box>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
