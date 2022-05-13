import React from 'react';
import './App.css';
import {hello} from 'my-package'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>{hello("examples-typescript")}</p>
      </header>
    </div>
  );
}

export default App;
