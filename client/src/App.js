import React from 'react';
import './App.css';
import { Switch, Route } from "react-router-dom";
import Home from './pages/Home';
import SingleBandResult from './pages/SingleBandResult';
import Navigation from './components/Navigation/Navigation';
import Results from './pages/Results';
import { Router } from 'express';

function App() {
  return (
    <Router>
      <div>
        <Navigation />
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/bands/:id" component={SingleBandResult} />
            <Route exact path="/all/:search" component={Results} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}


export default App;