import React from 'react';
import {BrowserRouter} from 'react-router-dom' //roteamento de aplicações web
import { Rotas } from './routes';
import { GlobalStyle } from './styles/global';

const App: React.FC = () => { //FC: function component
  return (
    <>
      <BrowserRouter>
        <Rotas />
      </BrowserRouter>
      <GlobalStyle />
    </>
  );
};

export default App; //exportando como default torna possível mudar o nome posteriormente
