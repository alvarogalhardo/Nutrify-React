import dayjs from "dayjs";
import { IoIosReturnLeft } from "react-icons/io";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { PatientProps } from "../protocols";
import PhysicalAssessmentForm from "./PhysicalAssessmentForm";
import StyledButton from "./StyledButton";
import StyledDashboard from "./StyledDashboard";
import StyledTitleDiv from "./StyledTitleDiv";

export default function PhysicalAssessmentDashboard({ data }: PatientProps) {
  
  return (
    <StyledDashboard>
      <StyledTitleDiv>
        <Title>{data?.name}</Title>
        <StyledButton>
          <Link to={`/patient/${data?.id}`}>
            <IoIosReturnLeft />
          </Link>
        </StyledButton>
      </StyledTitleDiv>
      <Infos>
        <h1>{data?.email}</h1>
        <h1>{data?.telephone}</h1>
        <h1>{dayjs(data?.birthday).format("DD/MM/YYYY")}</h1>
      </Infos>
      <PhysicalAssessmentForm patientId={data?.id}/>
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


const Title = styled.h1`
  font-size: 40px;
  font-weight: bold;
  color: #283618;
  height: 100%;
`;
