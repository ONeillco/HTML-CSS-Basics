import React from 'react'
import Home from './components/Home'
import About from './components/About'
import Nav from './components/Nav'
import RecipeList from './components/RecipeList';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';

function App() {
  return (
    <Router>
    <div className="App">
      <Nav />
      <Switch>
      <Route exact path="/" component={Home} />
      <Route path='/home' component={Home} />
      <Route path="/about" component={About} />
      <Route path="/recipes" component={RecipeList} />
      </Switch>
    </div>
    </Router>
  );
}

export default App;
