import React from 'react';

// STYLESHEETS
import './reset.css';
import './App.css';

// COMPONENTS
import Header from './Components/Header/Header';
import ListMapper from './Components/ListMapper/ListMapper';

// FUNCTIONAL COMPONENT DEFINITION
function App() {
  return (
    <section className="app">
      <Header />
      <ListMapper />
    </section>
  );
}

export default App;