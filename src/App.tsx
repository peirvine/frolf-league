import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Nav from './components/nav/nav'
import Home from './components/home/home'
import Add from './components/add/add'
import Scorecards from './components/scorecards/scorecards'
import ErrorPage from './errorPage'
import './App.scss';

function App() {
  return (
    <Router>
      <div className="frolfLeague">
        <header className="frolfHeader">
            <Nav />
        </header>
        <div className="content">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/add" component={Add} />
            <Route path="/scorecards" component={Scorecards} />
            <Route path="*" component={ErrorPage} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
