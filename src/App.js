import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.scss';
import About from './components/about/About';
import Landing from './components/landing/Landing';

class App extends React.Component{
  render(){
    return(
      <Router>
        <Switch>
          <Route path="/about-me">
            <About></About>
          </Route>
          <Route path="/">
            <Landing></Landing>
          </Route>
        </Switch>
      </Router>
    )
  }
}

export default App;
