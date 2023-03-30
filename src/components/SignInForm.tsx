import styled from "styled-components";
import { ChangeEvent, FormEvent, useContext, useState } from "react";
import { Link } from "react-router-dom";
import { SignInFormType, SignInResponse } from "../protocols";
import { signInReq } from "../services/authApi";
import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";
import UserContext from "../contexts/userContext";

const Alert = withReactContent(Swal);

export default function SignInForm() {
  const [form, setForm] = useState<SignInFormType>({
    email: "",
    password: "",
  });
  const { setUser, setToken } = useContext(UserContext);

  function storeData(params: SignInResponse) {
    window.localStorage.setItem("Nutrify", JSON.stringify(params));
  }

  async function submitForm(e: FormEvent) {
    e.preventDefault();
    const { email, password } = form;

    if (checkForm()) {
      try {
        const response = await signInReq(email, password);
        storeData(response);
        setUser(response.user);
        setToken(response.token);

        Alert.fire({
          icon: "success",
          background: "#dde5b6",
          timer: 2000,
          text: "Acessado com sucesso!",
        });
      } catch (err) {
        Alert.fire({
          icon: "error",
          background: "#f0ead2",
          timer: 2000,
          text: "E-mail ou senha incorretos!",
        });
      }
    }
  }

  function checkForm() {
    const { email, password } = form;
    if (email.length === 0 || password.length === 0) {
      Alert.fire({
        icon: "warning",
        background: "#f0ead2",
        text: "Verifique os campos e tente novamente!",
        color: "#dda15e",
        confirmButtonColor: "#a98467",
      });
      return false;
    } else {
      return true;
    }
  }

  function handleForm(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value.trim() });
  }

  return (
    <FormContainer>
      <Form id="sign-in-form" onSubmit={submitForm}>
        <h1>Acesse sua conta</h1>
        <FormInput
          placeholder="E-mail"
          type="email"
          name="email"
          onChange={handleForm}
        />
        <FormInput
          placeholder="Senha"
          type="password"
          name="password"
          onChange={handleForm}
        />
        <button type="submit">Entrar</button>
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
