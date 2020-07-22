import styled from "styled-components";
import { shade } from "polished";

export const Title = styled.h1`
  font-size: 48px;
  line-height: 56px;
  max-width: 450px;
  margin-top: 80px;
  color: #3a3a3a;
`;

export const Form = styled.form`
  display: flex;
  margin-top: 40px;
  max-width: 715px;

  input {
    flex: 1;
    height: 70px;
    padding: 0 24px;
    border: 0;
    border-radius: 5px 0 0 5px;
    color: "#3a3a3a";

    &::placeholder {
      color: #d3d3d3;
    }
  }

  button {
    width: 210px;
    height: 70px;
    background-color: #04d361;
    border: 0;
    border-radius: 0 5px 5px 0;
    color: #ffffff;
    font-weight: bold;
    transition: background-color 0.3s;

    &:hover {
      background-color: ${shade(0.2, "#04d361")};
    }
  }
`;

export const Repositories = styled.div`
  margin-top: 80px;
  margin-bottom: 96px;
  max-width: 715px;

  a {
    display: flex;
    align-items: center;
    background-color: #ffffff;
    border-radius: 5px;
    text-decoration: none;
    padding: 25px;
    width: 100%;

    transition: transform 0.3s;

    & + a {
      margin-top: 16px;
    }

    &:hover {
      transform: translateX(10px);
    }

    img {
      height: 64px;
      border-radius: 50%;
    }

    div {
      margin-left: 16px;

      strong: {
        font-size: 20px;
        color: #3d3d4d;
      }

      p {
        font-size: 18px;
        color: #a8a8b3;
        margin-top: 4px;
      }
    }

    svg {
      margin-left: auto;
      color: #cbcbd6;
    }
  }
`;
