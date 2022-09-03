import React from 'react';
import {Link, useRouteMatch} from 'react-router-dom'
import { Header, Issues, RepoInfo } from './styles';
import logo from '../../assets/logo.svg'
import {FiChevronLeft, FiChevronRight} from 'react-icons/fi'
import {api} from '../../services/api' //quando não é exportada como default deve-se colocar com chaves

interface RepositoryParams {
  repository: string;
}

interface GithubRepository {
  full_name: string;
  description: string;
  forks_count: number;
  open_issues_count: number;
  stargazers_count: number;
  owner: {
    login: string;
    avatar_url: string;
  }
}

interface GithubIssue {
  id: number;
  titulo: string;
  html_url: string;
  user: {
    login: string;
  }
}

export const Repo: React.FC = () => { //FC: function component
  const { params } = useRouteMatch<RepositoryParams>();
  const [repository, setRepository] = React.useState<GithubRepository | null>(null);
  const [issues, setIssues] = React.useState<GithubIssue[]>([]);

  React.useEffect(() => {
    api.get(`repos/${params.repository}`).then(response => setRepository(response.data))
    api.get(`repos/${params.repository}/issues`).then(response => setIssues(response.data))
  }, [params.repository]);

  return (
    <>
      <Header>
        <img src={logo} alt="GitCollection" />
        <Link to="/">
          <FiChevronLeft />
          Voltar
        </Link>
      </Header>
      {repository && (//só é exibido se houver repositório
      <RepoInfo>
        <header>
          <img src={repository.owner.avatar_url} alt={repository.owner.login} />
          <div>
            <strong>{repository.full_name}</strong>
            <p>{repository.description}</p>
          </div>
        </header>
        <ul>
          <li>
            <strong>{repository.stargazers_count}</strong>
            <span>Stars</span>
          </li>
          <li>
            <strong>{repository.forks_count}</strong>
            <span>Forks</span>
          </li>
          <li>
            <strong>{repository.open_issues_count}</strong>
            <span>Issues Abertas</span>
          </li>
        </ul>
      </RepoInfo>
      )}
      <Issues>
        {issues.map(issue => (
        <a href={issue.html_url} key={issue.id}>
          <div>
            <strong>{issue.titulo}</strong>
            <p>{issue.user.login}</p>
          </div>
          <FiChevronRight size={20} />
        </a>
        ))}
      </Issues>
    </>
  );
};
