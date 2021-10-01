import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Stories from './components/pages/Stories';
import Events from './components/pages/Events';
import StartUps from './components/pages/StartUps';
import SignUp from './components/pages/SignUp';
import Team from './components/pages/Team';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/stories' component={Stories} />
          <Route path='/startups' component={StartUps} />
          <Route path='/events' component={Events} />
          <Route path='/sign-up' component={SignUp} />
          <Route path='/team' component={Team} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
