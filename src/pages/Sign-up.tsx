import styled from "styled-components";
import LogoContainer from "../components/LogoContainer";
import SignUpForm from "../components/SignUpForm";

export default function SignUp() {
  return (
    <Container>
      <LogoContainer />
      <SignUpForm />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
`;
