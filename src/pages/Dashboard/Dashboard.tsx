import React, { useState, FormEvent, useEffect } from "react";
import { Link } from "react-router-dom";
import { FiChevronRight } from "react-icons/fi";
import logo from "../../assets/images/svg/logo.svg";

import githubAPI from "../../services";

import { Title, Form, Repositories, FormError } from "./styles";

interface Repository {
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  };
}

const Dashboard: React.FC = () => {
  const [repo, setRepo] = useState("");
  const [formError, setFormError] = useState("");

  const [repositories, setRepositories] = useState<Repository[]>(() => {
    const storagedRepositories = localStorage.getItem("@GithubExplorer:repositories");

    if (storagedRepositories) {
      return JSON.parse(storagedRepositories);
    }

    return [];
  });

  useEffect(() => {
    localStorage.setItem("@GithubExplorer:repositories", JSON.stringify(repositories));
  }, [repositories]);

  async function handleAddRepository(event: FormEvent<HTMLFormElement>): Promise<void> {
    event.preventDefault();

    if (!repo) {
      setFormError("Digite o usuario/nome-do-repositorio");
      return;
    }

    try {
      const response = await githubAPI.get<Repository>(`/repos/${repo}`);

      const repository = response.data;

      setRepositories([...repositories, repository]);
      setFormError("");
      setRepo("");
    } catch {
      setFormError("Erro ao buscar repositório");
    }
  }

  return (
    <>
      <img src={logo} alt="Github explorer" />
      <Title>Explore repositórios no Github.</Title>

      <Form hasError={Boolean(formError)} onSubmit={handleAddRepository}>
        <input
          value={repo}
          onChange={(e) => setRepo(e.target.value)}
          placeholder="Digite usuario/nome-do-repositorio"
        />
        <button type="submit">Pesquisar</button>
      </Form>

      {formError && <FormError>{formError}</FormError>}

      <Repositories>
        {repositories.map((repository) => (
          <Link key={repository.full_name} to={`/repository/${repository.full_name}`}>
            <img src={repository.owner.avatar_url} alt="" />
            <div>
              <strong>{repository.full_name}</strong>
              <p>{repository.description}</p>
            </div>

            <FiChevronRight />
          </Link>
        ))}
      </Repositories>
    </>
  );
};

export default Dashboard;
