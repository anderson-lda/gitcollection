import React from 'react';
import { Title, Form, Repos, Error } from './styles'
import logo from '../../assets/logo.svg'
import { FiChevronRight } from 'react-icons/fi'
import { api } from '../../services/api';

interface GithubRepository {
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  }
}

export const Dashboard: React.FC = () => { //FC: function component
  const [repos, setRepos] = React.useState<GithubRepository[]>(() => {
    const storageRepos = localStorage.getItem('@GitcCollection:repositories');
    if (storageRepos) {
      return JSON.parse(storageRepos);
    }
    return [];
  }); //estado criado para armazenar informação
  const [newRepo, setNewRepo] = React.useState('')
  const [inputError, setInputError] = React.useState('');

  React.useEffect(() => {
    localStorage.setItem('@GitcCollection:repositories',JSON.stringify(repos))
  },[repos]);//[] vazio implica que a função só será executada quando o Dashboard for criado

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>): void {
    setNewRepo(event.target.value);
  }

  async function handleAddRepo(event: React.FormEvent<HTMLFormElement>): Promise<void> { //é assinc, então retorna uma promessa
    event.preventDefault(); //evita a ação padrão do form de recarregar a página na submissão
    if (!newRepo) {
      setInputError('Informe o username/repositorio')
      return
    }
    const response = await api.get<GithubRepository>(`repos/${newRepo}`);

    const repositorio = response.data;

    setRepos([...repos,repositorio]); //...repos pega tudo que já tinha antes no array
    setNewRepo('');
  }

  return (
    <>
      <img src={logo} alt="GitCollection" />
      <Title>Catálogo de Repositórios do GitHub</Title>
      <Form hasError={Boolean(inputError)} onSubmit={handleAddRepo}>
        <input placeholder='username/repository_name' onChange={handleInputChange} />
        <button type='submit'>Buscar</button>
      </Form>
      {inputError && <Error>{inputError}</Error>/*se houver um inputError mostra-se o Error*/}
      <Repos>
        {repos.map(repository => (
          <a href="/repositories" key={repository.full_name}>
            <img src={repository.owner.avatar_url} alt={repository.owner.login} />
            <div>
              <strong>{repository.full_name}</strong>
             <p>{repository.description}</p>
             </div>
            <FiChevronRight size={24} />
          </a>
        ))}
      </Repos>
    </>
  );
};
