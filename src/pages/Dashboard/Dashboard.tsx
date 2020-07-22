import React, { useState, FormEvent } from "react";
import { FiChevronRight } from "react-icons/fi";
import logo from "../../assets/images/svg/logo.svg";

import githubAPI from "../../services";

import { Title, Form, Repositories } from "./styles";

interface Repository {
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  };
}

const Dashboard: React.FC = () => {
  const [repositories, setRepositories] = useState<Repository[]>([]);
  const [repo, setRepo] = useState("");

  async function handleAddRepository(event: FormEvent<HTMLFormElement>): Promise<void> {
    event.preventDefault();

    const response = await githubAPI.get<Repository>(`/repos/${repo}`);

    const repository = response.data;

    setRepositories([...repositories, repository]);
    setRepo("");
  }

  return (
    <>
      <img src={logo} alt="Github explorer" />
      <Title>Explore repositórios no Github.</Title>

      <Form onSubmit={handleAddRepository}>
        <input
          value={repo}
          onChange={(e) => setRepo(e.target.value)}
          placeholder="Digite usuario/nome-do-repositorio"
        />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        {repositories.map((repository) => (
          <a key={repository.full_name} href="/">
            <img src={repository.owner.avatar_url} alt="" />
            <div>
              <strong>{repository.full_name}</strong>
              <p>{repository.description}</p>
            </div>

            <FiChevronRight />
          </a>
        ))}
      </Repositories>
    </>
  );
};

export default Dashboard;
