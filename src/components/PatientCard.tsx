import styled from "styled-components";
import { Patient } from "../protocols";
import dayjs from "dayjs";
import "dayjs/locale/pt-br";

interface PatientCardProps {
  patient: Patient;
}

export default function PatientCard({ patient }: PatientCardProps) {
  return (
    <Container>
      <h1>{patient.name}</h1>
      <p>Modificado em {dayjs(patient.updatedAt).format("DD/MM/YYYY")}</p>
    </Container>
  );
}

const Container = styled.div`
  color: #6c584c;
  height: 80px;
  width: 100%;
  margin-bottom: 10px;
  background-color: #fefae0;
  border-radius: 5px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  h1 {
    font-size: 23px;
    cursor: pointer;
    max-width: fit-content;
  }
`;
