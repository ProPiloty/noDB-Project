import React from 'react';

// STYLESHEETS
import './reset.css';
import './App.css';

// COMPONENTS
import Header from './Components/Header/Header';
import ListMapper from './Components/ListMapper/ListMapper';
import Footer from './Components/Footer/Footer';

// FUNCTIONAL COMPONENT DEFINITION
function App() {
  return (
    <section className="App">
      <Header />
      <ListMapper />
      <Footer />
    </section>
  );
}

export default App;