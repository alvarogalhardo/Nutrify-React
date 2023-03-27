import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <Link to={"/"}>
      <Content>Nutrify</Content>
    </Link>
  );
}

const Content = styled.h1`
  font-family: "Raleway", sans-serif;
  font-size: 35px;
  color: #283618;
`;
