import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import FormSignUp from './components/FormSignUp/FormSignUp';
import FormLogIn from './components/FormLogIn/FormLogIn'
import Results from './pages/Results';
import Navigation from './components/Navigation/Navigation'
import Footer from './components/Footer/Footer'
import Home from './pages/Home'


function App() {
  return (
    <div>
      <Navigation />
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/all/:search" component={Results} />
          <Route exact path="/account" component={FormSignUp} />
          <Route exact path="/signin" component={FormLogIn} />
        </Switch>
      </div>
      <Footer />
    </div>

  );
}


export default App;