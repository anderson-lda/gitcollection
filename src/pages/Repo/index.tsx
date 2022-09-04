import React from 'react';
import { Link, useParams } from 'react-router-dom'
import { Header, Issues, RepoInfo } from './styles';
import logo from '../../assets/logo.svg'
import {FiChevronLeft, FiChevronRight} from 'react-icons/fi'
import {api} from '../../services/api' //quando não é exportada como default deve-se colocar com chaves

type RepositoryParams = {
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
  const { repository } = useParams<RepositoryParams>();
  const [rep, setRep] = React.useState<GithubRepository | null>(null);
  const [issues, setIssues] = React.useState<GithubIssue[]>([]);

  React.useEffect(() => {
    api.get(`repos/${repository}`).then(response => setRep(response.data))
    api.get(`repos/${repository}/issues`).then(response => setIssues(response.data))
  }, [repository]);

  return (
    <>
      <Header>
        <img src={logo} alt="GitCollection" />
        <Link to="/">
          <FiChevronLeft />
          Voltar
        </Link>
      </Header>
      {rep && (//só é exibido se houver repositório
      <RepoInfo>
        <header>
          <img src={rep.owner.avatar_url} alt={rep.owner.login} />
          <div>
            <strong>{rep.full_name}</strong>
            <p>{rep.description}</p>
          </div>
        </header>
        <ul>
          <li>
            <strong>{rep.stargazers_count}</strong>
            <span>Stars</span>
          </li>
          <li>
            <strong>{rep.forks_count}</strong>
            <span>Forks</span>
          </li>
          <li>
            <strong>{rep.open_issues_count}</strong>
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
