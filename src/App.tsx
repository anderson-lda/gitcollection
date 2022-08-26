import React from 'react';
import {BrowserRouter} from 'react-router-dom' //roteamento de aplicações web
import { Routes } from './routes';

const App: React.FC = () => { //FC: function component
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
};

export default App; //exportando como default torna possível mudar o nome posteriormente
