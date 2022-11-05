import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './login/Login';
import { Products } from './products/Products';
import Register from './register/Register';



export const Pages = () => {
  return (

       <Switch>
          <Route path='/' exact component={Products}/>
          <Route path='/login' exact component={Login}/>
          <Route path='/register' exact component={Register}/>
            
        </Switch>
  );
};
