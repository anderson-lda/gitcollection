import React from 'react';
import {Routes, Route} from 'react-router-dom'
//import { Dashboard } from '../pages/Dashboard';
//import { Repo } from '../pages/Repo';

const Dashboard = React.lazy(() => 
  import(/* webpackPrefetch: true *//* webpackChunkName: "dashboard" */ '../pages/Dashboard'))
const Repo = React.lazy(() => 
  import(/* webpackPrefetch: true *//* webpackChunkName: "repo" */ '../pages/Repo'))

export const Rotas: React.FC = () => { //FC: function component
  return (
    <React.Suspense fallback={'Loading...'}>{/* com isso, o chunk é dividido e os recursos não são carregados todos de uma vez */}
      <Routes>
          <Route element={<Dashboard/>} path="/" /> 
          <Route element={<Repo/>} path="/repositories/:repository" />
      </Routes>
    </React.Suspense>
  )
};
