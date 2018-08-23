import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './counter/Home';
import { Switch, Route } from 'react-router-dom';
import { CompNavigasi } from './components/index';
import DetailBerita from './counter/DetailBerita';

class App extends Component {
  render() {
    return (
      <div>
        <CompNavigasi />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/detailberita" component={DetailBerita} />
        </Switch>
      </div>
    );
  }
}

export default App;
