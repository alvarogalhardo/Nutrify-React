import styled from "styled-components";
import { Patient } from "../protocols";
import { Link } from "react-router-dom";
import dayjs from "dayjs";
import "dayjs/locale/pt-br";
import { AiOutlineEdit } from "react-icons/ai";

interface PatientCardProps {
  patient: Patient;
}

export default function PatientCard({ patient }: PatientCardProps) {
  return (
    <Container>
      <StyledContent>
        <Link to={`/patient/${patient.id}`}>
          <h1>{patient.name}</h1>
        </Link>
        <p>Modificado em {dayjs(patient.updatedAt).format("DD/MM/YYYY")}</p>
      </StyledContent>
      <StyledIcon>
        <AiOutlineEdit />
      </StyledIcon>
    </Container>
  );
}

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  a {
    max-width: fit-content;
  }
  h1 {
    font-size: 23px;
    cursor: pointer;
    max-width: fit-content;
    margin-bottom: 7px;
  }
  p {
    font-size: small;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 15px 10px 10px;
  color: #6c584c;
  min-height: fit-content;
  width: 100%;
  border-radius: 5px;
  margin-bottom: 10px;
  background-color: #fefae0;
  align-items: center;
`;

const StyledIcon = styled.button`
  font-size: 24px;
  cursor: pointer;
`
