import styled from "styled-components";
import { PhysicalAssessmentProps } from "../protocols";
import dayjs from "dayjs";
import "dayjs/locale/pt-br";
import { Link } from "react-router-dom";

export default function PhysicalAssessmentCard({
  data,
}: PhysicalAssessmentProps) {
  return (
    <Link to={`/physical/details/${data?.id}`}>
      <Container>
        <p>
          Modificado em {dayjs(data?.updatedAt).format("DD/MM/YYYY")}: Peso{" "}
          {data?.weight}kg
        </p>
      </Container>
    </Link>
  );
}

const Container = styled.div`
  width: fit-content;
  height: 25px;
  margin: 5px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    color: #6c584c;
    font-size: small;
    cursor: pointer;
  }
`;
