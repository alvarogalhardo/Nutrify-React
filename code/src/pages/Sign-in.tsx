import styled from "styled-components";
import LogoContainer from "../components/LogoContainer";
import SignInForm from "../components/SignInForm";

export default function SignIn() {
  return (
    <Container>
      <LogoContainer />
      <SignInForm />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
`;
