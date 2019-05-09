import React from 'react';
import './App.css';

// Component Imports
import BoardListDisplay from './Components/BoardListDisplay/BoardListDisplay';


function App() {
  return (
    <div className="App">
      <h1>Board Title</h1>
      <BoardListDisplay />
    </div>
  );
}

export default App;
