import { useState } from "react";
import styled from "styled-components";
import Dashboard from "../components/Dashboard";
import Header from "../components/Header";
import PatientForm from "../components/PatientForm";
import StyledScreen from "../components/StyledScreen";

export default function Home() {
  const [patientForm, setPatientForm] = useState<boolean>(false);
  return (
    <>
      <Header />
      <StyledScreen>
        <Dashboard setPatientForm={setPatientForm} />
        {patientForm && <PatientForm setPatientForm={setPatientForm} />}
      </StyledScreen>
    </>
  );
}
