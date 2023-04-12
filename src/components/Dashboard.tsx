import styled from "styled-components";
import Title from "./Title";
import StyledButton from "./StyledButton";
import PatientCard from "./PatientCard";
import {
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import { getPatientsReq } from "../services/patientApi";
import { ConfigType, Patient } from "../protocols";
import UserContext from "../contexts/userContext";

interface DashbordProps {
  setPatientForm: Dispatch<SetStateAction<boolean>>;
}

export default function Dashboard({ setPatientForm }: DashbordProps) {
  const [data, setData] = useState<Patient[]>([]);
  const { token } = useContext(UserContext);

  const CONFIG: ConfigType = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  async function getData() {
    const patients = await getPatientsReq(CONFIG);
    setData(patients);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <Container>
      <TitleDiv>
        <Title>Pacientes</Title>
        <StyledButton onClick={() => setPatientForm(true)}>
          Novo paciente
        </StyledButton>
      </TitleDiv>
      <PatientDiv>
        {data.length > 0
          ? data.map((patient) => <PatientCard patient={patient} />)
          : null}
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
