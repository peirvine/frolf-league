import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Amplify } from 'aws-amplify';
import awsConfig from './aws-exports';
import Paper from '@mui/material/Paper';
import Nav from './components/nav/nav'
import Home from './components/home/home'
import Add from './components/add/add'
import CurrentRankings from './components/rankings/currentRankings'
import ViewScorecards from './components/scorecards/scorecards'
import ErrorPage from './errorPage'
import './App.scss';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#0e4071',
    },
    secondary: {
      main: '#f50057',
    },
    background: {
      default: '#fafafa',
    },
  },
});

Amplify.configure(awsConfig);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <div className="frolfLeague">
          <header className="frolfHeader">
              <Nav />
          </header>
          <div className="content">
            <Paper className="paperContent">
              <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/add" component={Add} />
                <Route path="/scorecards" component={ViewScorecards} />
                <Route path="/rankings" component={CurrentRankings} />
                <Route path="*" component={ErrorPage} />
              </Switch>
            </Paper>
          </div>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
