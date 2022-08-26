import React from 'react';
import {Switch, Route} from 'react-router-dom'
import { Dashboard } from '../pages/Dashboard';
import { Repo } from '../pages/Repo';

export const Routes: React.FC = () => { //FC: function component
  return (
    <Switch>
        <Route component={Dashboard} path="/" exact /> 
        <Route component={Repo} path="/repositories" /> 
    </Switch>
  )
};
