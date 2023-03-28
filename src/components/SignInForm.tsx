import styled from "styled-components";
import { ChangeEvent, useState } from "react";
import { Link } from "react-router-dom";

export default function SignInForm() {
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();

  return (
    <FormContainer>
      <Form>
        <h1>Acesse sua conta</h1>
        <FormInput
          placeholder="E-mail"
          onChange={(e) => setEmail(e.target.value)}
        />
        <FormInput
          placeholder="Senha"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button>Entrar</button>
        <p>
          Não está cadastrado? <Link to={"/signup"}>Clique aqui</Link>
        </p>
      </Form>
    </FormContainer>
  );
}

const FormContainer = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: "Raleway", sans-serif;
`;

const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  h1 {
    font-size: 25px;
    color: #6c584c;
  }
  button {
    margin: 10px 0;
    width: 100%;
    height: 30px;
    background-color: #6c584c;
    border-radius: 30px;
    box-shadow: 1px 1px 5px 0px rgba(40, 54, 24, 1);
    color: #dda15e;
    font-family: "Raleway", sans-serif;
    :focus {
      box-shadow: inset 1px 1px 5px 0px rgba(40, 54, 24, 1);
    }
  }
  p {
    font-size: 12px;
    color: #a98467;
    a {
      text-decoration: underline;
    }
  }
`;

const FormInput = styled.input`
  background-color: #f0ead2;
  margin: 5px 0;
  border-radius: 5px;
  height: 30px;
  ::placeholder {
    font-size: small;
    color: #a98467;
  }
`;
