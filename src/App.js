import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/home/Home';
import Login from './components/login/Login';
import Navbar from './components/Navbar/Navbar';
import Register from './components/register/Register';

function App() {
  return (
    <div className='App'>
      <Router>
        <Navbar/>
        <Switch>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/register'>
            <Register />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
