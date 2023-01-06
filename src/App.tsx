import React from 'react';
import Nav from './components/nav/nav'
import './App.scss';

function App() {
  return (
    <div className="frolfLeague">
      <header className="frolfHeader">
        <Nav />
      </header>
      <div className="content">
        Contents
      </div>
    </div>
  );
}

export default App;
