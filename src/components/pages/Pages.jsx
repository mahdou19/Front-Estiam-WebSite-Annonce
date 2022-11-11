import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './login/Login';
import { Products } from './products/Products';
import Register from './register/Register';
import MyProfile from './MyProfile/MyProfile';



export const Pages = () => {
  return (

       <Switch>
          <Route path='/' exact component={Products}/>
          <Route path='/login' exact component={Login}/>
          <Route path='/registration' exact component={Register}/>
          <Route path='/MyProfile' exact component={MyProfile}/>
        </Switch>
  );
};
