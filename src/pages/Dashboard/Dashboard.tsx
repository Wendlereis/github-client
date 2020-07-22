import React from "react";
import { FiChevronRight } from "react-icons/fi";
import logo from "../../assets/images/svg/logo.svg";

import { Title, Form, Repositories } from "./styles";

const Dashboard: React.FC = () => (
  <>
    <img src={logo} alt="Github explorer" />
    <Title>Explore repositórios no Github.</Title>

    <Form>
      <input type="text" placeholder="Digite o nome do repositório" />
      <button type="submit">Pesquisar</button>
    </Form>

    <Repositories>
      <a href="aa">
        <img
          src="https://avatars0.githubusercontent.com/u/6570553?s=460&u=363a4bb79dea480907f1fe6909a0e63247ed9b74&v=4"
          alt="blabla"
        />
        <div>
          <strong>Bla Bla</strong>
          <p>Descricao top</p>
        </div>

        <FiChevronRight />
      </a>

      <a href="aa">
        <img
          src="https://avatars0.githubusercontent.com/u/6570553?s=460&u=363a4bb79dea480907f1fe6909a0e63247ed9b74&v=4"
          alt="blabla"
        />
        <div>
          <strong>Bla Bla</strong>
          <p>Descricao top</p>
        </div>

        <FiChevronRight />
      </a>

      <a href="aa">
        <img
          src="https://avatars0.githubusercontent.com/u/6570553?s=460&u=363a4bb79dea480907f1fe6909a0e63247ed9b74&v=4"
          alt="blabla"
        />
        <div>
          <strong>Bla Bla</strong>
          <p>Descricao top</p>
        </div>

        <FiChevronRight />
      </a>
    </Repositories>
  </>
);

export default Dashboard;
