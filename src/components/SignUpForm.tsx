import styled from "styled-components";
import { ChangeEvent, FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { Role, SignUpFormType } from "../protocols";
import { signUpReq } from "../services/authApi";

const Alert = withReactContent(Swal);

export default function SignUpForm() {
  const [form, setForm] = useState<SignUpFormType>({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: Role.NUTRITIONIST,
  });

  const navigate = useNavigate();

  async function submitForm(e: FormEvent) {
    const { name, email, password } = form;
    e.preventDefault();
    if (checkForm()) {
      delete form.confirmPassword;
      try {
        await signUpReq(name, email, password);
        Alert.fire({
          icon: "success",
          background: "#dde5b6",
          timer: 2000,
          text: "Cadastrado com sucesso!",
        });
        navigate("/");
      } catch (err) {
        Alert.fire({
          icon: "error",
          background: "#f0ead2",
          timer: 2000,
          text: "E-mail já cadastrado!",
        });
      }
    }
  }

  function handleForm(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value.trim() });
  }

  function handleSelect(e: ChangeEvent<HTMLSelectElement>) {
    const { value } = e.target;
    if (value === "NUTRITIONIST") {
      setForm({ ...form, role: Role.NUTRITIONIST });
    }
    if (value === "PATIENT") {
      setForm({ ...form, role: Role.PATIENT });
    }
  }

  function checkForm() {
    const { name, email, password, confirmPassword } = form;
    if (
      email.length === 0 ||
      name.length === 0 ||
      password.length === 0 ||
      confirmPassword?.length === 0 ||
      password !== confirmPassword
    ) {
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

  return (
    <FormContainer>
      <Form id="sign-up-form" onSubmit={submitForm}>
        <h1>Cadastre sua conta</h1>
        <FormInput
          type="text"
          placeholder="Nome"
          name="name"
          onChange={handleForm}
        />
        <FormInput
          type="email"
          placeholder="E-mail"
          name="email"
          onChange={handleForm}
        />
        <FormInput
          type="password"
          placeholder="Senha"
          name="password"
          onChange={handleForm}
        />
        <FormInput
          type="password"
          placeholder="Confirme a senha"
          name="confirmPassword"
          onChange={handleForm}
        />
        <label htmlFor="role">
          {" "}
          Selecione seu papel
          <Select
            name="role"
            id="role"
            form="sign-up-form"
            defaultValue={Role.NUTRITIONIST}
            onChange={handleSelect}
          >
            <option value={Role.NUTRITIONIST}>Nutricionista</option>
            <option value={Role.PATIENT}>Paciente</option>
          </Select>
        </label>

        <button type="submit">Cadastrar</button>
        <p>
          Já está cadastrado? <Link to={"/"}>Clique aqui</Link>
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
  }
  p {
    font-size: 12px;
    color: #a98467;
    a {
      text-decoration: underline;
    }
  }
  label {
    font-size: 11px;
    margin: 5px 0;
    color: #6c584c;
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

const Select = styled.select`
  cursor: pointer;
  color: #a98467;
  background-color: #f0ead2;
  font-family: "Roboto", sans-serif;
  font-size: small;
  height: 30px;
  border-radius: 5px;
  margin: 5px 0;
`;
