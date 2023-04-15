import styled from "styled-components";
export default function LogoContainer() {
  return (
    <Container>
      <h1>Nutrify</h1>
      <h2>Bem vindo de volta!</h2>
    </Container>
  );
}

const Container = styled.div`
  background-color: #ADC178;
  height: 100vh;
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: "Raleway", sans-serif;
  h1 {
    font-size: 95px;
    color: #6C584C;
    text-shadow: 2px 2px #A98467;
    margin-bottom: 30px;
  }
  h2{
    font-size: 25px;
    color: #6C584C;
    text-shadow: 1px 1px #A98467;
  }
`;
