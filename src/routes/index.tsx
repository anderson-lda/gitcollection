import React from 'react';
import {Routes, Route} from 'react-router-dom'
import { Dashboard } from '../pages/Dashboard';
import { Repo } from '../pages/Repo';

export const Rotas: React.FC = () => { //FC: function component
  return (
    <Routes>
        <Route element={<Dashboard/>} path="/" /> 
        <Route element={<Repo/>} path="/repositories/:repository" /> {/*+ indica que repository é apenas 1 um parâmetro mesmo com barras */}
    </Routes>
  )
};
