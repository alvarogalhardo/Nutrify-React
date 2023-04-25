import { useContext, useEffect, useState } from "react";
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";
import styled from "styled-components";
import { ConfigType, ParamsType, Patient, PatientProps } from "../../protocols";
import { getPhysicalReq } from "../../services/physicalApi";
import UserContext from "../../contexts/userContext";
import { useParams } from "react-router-dom";
import PhysicalAssessmentCard from "../PhysicalAssessmentCard";

export default function PhysicalDashboard() {
  const [data, setData] = useState([]);
  const [showCards, setShowCards] = useState(false);
  const { id } = useParams<keyof ParamsType>() as ParamsType;
  const { token } = useContext(UserContext);

  const CONFIG: ConfigType = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  async function getData() {
    const result = await getPhysicalReq(parseInt(id), CONFIG);
    setData(result);
  }

  useEffect(() => {
    getData();
  }, []);
  return (
    <Content showCards={showCards}>
      {showCards === false ? (
        <h1>
          Avaliações antropométricas:
          <button>
            <AiOutlineArrowDown onClick={() => setShowCards(true)} />
          </button>
        </h1>
      ) : (
        <>
          <h1>
            Avaliações antropométricas:
            <button>
              <AiOutlineArrowUp onClick={() => setShowCards(false)} />
            </button>
          </h1>
          <CardDiv>
            {data.map((p) => (
              <PhysicalAssessmentCard data={p} key={p}/>
            ))}
          </CardDiv>
        </>
      )}
    </Content>
  );
}

type ContainerProps = {
  showCards: boolean;
};

const Content = styled.div<ContainerProps>`
  height: fit-content;
  background-color: ${(props) => (props.showCards ? "#fefae0" : "#f0ead2")};
  border-radius: 15px;
  padding: 10px;
  h1 {
    display: flex;
    justify-content: space-between;
    color: #283618;
    
  }
  button {
      cursor: pointer
      vertical-align: middle
    }
`;

const CardDiv = styled.div`
  display: flex;
  flex-direction: column;
`;
