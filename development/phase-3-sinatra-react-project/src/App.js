import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import DirectorList from './components/DirectorList';
import NewDirector from './components/NewDirector';
import Home from './components/Home';
import MovieList from './components/MovieList';
import Nav from './components/Nav';
import PageNotFound from './components/PageNotFound';
import DirectorDetails from './components/DirectorDetails';
import MovieDetails from './components/MovieDetails';
import NewMovie from './components/NewMovie';
import EditDirector from './components/EditDirector';

function App() {
return (

    <Router>
        <div className="App">
          <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/directors" component={DirectorList} />
          <Route exact path="/directors/new" component={NewDirector} />
          <Route exact path="/directors/:id" component={DirectorDetails} />
          <Route exact path="/directors/:id/edit" component={EditDirector} />
          <Route exact path="/movies" component={MovieList} />
          <Route exact path="/directors/:directorId/movies/new" component={NewMovie} />
          <Route exact path="/movies/:id" component={MovieDetails} />
          <Route component={PageNotFound} />

        </Switch>
    </div>
      </Router>
     
  );
}

export default App;
