import styled from "styled-components";
import Title from "./Title";
import StyledButton from "./StyledButton";
import PatientCard from "./PatientCard";
import { useState } from "react";
import PatientForm from "./PatientForm";

export default function Dashboard() {
  const [patientForm, setPatientForm] = useState<boolean>(false);
  console.log(patientForm);
  

  return (
    <Container>
      <TitleDiv>
        <Title>Pacientes</Title>
        <StyledButton onClick={() => setPatientForm(true)}>
          Novo paciente
        </StyledButton>
      </TitleDiv>
      <PatientDiv>
        <PatientCard />
      </PatientDiv>
      {patientForm && <PatientForm setPatientForm={setPatientForm}/>}
    </Container>
  );
}

const Container = styled.div`
  background-color: #f0ead2;
  width: 90%;
  height: 90%;
  border-radius: 20px;
  border: 1px solid #adc178;
  padding: 20px;
`;

const TitleDiv = styled.div`
  height: 15%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const PatientDiv = styled.div`
  display: flex;
  flex-direction: column;
`;
