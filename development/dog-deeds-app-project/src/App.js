import './App.css';
import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Nav from './components/Nav';
import DogList from './components/DogList';
import DeedList from './components/DeedList';
import Home from './components/Home';
import ErrorPage from './components/ErrorPage';
import AddDog from './AddDog';



function App() {
  return (
    <Router>
    <div className="App">
      <Nav />
      <Switch>

        <Route exact path="/" component={Home} />
        <Route exact path="/dogs" component={DogList} />
        <Route exact path="/dogs/add" component={AddDog} />
        <Route exact path="/deeds" component={DeedList} />
        <Route component={ErrorPage} />

     </Switch>
    </div>
    </Router>
  );
}

export default App;
