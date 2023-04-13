import styled from "styled-components";
import { ConfigType, Patient } from "../protocols";
import { Link } from "react-router-dom";
import dayjs from "dayjs";
import "dayjs/locale/pt-br";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";
import { deletePatientByIdReq } from "../services/patientApi";
import { Dispatch, SetStateAction, useContext } from "react";
import UserContext from "../contexts/userContext";
import RenderContext from "../contexts/renderContext";

interface PatientCardProps {
  patient: Patient;
}

const Alert = withReactContent(Swal);

export default function PatientCard({ patient }: PatientCardProps) {
  const { token } = useContext(UserContext);
  const { render, setRender } = useContext(RenderContext);

  const CONFIG: ConfigType = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  async function deleteCard() {
    Alert.fire({
      title: "Quer mesmo excluir o paciente?",
      background: "#f0ead2",
      showDenyButton: true,
      confirmButtonColor: "#adc178",
      confirmButtonText: "Sim",
      denyButtonText: "Não",
    }).then((result) => {
      if (result.isConfirmed) {
        deletePatientByIdReq(CONFIG, patient.id);
        setRender(!render);
        Alert.fire("Excluído!", "", "success");
      }
    });
  }

  return (
    <Container>
      <StyledContent>
        <Link to={`/patient/${patient.id}`}>
          <h1>{patient.name}</h1>
        </Link>
        <p>Modificado em {dayjs(patient.updatedAt).format("DD/MM/YYYY")}</p>
      </StyledContent>
      <StyledIcon>
        <AiOutlineDelete onClick={() => deleteCard()} />
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
`;
