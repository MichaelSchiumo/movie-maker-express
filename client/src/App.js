import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import AddMovies from './components/pages/AddMovies';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Navbar from './components/layout/Navbar';
import Alerts from './components/layout/Alerts';
import MovieState from './context/movie/MovieState';
import AuthState from './context/auth/AuthState';
import AlertState from './context/alert/AlertState';
import PrivateRoute from './components/routing/PrivateRoute';
import setAuthToken from './utils/setAuthToken';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  return (
    <AuthState>
      <MovieState>
        <AlertState>
          <Router>
            <Fragment>
              <Navbar />
              <div className='container'>
                <Alerts />
                <Switch>
                  <PrivateRoute exact path='/' component={Home} />
                  <PrivateRoute
                    exact
                    path='/add_movies'
                    component={AddMovies}
                  />
                  <Route exact path='/register' component={Register} />
                  <Route exact path='/login' component={Login} />
                </Switch>
              </div>
            </Fragment>
          </Router>
        </AlertState>
      </MovieState>
    </AuthState>
  );
};

export default App;
