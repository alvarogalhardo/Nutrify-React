import styled from "styled-components";
import Title from "../Title";
import StyledButton from "../StyledButton";
import PatientCard from "../PatientCard";
import {
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import { getPatientsReq } from "../../services/patientApi";
import { ConfigType, Patient } from "../../protocols";
import UserContext from "../../contexts/userContext";
import { AiOutlinePlus } from "react-icons/ai";
import StyledDashboard from "./StyledDashboard";
import TitleDiv from "../StyledTitleDiv";
import RenderContext from "../../contexts/renderContext";

interface DashbordProps {
  setPatientForm: Dispatch<SetStateAction<boolean>>;
}

export default function Dashboard({ setPatientForm }: DashbordProps) {
  const [data, setData] = useState<Patient[]>([]);
  const { token } = useContext(UserContext);
  const { render } = useContext(RenderContext);

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
  }, [render]);

  return (
    <StyledDashboard>
      <TitleDiv>
        <Title>Pacientes</Title>
        <StyledButton onClick={() => setPatientForm(true)}>
          <AiOutlinePlus />
        </StyledButton>
      </TitleDiv>
      <PatientDiv>
        {data.length > 0
          ? data.map((patient) => (
              <PatientCard patient={patient} key={patient.id} />
            ))
          : null}
      </PatientDiv>
    </StyledDashboard>
  );
}

const PatientDiv = styled.div`
  display: flex;
  flex-direction: column;
`;
