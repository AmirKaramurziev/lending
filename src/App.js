import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import MainPage from './main-page';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" component={MainPage}/>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
