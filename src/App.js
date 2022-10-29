import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Header } from './components/common/header/Header';
import "./App.css"
// import Login from './components/login/Login';
// import Register from './components/register/Register';
import { Pages } from './pages/Pages';

function App() {
  return (
    <div className='App'>
      <Router>
        <Header/>
        <Switch>
          {/* <Route path='/login'>
            <Login />
          </Route>
          <Route path='/register'>
            <Register />
          </Route> */}
          <Route path='/'>
            <Pages />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
