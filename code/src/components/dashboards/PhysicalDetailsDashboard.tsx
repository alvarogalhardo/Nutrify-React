import styled from "styled-components";
import StyledDashboard from "./StyledDashboard";
import StyledTitleDiv from "../StyledTitleDiv";
import Title from "../Title";
import StyledButton from "../StyledButton";
import { Link, useParams } from "react-router-dom";
import { IoIosReturnLeft } from "react-icons/io";
import { useContext, useEffect, useState } from "react";
import {
  ConfigType,
  ParamsType,
  PhysicalAssessment,
  PhysicalParamsType,
} from "../../protocols";
import UserContext from "../../contexts/userContext";
import { getPhysicalDetailsReq } from "../../services/physicalApi";

export default function PhysicalDetailsDashboard() {
  const [data, setData] = useState({});
  const { token } = useContext(UserContext);
  const { physicalId } = useParams<keyof PhysicalParamsType>() as PhysicalParamsType;

  const CONFIG: ConfigType = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
console.log(data);

  async function getPhysicalDetails() {
    const result = await getPhysicalDetailsReq(parseInt(physicalId), CONFIG);
    setData(result);
  }

  useEffect(() => {
    getPhysicalDetails();
  }, []);
  return (
    <StyledDashboard>
      <StyledTitleDiv>
        <Title></Title>
        <StyledButton>
          <Link to={`/patient/${data}`}>
            <IoIosReturnLeft />
          </Link>
        </StyledButton>
      </StyledTitleDiv>
    </StyledDashboard>
  );
}
