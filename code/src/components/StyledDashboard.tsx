import styled from "styled-components";

const StyledDashboard = styled.div`
  background-color: #f0ead2;
  width: 90%;
  height: 90%;
  border-radius: 20px;
  border: 1px solid #adc178;
  padding: 20px;
  overflow-y: scroll;

  @media (max-width: 500px) {
    width: 100%;
    height: 100%;
    border-radius: 0;
  }
`;

export default StyledDashboard;
