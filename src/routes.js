import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import './resources/styles.css';

import Home from './component/home';
import Resume from './component/resume';



function Router() {
  return (
    <BrowserRouter>
    <Switch>
      <Route path="/resume" component={Resume}/>
      <Route path="/" component={Home}/>
    </Switch>

     
    </BrowserRouter>
    

  );
}

export default Router;
