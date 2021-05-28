import React from 'react';
import Formreg from './regform';
import Formsucess from './regsuccess';
import './app.css';

function App() {
  return (
    <div className="App">
      <div className="form-section">
        <Formreg />
        <Formsucess/>
      </div>
    </div>
  );
}

export default App;
