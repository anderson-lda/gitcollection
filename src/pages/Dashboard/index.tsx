import React from 'react';
import { Title, Form, Repos } from './styles'
import logo from '../../assets/logo.svg'
import { FiChevronRight } from 'react-icons/fi'

export const Dashboard: React.FC = () => { //FC: function component
  return (
    <>
      <img src={logo} alt="GitCollection" />
      <Title>Catálogo de Repositórios do GitHub</Title>
      <Form>
        <input placeholder='username/repository_name' />
        <button type='submit'>Buscar</button>
      </Form>
      <Repos>
        <a href="/repositories">
          <img src="https://avatars.githubusercontent.com/u/66919906?v=4" alt="Repositorio" />
          <div>
            <strong>ashowdeveloper/mini-curso-js</strong>
            <p>repositorio de um minicurso de react</p>
          </div>
          <FiChevronRight size={24} />
        </a>
      </Repos>
    </>
  );
};
