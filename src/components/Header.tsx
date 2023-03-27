
import styled from "styled-components";
import Logo from "./Logo";

export default function Header() {
  return (
    <Container>
      <Logo/>
    </Container>
  );
}

const Container = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  background-color: #606c38;
  height: 60px;
  width: 100%;
  display: flex;
  align-items: center;
  padding-left: 30px;
`;
