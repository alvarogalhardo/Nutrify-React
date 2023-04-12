import {
  ChangeEvent,
  Dispatch,
  FocusEvent,
  FormEvent,
  SetStateAction,
  SyntheticEvent,
  useContext,
  useRef,
  useState,
} from "react";
import { AiOutlineClose } from "react-icons/ai";
import styled from "styled-components";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import BlurContext from "../contexts/blurContext";
import { ConfigType, Gender, PatientFormType } from "../protocols";
import UserContext from "../contexts/userContext";
import StyledButton from "./StyledButton";
import { postPatientReq } from "../services/patientApi";
interface PatientFormProps {
  setPatientForm: Dispatch<SetStateAction<boolean>>;
}

const Alert = withReactContent(Swal);

export default function PatientForm({ setPatientForm }: PatientFormProps) {
  const { setBlurIntensity } = useContext(BlurContext);
  const [form, setForm] = useState<PatientFormType>({
    name: "",
    email: "",
    telephone: "",
    birthday: "",
    gender: Gender.MALE,
  });

  const formRef = useRef<HTMLFormElement>(null);

  const { user, token } = useContext(UserContext);

  const CONFIG: ConfigType = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  function handleBlur(e: FocusEvent<HTMLFormElement>) {
    if (e.target.form !== formRef.current) {
      setBlurIntensity(0);
      setPatientForm(false);
    }
    e.preventDefault();
    e.stopPropagation();
  }

  function handleFocus(e: SyntheticEvent<HTMLFormElement>) {
    setBlurIntensity(10);
    formRef.current?.focus();
  }

  async function submitForm(e: FormEvent) {
    e.preventDefault();
    if (checkForm()) {
      try {
        const data = {
          ...form,
          userId: user.id,
          birthday: new Date(form.birthday).toISOString(),
        };
        console.log(data, "data");
        const response = await postPatientReq(data,CONFIG);
        console.log(response);

        Alert.fire({
          icon: "success",
          background: "#dde5b6",
          timer: 2000,
          text: "Paciente criado com sucesso!",
        });
      } catch (err) {
        console.log(err);
        Alert.fire({
          icon: "error",
          background: "#f0ead2",
          timer: 2000,
          text: "Algo deu errado, preencha os campos e tente novamente",
        });
      }
    }
  }

  function checkForm() {
    const { name, telephone, email } = form;
    if (name.length === 0 || telephone.length === 0 || email.length === 0) {
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

  function handleCloseClick() {
    setPatientForm(false);
    setBlurIntensity(0);
  }

  function handleSelect(e: ChangeEvent<HTMLSelectElement>) {
    const { value } = e.target;
    if (value === "MALE") {
      setForm({ ...form, gender: Gender.MALE });
    }
    if (value === "FEMALE") {
      setForm({ ...form, gender: Gender.FEMALE });
    }
  }

  function handleTelephoneChange(e: ChangeEvent<HTMLInputElement>) {
    const cleanedValue = e.target.value.replace(/\D/g, "");
    const formattedValue = cleanedValue.replace(
      /(\d{2})(\d{0,5})(\d{0,4})/,
      (_, p1: string, p2: string, p3: string) => {
        let formatted = "";
        if (p1) formatted += p1;
        if (p2) formatted += " " + p2;
        if (p3) formatted += "-" + p3;
        return formatted;
      }
    );
    setForm({ ...form, telephone: formattedValue });
  }

  return (
    <StyledForm
      id="patient-form"
      onBlur={handleBlur}
      onFocus={handleFocus}
      onSubmit={submitForm}
      ref={formRef}
    >
      <StyledDiv>
        <h1>Novo paciente</h1>
        <button onClick={handleCloseClick}>
          <AiOutlineClose className="react-icons" />
        </button>
      </StyledDiv>

      <StyledDiv>
        <NameInput
          id="name-input"
          type="text"
          placeholder="Nome completo"
          name="name"
          onChange={handleForm}
          required
          autoFocus
        />
      </StyledDiv>
      <StyledDiv>
        <Input
          type="text"
          placeholder="Telefone"
          onChange={handleTelephoneChange}
          name="telephone"
          required
          maxLength={11}
        />
      </StyledDiv>
      <StyledDiv>
        <Input
          type="email"
          placeholder="E-mail"
          onChange={handleForm}
          name="email"
          required
        />
      </StyledDiv>
      <LabelDiv>
        <label htmlFor="birthday-select">Selecione a data de nascimento:</label>
        <DateInput
          type="date"
          placeholder="Data de nascimento"
          id="birthday-select"
          onChange={handleForm}
          name="birthday"
          required
        />
      </LabelDiv>
      <LabelDiv>
        <label htmlFor="gender-select">Selecione o gênero:</label>
        <Select
          name="gender"
          id="gender-select"
          required
          onChange={handleSelect}
        >
          <option value="MALE">Masculino</option>
          <option value="FEMALE">Feminino</option>
        </Select>
      </LabelDiv>
      <StyledButton type="submit">Adicionar</StyledButton>
    </StyledForm>
  );
}

const StyledForm = styled.form`
  background-color: #dde5b6;
  position: absolute;
  z-index: 1000;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 40vw;
  height: 70vh;
  border-radius: 20px;
  padding: 10px 30px;
  button {
    cursor: pointer;
  }
  h1 {
    font-size: 30px;
    margin: 10px 0;
    color: #283618;
    height: 20%;
    display: flex;
    align-items: center;
  }
  ::placeholder {
    padding: 0 5px;
  }
`;

const NameInput = styled.input`
  background-color: #fefae0;
  height: 100%;
  border-radius: 5px;
  font-family: "Raleway", sans-serif;
  font-size: normal;
  color: #6c584c;
  width: 100%;
  height: 100%;
`;

const Input = styled.input`
  background-color: #fefae0;
  height: 100%;
  border-radius: 5px;
  font-family: "Raleway", sans-serif;
  font-size: normal;
  color: #6c584c;
  width: 40%;
  height: 100%;
`;

const Select = styled.select`
  background-color: #fefae0;
  height: 100%;
  border-radius: 5px;
  font-family: "Raleway", sans-serif;
  font-size: normal;
  color: #6c584c;
  width: 40%;
  height: 40px;
  padding: 2px;
`;

const DateInput = styled.input`
  background-color: #fefae0;
  height: 100%;
  border-radius: 5px;
  font-family: "Raleway", sans-serif;
  font-size: normal;
  color: #6c584c;
  width: 40%;
  height: 40px;
  padding: 2px;
`;

const LabelDiv = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-bottom: 15px;
  label {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: space-around;
    font-size: 17px;
    color: #283618;
  }
`;

const StyledDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 30px;
  margin-bottom: 15px;
`;
