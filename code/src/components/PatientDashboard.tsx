import dayjs from "dayjs";
import { IoIosReturnLeft } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import StyledButton from "./StyledButton";
import StyledDashboard from "./StyledDashboard";
import StyledTitleDiv from "./StyledTitleDiv";
import "dayjs/locale/pt-br";
import { Patient, PatientProps } from "../protocols";

const Alert = withReactContent(Swal);

export default function PatientDashboard({ data }: PatientProps) {
  const navigate = useNavigate();
  function soon() {
    Alert.fire({
      icon: "info",
      text: "Em breve...",
      timer: 2000,
      showConfirmButton: false,
      background: "#f0ead2",
    });
  }
  return (
    <StyledDashboard>
      <StyledTitleDiv>
        <Title>{data?.name}</Title>
        <StyledButton>
          <Link to="/">
            <IoIosReturnLeft />
          </Link>
        </StyledButton>
      </StyledTitleDiv>
      <Infos>
        <h1>{data?.email}</h1>
        <h1>{data?.telephone}</h1>
        <h1>{dayjs(data?.birthday).format("DD/MM/YYYY")}</h1>
      </Infos>
      <ButtonDiv>
        <Button onClick={() => navigate(`/physical/${data?.id}`)}>
          Criar avaliação antropométrica
        </Button>
        <Button onClick={soon}>Criar planejamento alimentar</Button>
        <Button onClick={soon}>Criar anamnese</Button>
      </ButtonDiv>
    </StyledDashboard>
  );
}

const Infos = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  h1 {
    color: #6c584c;
  }
  @media (max-width: 700px) {
    flex-direction: column;
  }
`;

const ButtonDiv = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 800px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Button = styled.button`
  font: inherit;
  color: #fefae0;
  background-color: #283618;
  width: 250px;
  height: 70px;
  border-radius: 10px;
  cursor: pointer;
  margin-bottom: 10px;
  @media (max-width: 800px) {
    width: 100%;
  }
`;

const Title = styled.h1`
  font-size: 40px;
  font-weight: bold;
  color: #283618;
  height: 100%;
`;
