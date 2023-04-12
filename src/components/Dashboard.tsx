import styled from "styled-components";
import Title from "./Title";
import StyledButton from "./StyledButton";
import PatientCard from "./PatientCard";
import { Dispatch, SetStateAction, useState } from "react";
import PatientForm from "./PatientForm";

interface DashbordProps {
  setPatientForm: Dispatch<SetStateAction<boolean>>;
}

export default function Dashboard({ setPatientForm }: DashbordProps) {
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
