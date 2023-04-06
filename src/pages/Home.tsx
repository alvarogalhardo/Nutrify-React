import styled from "styled-components";
import Dashboard from "../components/Dashboard";
import Header from "../components/Header";

export default function Home() {
  return (
    <>
      <Header />
      <Container>
        <Dashboard />
      </Container>
    </>
  );
}

const Container = styled.div`
  padding-top: 60px;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
