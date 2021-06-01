import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.scss';
import Landing from './components/landing/Landing';

class App extends React.Component{
  render(){
    return(
      <Router>
        <Switch>
          <Route path="/">
            <Landing></Landing>
          </Route>
        </Switch>
      </Router>
    )
  }
}

export default App;
