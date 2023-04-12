import { useState } from "react";
import styled from "styled-components";
import Dashboard from "../components/Dashboard";
import Header from "../components/Header";
import PatientForm from "../components/PatientForm";

export default function Home() {
  const [patientForm, setPatientForm] = useState<boolean>(false);

  return (
    <>
      <Header />
      <Container>
        <Dashboard setPatientForm={setPatientForm} />
      {patientForm && <PatientForm setPatientForm={setPatientForm} />}

      </Container>

    </>
  );
}

const Container = styled.div`
  padding-top: 60px;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;
