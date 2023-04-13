import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import Header from "../components/Header";
import StyledDashboard from "../components/StyledDashboard";
import StyledScreen from "../components/StyledScreen";
import StyledTitleDiv from "../components/StyledTitleDiv";
import UserContext from "../contexts/userContext";
import { ConfigType, ParamsType, Patient } from "../protocols";
import { getPatientByIdReq } from "../services/patientApi";
import { IoIosReturnLeft } from "react-icons/io";
import StyledButton from "../components/StyledButton";
import dayjs from "dayjs";
import 'dayjs/locale/pt-br'

export default function PatientScreen() {
  const { id } = useParams<keyof ParamsType>() as ParamsType;
  const [data, setData] = useState<Patient | null>();
  const { token } = useContext(UserContext);

  const CONFIG: ConfigType = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  async function getData(id: number) {
    const patient = await getPatientByIdReq(CONFIG, id);
    setData(patient);
  }
  console.log(data);

  useEffect(() => {
    getData(parseInt(id));
  }, []);
  return (
    <>
      <Header />
      <StyledScreen>
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
        </StyledDashboard>
      </StyledScreen>
    </>
  );
}

const Title = styled.h1`
  font-size: 40px;
  font-weight: bold;
  color: #283618;
  height: 100%;
`;

const Infos = styled.div`
  display: flex;
  justify-content: space-between;
  h1 {
    color: #6c584c;
  }
`;
